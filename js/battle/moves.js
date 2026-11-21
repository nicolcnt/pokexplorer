// Esecuzione delle mosse, effetti di fine turno, abilità d'ingresso e meteo.
import * as Abilities from '../core/abilities.js';
import { CHARGE_MESSAGES, CHARGE_MOVES, CHARGE_UNTOUCHABLE, RAMPAGE_MOVES, RECHARGE_MOVES, ROLLOUT_MOVES, getConfusionDamage, rollMagnitude, rollMultiHitCount } from '../core/constants.js';
import { calculateBattleDamage, randomMetronomeMove } from '../core/pokemon.js';
import { STAT_LABELS_IT, accuracyStageMultiplier, statMultiplier } from '../core/stats.js';
import { typeBlocksStatus, typeEffectiveness } from '../core/types.js';

export const movesMethods = {
  triggerEntryAbilities(mon,opponent){
    const messages=Abilities.entry(mon,opponent,{weather:this.effectiveBattleWeather(),
      setWeather:type=>{this.battleWeather={type,turns:5};},typeEffectiveness});
    if(messages.length)this.setBattleMsg(messages.at(-1));
  },

  statusAbilityBlocks(mon,ailment){
    return Abilities.statusBlocked(mon,ailment,{weather:this.effectiveBattleWeather()});
  },

  abilityAttackImmunity(defender,move,attacker){
    const outcome=Abilities.immunity(attacker,defender,move,
      {weather:this.effectiveBattleWeather(),effectiveness:typeEffectiveness(move.type,defender.types)});
    if(!outcome)return null;
    if(outcome.kind==='heal'){
      const restored=Abilities.restore(defender,outcome.amount);
      return `${defender.name} recupera ${restored} PS grazie a ${defender.abilityName}!`;
    }
    if(outcome.kind==='stage'){
      Abilities.stage(defender,outcome.stat,1);
      return `${defender.name} potenzia le statistiche grazie a ${defender.abilityName}!`;
    }
    if(outcome.kind==='boost')defender[outcome.key]=true;
    return `${defender.name} neutralizza ${move.name} grazie a ${defender.abilityName}!`;
  },

  effectiveBattleWeather(){
    if(['cloud-nine','air-lock'].includes(this.activeMon?.ability) || ['cloud-nine','air-lock'].includes(this.enemyMon?.ability))return null;
    return this.battleWeather;
  },

  isOpponentTrapping(mon){
    const ability=this.enemyMon?.ability;
    if(!mon||!ability||!this.isBattleVisible())return false;
    if(ability==='shadow-tag'&&mon.ability!=='shadow-tag')return true;
    if(ability==='magnet-pull'&&mon.types?.includes('steel'))return true;
    if(ability==='arena-trap'&&!mon.types?.includes('flying')&&mon.ability!=='levitate')return true;
    return false;
  },

  battleSpeed(mon){
    return mon.speed*statMultiplier(mon.statStages?.speed)*(mon.status==='paralysis'&&mon.ability!=='quick-feet'?.5:1)*Abilities.speedMultiplier(mon,{weather:this.effectiveBattleWeather()});
  },

  stopRollout(mon){mon.rolloutTurns=0;mon.rolloutHits=0;mon.rolloutMove=null;},

  // A separate hit runs its own damage, crit, ability and recoil logic. Only
  // the initial accuracy check and one PP payment occur per multihit action.
  async applyMove(attacker,defender,move,target,options={}){
    if(attacker.flinchedThisTurn){attacker.flinchedThisTurn=false;await this.battleText(`${attacker.name} tentenna e non attacca!`);return 'flinch';}
    if(attacker.rechargeTurns>0){
      attacker.rechargeTurns--;
      await this.battleText(`${attacker.name} deve riposare per recuperare le energie!`);
      return 'recharging';
    }
    // The release of a charging attack does not spend PP a second time.
    const releasing=Boolean(attacker.pendingCharge && attacker.pendingCharge.move.id===move.id);
    const sleepMove=['snore','sleep-talk'].includes(move.id);
    if(attacker.status==='sleep' && !options.fromSleepTalk){
      attacker.statusTurns-=attacker.ability==='early-bird'?2:1;
      if(attacker.statusTurns>0 && !sleepMove){attacker.pendingCharge=null;attacker.rampageTurns=0;this.stopRollout(attacker);await this.battleText(`${attacker.name} sta dormendo!`);return;}
      if(attacker.statusTurns<=0){attacker.status=null;attacker.nightmareActive=false;
        await this.battleText(`${attacker.name} si è svegliato!`);}
    }
    if(sleepMove && attacker.status!=='sleep'){
      await this.battleText(`${move.name} fallisce: ${attacker.name} non dorme!`);return 'no-effect';
    }
    if(attacker.status==='freeze' && Math.random()>=.2){attacker.pendingCharge=null;attacker.rampageTurns=0;this.stopRollout(attacker);await this.battleText(`${attacker.name} è congelato!`);return;}
    if(attacker.status==='freeze')attacker.status=null;
    if(attacker.status==='paralysis' && Math.random()<.25){attacker.pendingCharge=null;attacker.rampageTurns=0;this.stopRollout(attacker);await this.battleText(`${attacker.name} è paralizzato!`);return;}
    if(attacker.attractedTo===defender && defender.currentHp>0 && Math.random()<.5){await this.battleText(`${attacker.name} è immobilizzato dall'infatuazione!`);return;}
    if(attacker.confusionTurns>0){
      await this.battleText(`${attacker.name} è confuso!`);
      attacker.confusionTurns--;
      if(Math.random()<.5){
        const selfDamage=getConfusionDamage(attacker);
        attacker.currentHp=Math.max(0,attacker.currentHp-selfDamage);
        attacker.pendingCharge=null;attacker.rampageTurns=0;this.stopRollout(attacker);
        this.updateBattleHUD();await this.battleText(`${attacker.name} si ferisce per la confusione! (${selfDamage} danni)`);
        return 'confusion-self-hit';
      }
      if(attacker.confusionTurns===0)await this.battleText(`${attacker.name} non è più confuso!`);
    }
    if(!options.skipPp && !releasing && !attacker.rampageTurns && !attacker.rolloutTurns)
      move.currentPp=Math.max(0,move.currentPp-(defender.ability==='pressure'?2:1));
    if(releasing)attacker.pendingCharge=null;
    else if(CHARGE_MOVES.has(move.id)){
      attacker.pendingCharge={move};
      // Skull Bash's defence buff applies on the turn it is charged.
      if(move.id==='skull-bash')attacker.statStages.defense=Math.min(6,(attacker.statStages.defense||0)+1);
      if(move.id==='meteor-beam')attacker.statStages['special-attack']=Math.min(6,(attacker.statStages['special-attack']||0)+1);
      if(move.id==='electro-shot')attacker.statStages['special-attack']=Math.min(6,(attacker.statStages['special-attack']||0)+1);
      this.updateBattleHUD();
      await this.battleText(`${attacker.name} ${CHARGE_MESSAGES[move.id]||'si prepara'}!`);
      return 'charging';
    }
    if(RAMPAGE_MOVES.has(move.id) && !attacker.rampageTurns){
      attacker.rampageTurns=2+Math.floor(Math.random()*2);
      attacker.rampageMove=move;
    }
    if(move.id!=='destiny-bond')attacker.destinyBondActive=false;
    if(move.id!=='fury-cutter')attacker.furyCutterHits=0;
    attacker.lastUsedMoveId=move.id;
    this.setBattleMsg(`${attacker.name} usa ${move.name}!`);
    if(move.unsupported){await this.battleText(`${move.name}: dati non disponibili, mossa non eseguibile offline.`);return 'unsupported';}
    if(['sandstorm','rain-dance','sunny-day','hail','snowscape'].includes(move.id)){
      const kind={'sandstorm':'sandstorm','rain-dance':'rain','sunny-day':'sun',hail:'hail',snowscape:'snow'}[move.id];
      if(this.battleWeather?.type===kind){await this.battleText('Queste condizioni meteo sono già attive!');return 'no-effect';}
      this.battleWeather={type:kind,turns:5};
      await this.battleText(`${attacker.name} modifica il tempo con ${move.name}!`);return 'weather';
    }
    if(move.id==='metronome'){
      const chosen=randomMetronomeMove();
      await this.battleText(`${attacker.name} agita il dito: esce ${chosen.name}!`);
      return this.applyMove(attacker,defender,chosen,target,{skipPp:true});
    }
    if((move.selfKo||['self-destruct','explosion'].includes(move.id)) && (attacker.ability==='damp'||defender.ability==='damp')){
      await this.battleText('Umidità impedisce l’esplosione!');return 'no-effect';
    }
    if(move.id==='destiny-bond'){
      attacker.destinyBondActive=true;
      await this.battleText(`${attacker.name} è pronto a trascinare con sé l’avversario!`);
      return 'destiny-bond';
    }
    if(move.id==='curse'){
      if(!attacker.types?.includes('ghost')){
        attacker.statStages.attack=Math.min(6,(attacker.statStages.attack||0)+1);
        attacker.statStages.defense=Math.min(6,(attacker.statStages.defense||0)+1);
        attacker.statStages.speed=Math.max(-6,(attacker.statStages.speed||0)-1);
        await this.battleText(`${attacker.name}: Attacco e Difesa aumentano, Velocità diminuisce!`);
      }else if(defender.ghostCurseActive){
        await this.battleText(`${defender.name} è già colpito da Maledizione!`);return 'no-effect';
      }else if(defender.protectedThisTurn){
        await this.battleText(`${defender.name} blocca Maledizione!`);return 'no-effect';
      }else{
        attacker.currentHp=Math.max(0,attacker.currentHp-Math.max(1,Math.floor(attacker.maxHp/2)));
        defender.ghostCurseActive=true;
        await this.battleText(`${attacker.name} sacrifica PS: una maledizione colpisce ${defender.name}!`);
      }
      this.updateBattleHUD();return 'curse';
    }
    if(move.id==='sleep-talk'){
      const alternatives=attacker.moves.filter(m=>m.id!==move.id && m.id!=='sleep-talk' && m.id!=='metronome' && m.id!=='assist' && m.id!=='mirror-move');
      if(!alternatives.length){await this.battleText('Sonnolalia fallisce: nessuna mossa utilizzabile!');return 'no-effect';}
      const chosen=alternatives[Math.floor(Math.random()*alternatives.length)];
      await this.battleText(`${attacker.name} usa Sonnolalia: ${chosen.name}!`);
      return this.applyMove(attacker,defender,chosen,target,{skipPp:true,fromSleepTalk:true});
    }
    if(move.id==='geomancy'){
      for(const stat of ['special-attack','special-defense','speed'])
        attacker.statStages[stat]=Math.min(6,(attacker.statStages[stat]||0)+2);
      this.updateBattleHUD();
      await this.battleText(`${attacker.name} aumenta Attacco Speciale, Difesa Speciale e Velocità!`);
      return 'powered-up';
    }
    if(move.id==='teleport'){
      if(attacker===this.enemyMon && this.battleType==='wild' && !this.isRaidActive){
        this.endBattle(`${attacker.name} è fuggito usando Teletrasporto!`);return 'battle-ended';
      }
      await this.battleText('Teletrasporto non ha effetto sull’allenatore avversario.');
      return 'no-effect';
    }
    if(move.cureTeam||move.id==='heal-bell'||move.id==='aromatherapy'){
      for(const mon of this.team||[])if(mon){mon.status=null;mon.statusTurns=0;}
      await this.battleText(`${attacker.name} guarisce la squadra dai problemi di stato!`);
      this.updateBattleHUD();return 'cure-team';
    }
    if(move.cureStatus||move.id==='refresh'){
      if(!attacker.status){await this.battleText('Non c’è alcuno stato alterato da curare!');return 'no-effect';}
      attacker.status=null;attacker.statusTurns=0;
      await this.battleText(`${attacker.name} guarisce il proprio stato alterato!`);
      this.updateBattleHUD();return 'cure-status';
    }
    if(move.maxAttackHalfHp||move.id==='belly-drum'){
      if(attacker.currentHp<=Math.floor(attacker.maxHp/2)){
        await this.battleText('Panciamburo fallisce: PS insufficienti!');return 'no-effect';
      }
      attacker.currentHp-=Math.floor(attacker.maxHp/2);attacker.statStages.attack=6;
      await this.battleText(`${attacker.name} sacrifica metà dei suoi PS per massimizzare l’Attacco!`);
      this.updateBattleHUD();return 'belly-drum';
    }
    if(move.disengage||['roar','whirlwind'].includes(move.id)){
      if(['wild','fishing'].includes(this.battleType)&&!this.isRaidActive){
        this.endBattle(`${attacker.name} interrompe lo scontro con ${move.name}!`);return 'battle-ended';
      }
      await this.battleText(`${move.name} non può interrompere questa sfida!`);return 'no-effect';
    }
    if(move.copyStages||move.id==='psych-up'){
      attacker.statStages={...defender.statStages};
      this.updateBattleHUD();
      await this.battleText(`${attacker.name} copia le modifiche alle statistiche di ${defender.name}!`);
      return 'psych-up';
    }
    if(move.screen){
      const key=move.screen==='physical'?'reflectTurns':'lightScreenTurns';
      if(attacker[key]>0){await this.battleText('La barriera è già attiva!');return 'no-effect';}
      attacker[key]=5;
      await this.battleText(move.screen==='physical'?`${attacker.name} alza Riflesso! Danni fisici dimezzati per 5 turni.`:
        `${attacker.name} alza Schermoluce! Danni speciali dimezzati per 5 turni.`);
      this.updateBattleHUD();return 'screen';
    }
    if(move.id==='haze'||move.resetStages){
      attacker.statStages={};defender.statStages={};
      await this.battleText('Nebbia annulla tutte le modifiche alle statistiche!');
      this.updateBattleHUD();return 'haze';
    }
    if(move.focusEnergy || move.id==='focus-energy'){
      attacker.focusEnergyActive=true;
      await this.battleText(`${attacker.name} aumenta le probabilità di brutto colpo!`);
      this.updateBattleHUD();return 'focus-energy';
    }
    if(move.mist||move.safeguard){
      const key=move.mist?'mistTurns':'safeguardTurns';attacker[key]=5;
      await this.battleText(`${attacker.name} è protetto da ${move.name} per 5 turni!`);
      this.updateBattleHUD();return 'field-protection';
    }
    if(move.id==='rest'){
      if(attacker.currentHp>=attacker.maxHp && !attacker.status){await this.battleText('Riposo fallisce: PS già al massimo!');return 'no-effect';}
      attacker.currentHp=attacker.maxHp;attacker.status='sleep';attacker.statusTurns=3;
      await this.battleText(`${attacker.name} recupera tutti i PS e si addormenta!`);
      this.updateBattleHUD();return 'rest';
    }
    if(move.delayedHit||['future-sight','doom-desire'].includes(move.id)){
      if(defender.futureSight){await this.battleText('Una previsione è già in corso!');return 'no-effect';}
      defender.futureSight={turns:3,attacker,move:{...move, power:move.power||80, type:'typeless',category:'special'}};
      await this.battleText(`${attacker.name} prevede un attacco futuro! L’impatto arriverà tra due turni.`);
      return 'future-sight';
    }
    if(move.protects){
      const streak=attacker.protectStreak||0;
      // Usi consecutivi: ogni volta un terzo delle probabilità (regola moderna).
      const success=Math.random()<Math.pow(1/3,streak);
      attacker.protectStreak=success?streak+1:0;
      attacker.protectedThisTurn=success;
      await this.battleText(success?`${attacker.name} si protegge!`:'Protezione fallisce!');
      return;
    }
    attacker.protectStreak=0;
    const targetsOpponent=move.power>0||move.ailment||['leech-seed','nightmare','mean-look','spite','low-kick'].includes(move.id)||
      (move.statChanges?.some(change=>change.stage<0)||false)||
      ['swagger','flatter'].includes(move.id);
    const airborne=defender.pendingCharge?.move?.id;
    if(targetsOpponent && airborne &&
       Object.prototype.hasOwnProperty.call(CHARGE_UNTOUCHABLE,airborne) &&
       !CHARGE_UNTOUCHABLE[airborne].includes(move.id)){
      this.stopRollout(attacker);if(move.selfKo||['self-destruct','explosion'].includes(move.id))attacker.currentHp=0;await this.battleText(`${defender.name} evita l'attacco mentre si prepara!`);
      return 'charging-evasion';
    }
    if(defender.protectedThisTurn && targetsOpponent){
      this.stopRollout(attacker);if(move.selfKo||['self-destruct','explosion'].includes(move.id))attacker.currentHp=0;await this.battleText(`${defender.name} si protegge dall'attacco!`);
      return;
    }
    let resolvedMove=move;
    if(move.id==='fury-cutter'){
      const multiplier=Math.pow(2,Math.min(4,attacker.furyCutterHits||0));
      resolvedMove={...move,power:move.power*multiplier};
    }
    if(move.id==='low-kick'){
      if(!Number.isFinite(defender.weight)){await this.battleText('Calciobasso fallisce: peso del bersaglio non disponibile.');return 'no-effect';}
      const weightKg=defender.weight/10;
      const power=weightKg<10?20:weightKg<25?40:weightKg<50?60:weightKg<100?80:weightKg<200?100:120;
      resolvedMove={...move,power};
    }
    if(ROLLOUT_MOVES.has(move.id)){
      const power=move.power*Math.pow(2,attacker.rolloutHits||0)*(attacker.defenseCurlUsed?2:1);
      resolvedMove={...move,power};
    }
    if(move.id==='magnitude'){
      const outcome=rollMagnitude();
      resolvedMove={...move,power:outcome.power};
      await this.battleText(`Magnitudo ${outcome.level}!`);
    }
    await this.playAttackAnimation(move,target);
    const abilityAccuracy=Abilities.accuracyMultiplier(attacker,defender,move,{weather:this.effectiveBattleWeather()});
    const accuracy=abilityAccuracy===Infinity?Infinity:Math.min(100,(move.accuracy??100)*abilityAccuracy * accuracyStageMultiplier(attacker.statStages?.accuracy) /
      accuracyStageMultiplier(defender.statStages?.evasion));
    if(Math.random()*100 >= accuracy){attacker.furyCutterHits=0;this.stopRollout(attacker);if(move.selfKo||['self-destruct','explosion'].includes(move.id))attacker.currentHp=0;await this.battleText('Ma la mossa fallisce!');return;}
    if(move.id==='nightmare'){
      if(defender.status!=='sleep'){await this.battleText('Incubo fallisce: il bersaglio non dorme!');return 'no-effect';}
      if(defender.nightmareActive){await this.battleText(`${defender.name} è già tormentato da Incubo!`);return 'no-effect';}
      defender.nightmareActive=true;
      await this.battleText(`${defender.name} è tormentato da Incubo finché dormirà!`);
      return 'nightmare';
    }
    if(move.id==='spite'){
      const last=defender.lastUsedMoveId;
      const victim=defender.moves?.find(m=>m.id===last);
      if(!victim||victim.currentPp<=0){await this.battleText('Dispetto fallisce: nessuna mossa con PP da ridurre!');return 'no-effect';}
      const lost=Math.min(victim.currentPp,2+Math.floor(Math.random()*4));
      victim.currentPp-=lost;await this.battleText(`Dispetto riduce di ${lost} i PP di ${victim.name}!`);
      return 'spite';
    }
    if(move.id==='mean-look'){
      if(defender.meanLookSource){await this.battleText('Il bersaglio non può già scappare!');return 'no-effect';}
      defender.meanLookSource=attacker;
      await this.battleText(`${defender.name} non può più fuggire!`);return 'mean-look';
    }
    let modifier=typeEffectiveness(move.type,defender.types);
    if(move.id==='thunder-wave'&&modifier===0){await this.battleText(`Non ha effetto su ${defender.name}…`);return 'no-effect';}
    if(move.powder&&defender.types.includes('grass')){await this.battleText(`${defender.name} non è colpito dalle polveri!`);return 'no-effect';}
    // Immunità da abilità: il colpo non infligge danni (con assorbimento dove previsto).
    const immunity=this.abilityAttackImmunity(defender,move,attacker);
    if(immunity){this.stopRollout(attacker);if(move.selfKo||['self-destruct','explosion'].includes(move.id))attacker.currentHp=0;this.updateBattleHUD();await this.battleText(immunity);return;}
    // Fixed-damage moves ignore offensive/defensive stats but still obey immunities.
    const fixedDamage=({'dragon-rage':40,'sonic-boom':20,'night-shade':attacker.level,
      'seismic-toss':attacker.level,'super-fang':Math.max(1,Math.floor(defender.currentHp/2))})[move.id]??null;
    if(resolvedMove.power>0 || fixedDamage!==null){
      const count=attacker.ability==='skill-link' && move.maxHits>move.minHits?move.maxHits:rollMultiHitCount(move);
      let landed=0,totalDamage=0,anyCrit=false;
      for(let i=0;i<count && defender.currentHp>0 && attacker.currentHp>0;i++){
        // Triple Kick/Triple Axel check accuracy per additional kick.
        if(i>0 && ['triple-kick','triple-axel','population-bomb'].includes(move.id) && Math.random()*100>=accuracy)break;
        const hitMove=move.id==='triple-kick'||move.id==='triple-axel'
          ?{...resolvedMove,power:resolvedMove.power*(i+1)}:resolvedMove;
        const result=fixedDamage===null?calculateBattleDamage(attacker,defender,hitMove,Math.random,{weather:this.effectiveBattleWeather()}):
          {damage:modifier===0?0:Math.min(defender.currentHp,fixedDamage),effectiveness:modifier,critical:false};
        // Sturdy prevents a one-hit knockout from full HP. Multi-hit moves can still KO.
        if(defender.ability==='sturdy'&&defender.currentHp===defender.maxHp&&result.damage>=defender.currentHp&&
           !Abilities.suppress(attacker)&&result.damage>0)result.damage=Math.max(0,defender.currentHp-1);
        defender.currentHp=Math.max(0,defender.currentHp-result.damage);
        if(defender.currentHp===0 && result.damage>0 && defender.destinyBondActive && attacker.currentHp>0){
          defender.destinyBondActive=false;attacker.currentHp=0;
          await this.battleText(`${defender.name} trascina ${attacker.name} con sé grazie a Destinobbligato!`);
        }
        landed++;totalDamage+=result.damage;anyCrit ||= result.critical;
        if(result.damage>0 && move.id==='rapid-spin'){attacker.trappedTurns=0;attacker.trapMove=null;}
        if(result.damage>0 && ['wrap','bind','clamp','fire-spin','whirlpool','sand-tomb'].includes(move.id) && defender.currentHp>0 && !defender.trappedTurns){
          const roll=Math.random();
          defender.trappedTurns=roll<.375?2:roll<.75?3:roll<.875?4:5;
          defender.trapMove=move.name;defender.trapSource=attacker;
        }
        // Contact means a move with the PokeAPI contact flag, not all physical damage.
        for(const feedback of Abilities.contact(attacker,defender,move,result.damage,{weather:this.effectiveBattleWeather()}))
          await this.battleText(feedback);
        if(result.damage>0&&defender.currentHp>0&&!defender.flinchedThisTurn){
          const chance=Math.max(move.flinchChance||0,attacker.ability==='stench'?10:0)*(attacker.ability==='serene-grace'?2:1);
          if(Math.random()*100<chance && defender.ability!=='inner-focus'){
            defender.flinchedThisTurn=true;
            if(defender.ability==='steadfast')Abilities.stage(defender,'speed',1);
          }
        }
        if(result.damage>0 && result.critical && defender.ability==='anger-point'){
          defender.statStages.attack=6;await this.battleText(`Grancollera massimizza l'Attacco di ${defender.name}!`);
        }
        if(move.drain>0 && result.damage>0)attacker.currentHp=Math.min(attacker.maxHp,attacker.currentHp+Math.max(1,Math.floor(result.damage*move.drain/100)));
        if(move.drain<0 && result.damage>0 && !['rock-head','magic-guard'].includes(attacker.ability))attacker.currentHp=Math.max(0,attacker.currentHp-Math.max(1,Math.floor(result.damage*-move.drain/100)));
        if(move.drain>0&&defender.ability==='liquid-ooze')attacker.currentHp=Math.max(0,attacker.currentHp-Math.max(1,Math.floor(result.damage*move.drain/100))*2);
        this.updateBattleHUD();
        if(count>1){
          await this.battleText(`Colpo ${landed}: ${result.damage} danni${result.critical?' · BRUTTO COLPO!':''}`);
          if(i<count-1 && defender.currentHp>0 && attacker.currentHp>0)await this.wait(120);
        }
      }
      if(count>1)await this.battleText(`Colpito ${landed} ${landed===1?'volta':'volte'}!`);
      // Contraccolpo basato sui PS massimi (Scontro).
      if(move.healing<0&&totalDamage>0&&attacker.currentHp>0){
        const recoil=Math.max(1,Math.floor(attacker.maxHp*-move.healing/100));
        attacker.currentHp=Math.max(0,attacker.currentHp-recoil);this.updateBattleHUD();
        await this.battleText(`${attacker.name} subisce ${recoil} danni di contraccolpo!`);
      }
      const reaction=modifier===0?'Non ha effetto…':modifier>1?'È superefficace!':modifier<1?'Non è molto efficace…':'';
      this.updateBattleHUD();
      if(count===1)await this.battleText(`${attacker.name} usa ${move.name}! ${totalDamage} danni. ${anyCrit?'⚡ BRUTTO COLPO! ':''}${reaction}`);
      else if(reaction)await this.battleText(reaction);
      // Rollout/Ice Ball lock the combatant for up to five consecutive turns.
      if(move.id==='fury-cutter' && modifier>0 && totalDamage>0)
        attacker.furyCutterHits=Math.min(4,(attacker.furyCutterHits||0)+1);
      if(ROLLOUT_MOVES.has(move.id)){
        if(modifier===0 || defender.currentHp<=0 || attacker.currentHp<=0)this.stopRollout(attacker);
        else if(attacker.rolloutTurns>0){
          attacker.rolloutTurns--;attacker.rolloutHits++;
          if(attacker.rolloutTurns===0)this.stopRollout(attacker);
        }else{attacker.rolloutTurns=4;attacker.rolloutHits=1;attacker.rolloutMove=move;}
      }
    } else if(modifier===0 && move.power>0) {
      await this.battleText('Non ha effetto…');
    } else if(move.healing>0 || ['recover','rest'].includes(move.id)){
      const amount=Math.max(1,Math.floor(attacker.maxHp*(move.healing||50)/100));
      attacker.currentHp=Math.min(attacker.maxHp,attacker.currentHp+amount);
      await this.battleText(`${attacker.name} recupera ${amount} PS!`);
    } else if(move.id==='leech-seed'){
      if(defender.types.includes('grass')||defender.seeded){
        await this.battleText(defender.seeded?'Parassiseme è già attivo!':'Parassiseme non ha effetto sui Pokémon Erba!');
      }else{defender.seeded=true;await this.battleText(`${defender.name} è stato parassitato!`);}
    } else if(!move.statChanges?.length && !move.ailment) await this.battleText(`${attacker.name} esegue ${move.name}!`);
    // All Pokémon stat changes (including two-stat buffs) need application.
    // Negative stages usually target the foe; statTarget handles self-debuffs.
    const changes=move.statChanges||[];
    for(const {stat,stage,chance} of changes){
      if(!((move.power===0 || defender.currentHp>0)&&(move.power===0 || modifier>0)))continue;
      if(Math.random()*100>=Math.min(100,(chance??100)*(attacker.ability==='serene-grace'?2:1)))continue;
      const targetsSelf=move.statTarget==='user'||move.statTarget==='users-field'||
        (move.power>0&&['superpower','close-combat','overheat','draco-meteor','leaf-storm'].includes(move.id));
      const targetsFoe=move.statTarget==='selected-pokemon'||move.statTarget==='all-opponents'||
        ['swagger','flatter'].includes(move.id);
      const targetP=targetsSelf?attacker:targetsFoe?defender:stage<0?defender:attacker;
      if(move.power>0&&stage<0&&targetP===defender&&defender.ability==='shield-dust'&&!Abilities.suppress(attacker))continue;
      const immune=stage<0 && targetP===defender &&
        ((Abilities.dropBlocked(targetP,stat,true,{weather:this.effectiveBattleWeather()})&&!Abilities.suppress(attacker))||targetP.mistTurns>0);
      if(immune){await this.battleText(`${targetP.name} impedisce il calo delle statistiche!`);}
      else {
        const before=targetP.statStages[stat]||0;
        const after=Math.max(-6,Math.min(6,before+stage));
        targetP.statStages[stat]=after;
        if(move.id==='defense-curl' && targetP===attacker)attacker.defenseCurlUsed=true;
        await this.battleText(after===before?`${targetP.name}: ${STAT_LABELS_IT[stat]||stat} non può cambiare ancora!`:
          `${targetP.name}: ${STAT_LABELS_IT[stat]||stat} ${stage<0?'diminuisce':'aumenta'}!`);
        if(stage<0 && targetP===defender && after<before)for(const message of Abilities.afterStatDrop(targetP,true))await this.battleText(message);
      }
    }
    this.updateBattleHUD();
    const blocked=move.power>0 && defender.ability==='shield-dust'&&!Abilities.suppress(attacker);
    const ailmentChance=Math.min(100,(move.ailmentChance || (move.power===0?100:0))*(attacker.ability==='serene-grace'?2:1));
    if(move.ailment && !['none','leech-seed'].includes(move.ailment) &&
      (move.ailment==='confusion'?!defender.confusionTurns:move.ailment==='infatuation'||!defender.status) && defender.currentHp>0 && (move.power===0 || modifier>0) &&
      !blocked && !(move.ailment==='confusion' && defender.ability==='own-tempo'&&!Abilities.suppress(attacker)) &&
      !(defender.safeguardTurns>0) && !typeBlocksStatus(defender.types,move.ailment) &&
      (Abilities.suppress(attacker)||!this.statusAbilityBlocks(defender,move.ailment)) && Math.random()*100<ailmentChance) {
      if(move.ailment==='infatuation'){
        const opposite=['male','female'].includes(attacker.gender)&&['male','female'].includes(defender.gender)&&attacker.gender!==defender.gender;
        if(opposite&&!defender.attractedTo&&defender.ability!=='oblivious'){defender.attractedTo=attacker;await this.battleText(`${defender.name} si è innamorato!`);}
        else await this.battleText('Ma non ha effetto…');
      }
      else if(move.ailment==='confusion')defender.confusionTurns=2+Math.floor(Math.random()*4);
      else {defender.status=move.ailment;defender.statusTurns=2+Math.floor(Math.random()*3);}
      if(move.ailment!=='infatuation')await this.battleText(`${defender.name}: ${({poison:'avvelenamento','bad-poison':'iperavvelenamento',burn:'scottatura',paralysis:'paralisi',sleep:'sonno',freeze:'congelamento',confusion:'confusione'})[move.ailment]||'stato alterato'}!`);
      if(defender.ability==='synchronize' && !attacker.status && ['poison','burn','paralysis'].includes(move.ailment) &&
        !this.statusAbilityBlocks(attacker,move.ailment)){
        attacker.status=move.ailment;attacker.statusTurns=3;
      }
    }
    if(RECHARGE_MOVES.has(move.id)&&modifier>0&&move.power>0)attacker.rechargeTurns=1;
    if(RAMPAGE_MOVES.has(move.id)&&attacker.rampageTurns>0){
      attacker.rampageTurns--;
      if(attacker.rampageTurns===0){attacker.rampageMove=null;
        attacker.confusionTurns=2+Math.floor(Math.random()*3);
        await this.battleText(`${attacker.name} è confuso dopo l'attacco furioso!`);
      }
    }
    if(move.selfKo||['self-destruct','explosion'].includes(move.id)){
      attacker.currentHp=0;this.updateBattleHUD();
      await this.battleText(`${attacker.name} è esausto dopo ${move.name}!`);
    }
    if(!move.power && move.category==='status' && !move.screen && !move.delayedHit && !move.statChanges?.length &&
      !move.ailment && !move.healing && !move.focusEnergy &&
      !move.mist && !move.safeguard && !move.resetStages && !move.copyStages &&
      !move.protects && !['rest','haze','teleport','leech-seed','geomancy','defense-curl'].includes(move.id)){
      await this.battleText(move.id==='splash'?'Ma non succede niente!':`${move.name} non ha effetto in questa lotta.`);
    }
    this.updateBattleHUD();await this.wait(420);
  },

  async applyEndOfTurnEffects(){
    const combatants=[this.activeMon,this.enemyMon];
    for(const mon of combatants){
      if(!mon)continue;
      if(mon.futureSight){
        mon.futureSight.turns--;
        if(mon.futureSight.turns<=0){
          const pending=mon.futureSight;mon.futureSight=null;
          if(mon.currentHp>0){
            const hit=calculateBattleDamage(pending.attacker,mon,pending.move);
            mon.currentHp=Math.max(0,mon.currentHp-hit.damage);
            await this.battleText(`Divinazione colpisce ${mon.name} dopo l'attesa! ${hit.damage} danni.`);
            this.updateBattleHUD();
          }
        }
      }
      for(const [key,label] of [['reflectTurns','Riflesso'],['lightScreenTurns','Schermoluce'],
        ['safeguardTurns','Salvaguardia'],['mistTurns','Nebbia']]){
        if(mon[key]>0){mon[key]--;if(mon[key]===0)await this.battleText(`${label} di ${mon.name} svanisce!`);}
      }
      if(mon.currentHp<=0)continue;
      if(mon.ghostCurseActive && mon.ability!=='magic-guard'){
        const damage=Math.min(mon.currentHp,Math.max(1,Math.floor(mon.maxHp/4)));
        mon.currentHp-=damage;
        this.updateBattleHUD();await this.battleText(`Maledizione sottrae ${damage} PS a ${mon.name}!`);
      }
      if(mon.currentHp<=0)continue;
      if(mon.nightmareActive && mon.status!=='sleep')mon.nightmareActive=false;
      if(mon.nightmareActive && mon.status==='sleep' && mon.ability!=='magic-guard'){
        const damage=Math.min(mon.currentHp,Math.max(1,Math.floor(mon.maxHp/4)));
        mon.currentHp-=damage;
        this.updateBattleHUD();await this.battleText(`Incubo sottrae ${damage} PS a ${mon.name}!`);
      }
      if(mon.currentHp<=0)continue;
      if(['burn','poison','bad-poison'].includes(mon.status)&&!['magic-guard'].includes(mon.ability) && !(mon.ability==='poison-heal'&&['poison','bad-poison'].includes(mon.status))){
        if(mon.status==='bad-poison')mon.toxicTurns=(mon.toxicTurns||0)+1;
        // Moderno: scottatura 1/16, veleno 1/8, iperveleno crescente.
        const damage=Math.max(1,Math.floor(mon.maxHp*(mon.status==='bad-poison'?Math.min(15,mon.toxicTurns):mon.status==='burn'?1:2)/16));
        mon.currentHp=Math.max(0,mon.currentHp-damage);
        this.updateBattleHUD();await this.battleText(`${mon.name} subisce ${damage} danni da ${mon.status==='burn'?'scottatura':'veleno'}!`);
      }
      if(mon.trappedTurns>0 && mon.currentHp>0 && mon.ability!=='magic-guard'){
        const damage=Math.max(1,Math.floor(mon.maxHp/16));
        mon.currentHp=Math.max(0,mon.currentHp-damage);
        mon.trappedTurns--;
        this.updateBattleHUD();
        await this.battleText(`${mon.name} subisce ${damage} danni da ${mon.trapMove||'Avvolgibotta'}!`);
      }
      if(mon.seeded && mon.currentHp>0 && mon.ability!=='magic-guard'){
        const damage=Math.min(mon.currentHp,Math.max(1,Math.floor(mon.maxHp/8)));
        mon.currentHp=Math.max(0,mon.currentHp-damage);
        const leech=mon===this.activeMon?this.enemyMon:this.activeMon;
        leech.currentHp=Math.min(leech.maxHp,leech.currentHp+damage);
        this.updateBattleHUD();await this.battleText(`Parassiseme sottrae energia a ${mon.name}!`);
      }
    }
    for(const mon of combatants){
      for(const message of Abilities.endTurn(mon,{weather:this.effectiveBattleWeather()}))await this.battleText(message);
    }
    if(this.effectiveBattleWeather()?.type==='sandstorm'){
      for(const mon of combatants){
        if(!mon||mon.currentHp<=0||Abilities.immuneToSand(mon))continue;
        const damage=Math.min(mon.currentHp,Math.max(1,Math.floor(mon.maxHp/16)));
        mon.currentHp-=damage;this.updateBattleHUD();
        await this.battleText(`Terrempesta sottrae ${damage} PS a ${mon.name}!`);
      }
    }
    if(this.effectiveBattleWeather()?.type==='hail'){
      for(const mon of combatants){
        if(!mon||mon.currentHp<=0||mon.types?.includes('ice')||['overcoat','magic-guard','snow-cloak','ice-body'].includes(mon.ability))continue;
        const damage=Abilities.hurt(mon,1/16);this.updateBattleHUD();await this.battleText(`Grandine infligge ${damage} danni a ${mon.name}!`);
      }
    }
    if(this.battleWeather){
      this.battleWeather.turns--;
      if(this.battleWeather.turns<=0){this.battleWeather=null;await this.battleText('Il tempo torna normale.');}
    }
  },
};
