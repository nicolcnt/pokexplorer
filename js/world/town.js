// Villaggi e città: PokéMarket, Centro Pokémon, abitanti (dialoghi, regali e scambi).
import * as Dex from '../systems/pokedex.js';
import { Pokemon } from '../core/pokemon.js';
import { speciesData, pokemonSprite } from '../core/data.js';
import { typeName } from '../core/types.js';
import {
  BAG_LIMITS, SHOP_ITEMS, FALLBACK_AVATAR, OAK_PORTRAIT, OVERWORLD_NPCS, OVERWORLD_NPC_LABELS,
  evolvedEncounterId, STONE_EVOLUTIONS, isPokemartItemUnlocked, itemImage, itemLabel, overworldPortraitUrl, overworldSpriteUrl, resolvedSpritePath,
} from '../core/constants.js';
import { keyRouter, keyDirection, isSpace, controlsIn, focusControl } from '../ui/input.js';
import * as Dialogs from '../ui/dialogs.js';

const make = (tag, className, text) => { const el = document.createElement(tag); if (className) el.className = className; if (text != null) el.textContent = text; return el; };

export const townMethods = {
  setTrainerPortrait(element, src) {
    if (!element) return;
    element.onerror = () => { element.onerror = null; element.src = FALLBACK_AVATAR; };
    element.src = resolvedSpritePath(src) || FALLBACK_AVATAR;
  },

  // ---------------------------------------------------------------- PokéMarket
  openPokemartDialog() {
    if (!this.isTownFloor() || this.isCelestialCave || this.isLocked) return false;
    this.stopContinuousWalk(); this.playerFacing = 'up'; this.playerStep = 0;
    this.isLocked = true;
    this.triggerNpcEvent({ specialRole: 'pokemart-clerk', npcName: 'Commesso PokéMarket', npcSprite: overworldSpriteUrl('clerk'), npcEvent: 'dialogue' });
    return true;
  },

  /** Il catalogo è generato da SHOP_ITEMS: prezzi e sblocchi hanno un'unica fonte. */
  renderShop() {
    const catalogue = this.$id('mart-catalogue');
    if (!catalogue) return;
    catalogue.replaceChildren(...SHOP_ITEMS.filter(item => isPokemartItemUnlocked(item.id, this.floor)).map(item => {
      const button = make('button', 'btn-nav mart-product');
      button.type = 'button';
      button.dataset.item = item.id;
      const owned = item.id === 'radar' ? this.radarCharges : this.items[item.id] || 0;
      const full = item.id !== 'radar' && owned >= (BAG_LIMITS[item.id] ?? Infinity);
      button.append(Object.assign(make('img', 'mart-item-icon'), { src: itemImage(item.id), alt: '' }),
        make('span', 'mart-product-name', item.id === 'radar' ? 'Radar Scan +1' : itemLabel(item.id)),
        make('span', 'mart-product-owned', item.id === 'radar' ? `${owned === Infinity ? '∞' : owned}` : `×${owned}`),
        make('span', 'mart-product-price', `$${item.price.toLocaleString('it-IT')}`));
      button.disabled = full || this.money < item.price;
      button.title = full ? 'Capacità massima raggiunta' : this.money < item.price ? 'Pokécoins insufficienti' : '';
      button.onclick = () => { this.purchaseItem(item.id); };
      return button;
    }));
    this.$id('mart-money').textContent = `$${this.money.toLocaleString('it-IT')}`;
  },

  openPokemartShop() {
    this.isLocked = true;
    this.renderShop();
    this.$id('pokemart-overlay')?.classList.remove('hidden');
    focusControl(controlsIn(this.$id('mart-catalogue'))[0] || this.$id('close-market-btn'));
    this.logMsg('Hai aperto il PokéMarket.');
    return true;
  },

  closePokemart() {
    const market = this.$id('pokemart-overlay');
    if (!market || market.classList.contains('hidden')) return false;
    market.classList.add('hidden');
    this.isLocked = true;
    this.triggerNpcEvent({ specialRole: 'pokemart-farewell', npcName: 'Commesso PokéMarket', npcSprite: overworldSpriteUrl('clerk'), npcEvent: 'dialogue' });
    return true;
  },

  handleShopKey(event) {
    const shop = this.$id('pokemart-overlay');
    if (!shop || shop.classList.contains('hidden')) return false;
    const items = controlsIn(shop, 'button:not([disabled]):not(.hidden)');
    if (event.key === 'Escape') { event.preventDefault(); this.closePokemart(); return true; }
    const dir = keyDirection(event);
    if (dir) {
      event.preventDefault();
      const delta = dir === 'up' || dir === 'left' ? -1 : 1;
      const index = items.indexOf(document.activeElement);
      focusControl(items[index < 0 ? (delta > 0 ? 0 : items.length - 1) : (index + delta + items.length) % items.length]);
      return true;
    }
    if (isSpace(event) && items.includes(document.activeElement)) { event.preventDefault(); if (!event.repeat) document.activeElement.click(); }
    return true;
  },

  canAcceptItem(id) {
    if (id === 'fishingRod') return !this.items.fishingRod;
    return BAG_LIMITS[id] !== undefined && (this.items[id] || 0) < BAG_LIMITS[id];
  },

  grantItem(id, count = 1) {
    if (id === 'fishingRod') { if (this.items.fishingRod) return false; this.items.fishingRod = true; return true; }
    const limit = BAG_LIMITS[id];
    if (limit === undefined) return false;
    const available = Math.max(0, limit - (this.items[id] || 0));
    if (!available) return false;
    this.items[id] = (this.items[id] || 0) + Math.min(available, count);
    return true;
  },

  purchaseItem(id) {
    const item = SHOP_ITEMS.find(entry => entry.id === id);
    if (!item) return false;
    if (!isPokemartItemUnlocked(id, this.floor)) { this.logMsg('Questo strumento non è ancora disponibile in questo PokéMarket.'); return false; }
    if (this.money < item.price) { this.logMsg(`Pokécoins insufficienti: servono ${item.price}.`); return false; }
    if (id === 'radar') {
      if (this.radarCharges === Infinity) { this.logMsg('Radar già illimitato in DEV MODE.'); return false; }
      this.radarCharges++;
    } else if (!this.grantItem(id)) { this.logMsg('Capacità massima raggiunta!'); return false; }
    this.money -= item.price;
    this.renderSidebar(); this.renderShop();
    const focusTarget = this.$id('mart-catalogue')?.querySelector(`[data-item="${id}"]:not(:disabled)`);
    focusControl(focusTarget || controlsIn(this.$id('mart-catalogue'))[0] || this.$id('close-market-btn'));
    this.logMsg(`Acquisto completato: ${id === 'radar' ? 'Radar Scan +1' : itemLabel(id)}.`);
    return true;
  },

  // ---------------------------------------------------------------- Centro Pokémon
  cancelPokemonCenterHealing() {
    clearTimeout(this.pokemonCenterHealTimer);
    this.pokemonCenterHealTimer = null;
    this.pokemonCenterHealSequence++;
  },

  openPokemonCenterDialog({ emergency = false } = {}) {
    if ((!emergency && !this.isTownFloor()) || this.isCelestialCave || this.isLocked) return false;
    this.stopContinuousWalk();
    this.isLocked = true;
    this.playerFacing = 'up'; this.playerStep = 0;
    this.triggerNpcEvent({ specialRole: 'pokemon-center-nurse', npcName: 'Infermiera Joy', npcSprite: overworldSpriteUrl('nurse'), npcEvent: 'dialogue' });
    this.logMsg('Infermiera Joy cura la tua squadra.');
    return true;
  },

  playPokemonCenterHealSound() {
    if (typeof Audio === 'undefined') return false;
    try {
      if (!this.pokemonCenterHealAudio) {
        this.pokemonCenterHealAudio = new Audio('assets/audio/heal.webm');
        this.pokemonCenterHealAudio.preload = 'auto';
        this.music?.registerEffect(this.pokemonCenterHealAudio, .7);
      }
      this.pokemonCenterHealAudio.pause();
      this.pokemonCenterHealAudio.currentTime = 0;
      this.pokemonCenterHealAudio.play()?.catch?.(() => { /* audio bloccato dal browser */ });
      return true;
    } catch { return false; }
  },

  startPokemonCenterHealing(overlay, speech) {
    clearTimeout(this.pokemonCenterHealTimer);
    const token = ++this.pokemonCenterHealSequence;
    speech.textContent = 'Infermiera Joy: «Mi prenderò cura dei tuoi Pokémon!»';
    this.pokemonCenterHealTimer = setTimeout(() => {
      this.pokemonCenterHealTimer = null;
      if (token !== this.pokemonCenterHealSequence || this.activeDialogNpcCell?.specialRole !== 'pokemon-center-nurse' || overlay.classList.contains('hidden')) return;
      for (const pokemon of this.team) {
        if (this.runMode === 'normal' && pokemon.currentHp <= 0) pokemon.treatedFaint = true;
        pokemon.healAll();
      }
      this.renderSidebar();
      this.playPokemonCenterHealSound();
      speech.textContent = 'Infermiera Joy: «La tua squadra è in perfetta forma. A presto!»';
      this.logMsg('Centro Pokémon: PS, PP e stati alterati ripristinati.');
      this.waitForNpcClick(overlay);
    }, this.gameDelay(2000));
  },

  // ---------------------------------------------------------------- Abitanti
  /** Il ritratto del dialogo corrisponde sempre allo sprite mostrato sulla mappa. */
  getNpcPortraitAsset(npc) {
    if (['celestial-oak', 'cave-oak'].includes(npc?.specialRole)) return OAK_PORTRAIT;
    const roles = { 'pokemon-center-nurse': 'nurse', 'pokemart-clerk': 'clerk', 'pokemart-farewell': 'clerk', fisherman: 'fisher', 'exp-share-gift': 'scientist', 'eevee-elder': 'old_woman' };
    let key = roles[npc?.specialRole];
    if (!key) key = String(resolvedSpritePath(npc?.npcSprite)).match(/overworld\/([a-z_]+)\.png$/)?.[1];
    if (!key) {
      const index = OVERWORLD_NPC_LABELS.findIndex(label => label.toLowerCase() === String(npc?.npcName || '').toLowerCase());
      key = OVERWORLD_NPCS[index];
    }
    return overworldPortraitUrl(key) || FALLBACK_AVATAR;
  },

  renderNpcPortrait(npc) {
    const slot = this.$id('npc-portrait-img');
    if (!slot) return;
    slot.setAttribute('aria-label', npc?.npcName || 'Abitante');
    const img = Object.assign(make('img', 'npc-portrait-illustration'), { alt: '', src: this.getNpcPortraitAsset(npc) });
    img.onerror = () => { img.onerror = null; img.src = FALLBACK_AVATAR; };
    slot.replaceChildren(img);
  },

  hideDialogNpcBackground(hide, npcCell = null) {
    this.activeDialogNpcCell = hide ? npcCell : null;
    this.$id('dungeon-grid-board')?.classList.toggle('npc-conversation-active', Boolean(hide));
    if (this.gridMap?.length) this.renderDungeon();
  },

  clearNpcAdvance() {
    if (this.autoAdvance?.run === this.pendingNpcAdvance) this.cancelAutoAdvance();
    clearTimeout(this.pendingNpcAdvanceTimer);
    if (this.pendingNpcAdvance) document.removeEventListener('pointerdown', this.pendingNpcAdvance, true);
    this.removeNpcKeys?.();
    this.removeNpcKeys = null;
    this.pendingNpcAdvance = null;
    this.$id('npc-dialog-overlay')?.querySelector('.npc-click-hint')?.remove();
  },

  closeNpcDialog() {
    this.cancelPokemonCenterHealing();
    this.clearNpcAdvance();
    this.$id('npc-dialog-overlay')?.classList.add('hidden');
    this.$id('npc-actions')?.classList.add('hidden');
    this.isLocked = false;
    this.hideDialogNpcBackground(false);
    this.saveCheckpoint();
  },

  triggerNpcEvent(npc) {
    this.renderNpcPortrait(npc);
    const overlay = this.$id('npc-dialog-overlay');
    this.hideDialogNpcBackground(true, npc);
    const speech = this.$id('npc-speech-text');
    const actions = this.$id('npc-actions');
    overlay.classList.remove('hidden');
    actions.classList.add('hidden');
    this.$id('npc-trade-offer')?.replaceChildren();
    const say = text => { speech.textContent = text; this.waitForNpcClick(overlay); };
    switch (npc.specialRole) {
      case 'eevee-elder': this.startEeveeElderDialog(overlay, speech); return;
      case 'pokemon-center-nurse': this.startPokemonCenterHealing(overlay, speech); return;
      case 'pokemart-clerk':
        speech.textContent = 'Commesso: «Benvenuto al PokéMarket! Cosa desideri acquistare?»';
        this.waitForNpcClick(overlay, () => { this.closeNpcDialog(); this.openPokemartShop(); });
        return;
      case 'pokemart-farewell': say('Commesso: «Grazie per la visita! Torna a trovarci!»'); return;
      case 'celestial-oak': this.showOakIntroduction(); return;
      case 'cave-oak':
        say(this.celestialPhase === 'complete' ? 'Professor Oak: «Ora la grotta tace. Quando sei pronto, raggiungi l’uscita a sud.»'
          : this.celestialPhase === 'rematch' ? 'Professor Oak: «Mewtwo ti osserva. Hai una sola occasione da non sprecare.»'
            : 'Professor Oak: «Avverti questa pressione? Non avanzare se la tua squadra non è pronta.»');
        return;
      case 'exp-share-gift':
        if (this.expShareClaimed) say('Assistente: «Il Condividi Esperienza è tuo. Lo trovi nello Zaino, tra gli Oggetti chiave.»');
        else if (this.badgeCount() < 2) say('Assistente: «Torna dopo aver conquistato la seconda medaglia!»');
        else {
          this.expShareClaimed = true; this.expShareEnabled = true;
          this.logMsg('Hai ottenuto il Condividi Esperienza!'); this.renderSidebar();
          say('Assistente: «Ecco il Condividi Esperienza! I compagni riceveranno parte dei punti esperienza.»');
        }
        return;
      case 'fisherman': {
        const obtained = this.items.fishingRod || this.fishingRodGiftClaimed;
        if (!obtained) { this.grantItem('fishingRod'); this.fishingRodGiftClaimed = true; this.renderSidebar(); }
        this.logMsg(obtained ? 'Il Pescatore ti saluta.' : 'Hai ricevuto la Canna da Pesca!');
        say(obtained ? 'Pescatore: «Usa la canna vicino all’acqua!»' : 'Pescatore: «Questa Canna da Pesca è per te. Provala vicino all’acqua!»');
        return;
      }
      default: break;
    }
    if (npc.npcEvent === 'trade' && !npc.tradeCompleted) { this.offerNpcTrade(npc, overlay, speech, actions); return; }
    if (npc.npcEvent === 'gift') {
      const id = npc.npcGiftId, label = itemLabel(id);
      if (npc.giftConsumed) { say('Abitante: «Spero che il regalo ti sia stato utile!»'); return; }
      const success = this.grantItem(id);
      if (success) npc.giftConsumed = true;
      this.logMsg(success ? `Regalo ricevuto: ${label}!` : `Zaino pieno: ${label} non ricevuto.`);
      this.renderSidebar();
      say(success ? `Abitante: «Tieni, questo ${label} è per te!»` : `Abitante: «Volevo regalarti ${label}, ma il tuo zaino è pieno.»`);
      return;
    }
    if (npc.npcEvent === 'heal') {
      if (npc.healUsed) { say('Abitante: «Riposati quando vuoi, ma il mio tè è finito!»'); return; }
      npc.healUsed = true;
      for (const mon of this.team) if (mon.currentHp > 0) mon.currentHp = Math.min(mon.maxHp, mon.currentHp + Math.ceil(mon.maxHp / 2));
      this.renderSidebar();
      this.logMsg('Una pausa ristoratrice: i Pokémon in forze recuperano metà dei PS.');
      say('Abitante: «Siediti un attimo e prendi un tè. I tuoi Pokémon recuperano un po’ di energie!»');
      return;
    }
    if (npc.npcEvent === 'radar') {
      if (npc.radarUsed || this.radarCharges === Infinity) { say('Abitante: «Il Radar funziona meglio sui percorsi, ricordalo!»'); return; }
      npc.radarUsed = true;
      this.radarCharges++;
      this.renderSidebar();
      this.logMsg('Hai ricevuto una scansione Radar in più!');
      say('Abitante: «Ho una batteria di ricambio per il tuo Rotom Radar. Ti vale una scansione in più!»');
      return;
    }
    if (npc.npcEvent === 'quiz' && npc.npcQuiz) { this.askTypeQuiz(npc, overlay, speech, actions); return; }
    say(`Abitante: «${npc.npcLine || this.npcDialogues[0]}»`);
  },

  startEeveeElderDialog(overlay, speech) {
    if (this.eeveeStoneGiftClaimed) {
      speech.textContent = 'Anziana: «La pietra che hai scelto ti accompagnerà nel viaggio. Prenditi cura del tuo Eevee!»';
      this.waitForNpcClick(overlay); return;
    }
    const hasEevee = this.team.some(mon => mon.id === 133);
    const lines = hasEevee ? [
      'Anziana: «Oh, che meraviglia! Quello è proprio un Eevee! Che compagno straordinario hai trovato!»',
      'Anziana: «Lo sapevi? Eevee può evolversi in tre forme diverse grazie a pietre speciali: Vaporeon, Jolteon e Flareon.»',
      'Anziana: «Ho conservato queste pietre per tanti anni. Scegline una: te la regalo! Potrai usarla su Eevee quando vorrai.»',
    ] : [
      'Anziana: «Non hai ancora catturato un Eevee? Dovresti farlo! È un Pokémon davvero speciale.»',
      'Anziana: «Con una Pietraidrica diventa Vaporeon, con una Pietratuono Jolteon e con una Pietrafocaia Flareon.»',
      'Anziana: «Scegli una delle mie tre pietre. È un regalo! Conservala finché non incontrerai il tuo Eevee.»',
    ];
    const next = index => {
      speech.textContent = lines[index];
      this.waitForNpcClick(overlay, () => {
        if (index + 1 < lines.length) next(index + 1);
        else { this.closeNpcDialog(); this.openEeveeGift(); }
      });
    };
    next(0);
  },

  openEeveeGift() {
    if (this.eeveeStoneGiftClaimed || this.floor !== 15) return false;
    const overlay=this.$id('eevee-stone-gift'), choices=this.$id('eevee-stone-choices');
    if (!overlay || !choices) return false;
    choices.replaceChildren(); this.isLocked=true;
    for (const [id,destination] of Object.entries(STONE_EVOLUTIONS)) {
      const button=make('button','eevee-stone-option'); button.type='button';
      button.append(Object.assign(make('img'), {src:itemImage(id),alt:''}),
        make('span','',itemLabel(id)),make('small','',speciesData(destination)?.name || '')); 
      button.onclick=async () => {
        if (this.eeveeStoneGiftClaimed || this._eeveeGiftBusy) return;
        this._eeveeGiftBusy=true;
        const accepted=await Dialogs.confirm({ title:'PIETRA EVOLUTIVA', message:`Vuoi scegliere ${itemLabel(id)}? Puoi ricevere una sola pietra in questa run.`, accept:'SCEGLI',cancel:'ANNULLA' });
        this._eeveeGiftBusy=false;
        if (!accepted || this.eeveeStoneGiftClaimed || this.floor !== 15) return;
        if (!this.canAcceptItem(id) || !this.grantItem(id)) {
          this.showItemFeedback('Non puoi trasportare questa pietra. Libera spazio e torna dall’anziana.'); return;
        }
        this.eeveeStoneGiftClaimed=true;
        this.closeEeveeGift();
        this.renderSidebar(); this.logMsg(`L’anziana ti ha regalato ${itemLabel(id)}!`);
        this.showDiscoveryNotice(`${itemLabel(id).toUpperCase()} OTTENUTA!`); this.saveCheckpoint();
      };
      choices.append(button);
    }
    overlay.classList.remove('hidden'); choices.querySelector('button')?.focus();
    return true;
  },
  closeEeveeGift() {
    if (this._eeveeGiftBusy) return;
    this.$id('eevee-stone-gift')?.classList.add('hidden');
    this.isLocked=false;
    this.$id('dungeon-viewport')?.focus?.();
  },

  /** Quiz sui tipi: la risposta giusta vale una Superpozione (o una Poké Ball se lo zaino è pieno). */
  askTypeQuiz(npc, overlay, speech, actions) {
    const quiz = npc.npcQuiz;
    const say = text => { speech.textContent = text; actions.classList.add('hidden'); this.waitForNpcClick(overlay); };
    if (npc.quizDone) { say('Abitante: «Ormai sei un esperto di tipi!»'); return; }
    speech.textContent = `Abitante: «Quiz! Quale tipo di mossa è superefficace contro i Pokémon di tipo ${typeName(quiz.defender)}?»`;
    const [first, second] = quiz.first === 'right' ? [quiz.right, quiz.wrong] : [quiz.wrong, quiz.right];
    const yes = this.$id('npc-btn-yes'), no = this.$id('npc-btn-no');
    yes.textContent = typeName(first); no.textContent = typeName(second); no.classList.remove('btn-danger');
    actions.classList.remove('hidden');
    yes.focus({ preventScroll: true });
    const answer = choice => {
      npc.quizDone = true;
      if (choice !== quiz.right) {
        say(`Abitante: «No! Contro il tipo ${typeName(quiz.defender)} serve il tipo ${typeName(quiz.right)}. Sarà per la prossima volta!»`);
        return;
      }
      const prize = this.grantItem('superPotion') ? 'superPotion' : this.grantItem('pokeball') ? 'pokeball' : null;
      this.renderSidebar();
      if (prize) this.logMsg(`Quiz superato: ${itemLabel(prize)} ricevuta!`);
      say(prize ? `Abitante: «Esatto! Ecco una ${itemLabel(prize)} come premio!»` : 'Abitante: «Esatto! Avrei un premio, ma il tuo zaino è pieno.»');
    };
    yes.onclick = () => answer(first);
    no.onclick = () => answer(second);
  },

  /** Scambio: il Pokémon offerto è mostrato prima di accettare. */
  offerNpcTrade(npc, overlay, speech, actions) {
    const source = this.activeMon;
    if (!source || !this.team.includes(source)) { speech.textContent = 'Abitante: «Ti serve un Pokémon per fare uno scambio.»'; this.waitForNpcClick(overlay); return; }
    const offeredId = npc.npcTradeOfferId ||= evolvedEncounterId(npc.npcTradeSpeciesId || 19, source.level);
    const offered = speciesData(offeredId);
    speech.textContent = `Abitante: «Scambieresti il tuo ${source.name} con il mio ${offered.name.toUpperCase()} (Lv.${source.level})?»`;
    const card = this.$id('npc-trade-offer');
    if (card) card.replaceChildren(Object.assign(make('img'), { src: pokemonSprite(offeredId), alt: '' }),
      make('span', '', `${offered.name.toUpperCase()} · ${offered.types.map(typeName).join(' / ')}`));
    this.$id('npc-btn-yes').textContent = 'ACCETTA'; this.$id('npc-btn-no').textContent = 'RIFIUTA'; this.$id('npc-btn-no').classList.add('btn-danger');
    actions.classList.remove('hidden');
    this.$id('npc-btn-yes').focus({ preventScroll: true });
    this.$id('npc-btn-yes').onclick = () => {
      const index = this.team.indexOf(source);
      if (index < 0) { this.closeNpcDialog(); return; }
      const received = new Pokemon(offered, source.level);
      this.team[index] = received;
      this.ensureActivePokemon();
      npc.tradeCompleted = true;
      Dex.record(received, 'caught', `Scambio · Piano ${this.floor}`);
      this.soloRunEligible = false;
      this.logMsg(`Scambio effettuato! Ora hai ${received.name}!`);
      this.closeNpcDialog(); this.renderSidebar();
    };
    this.$id('npc-btn-no').onclick = () => { this.closeNpcDialog(); this.logMsg('Hai rifiutato lo scambio. Puoi riparlarci per ripensarci.'); };
  },

  /** Attende un clic o Spazio/Invio per far avanzare il dialogo. */
  waitForNpcClick(overlay, onAdvance = () => this.closeNpcDialog()) {
    this.clearNpcAdvance();
    overlay.appendChild(make('div', 'npc-click-hint', 'CLICCA O PREMI SPAZIO ▾'));
    const advance = () => { this.clearNpcAdvance(); onAdvance(); };
    this.pendingNpcAdvance = advance;
    this.scheduleAutoAdvance(this.$id('npc-speech-text')?.textContent, advance);
    this.pendingNpcAdvanceTimer = setTimeout(() => {
      if (this.pendingNpcAdvance !== advance || overlay.classList.contains('hidden')) return;
      document.addEventListener('pointerdown', advance, true);
      this.removeNpcKeys = keyRouter.push('npc-dialog', event => {
        if (isSpace(event) || event.key === 'Enter') { event.preventDefault(); if (!event.repeat) advance(); }
        return true;
      });
    }, 20);
  },
};

