// Palestre: conferma della sfida, tre allenatori e il Capopalestra.
import { gymForFloor, leaderSpriteUrl } from '../core/constants.js';
import * as Objectives from '../systems/objectives.js';

export const gymMethods = {
  requestGymChallenge(){
    if(this.gymChallengePending)return false;
    this.isLocked=true;
    this.gymChallengePending=true;
    const gym=gymForFloor(this.floor);
    const overlay=this.$id('gym-entry-confirm');
    this.$id('gym-entry-text').textContent=`Vuoi iniziare la sfida di ${gym.name}? `+
      'Dovrai superare tre Allenatori prima del Capopalestra.';
    overlay.classList.remove('hidden');
    return true;
  },

  cancelGymChallenge(){
    if(!this.gymChallengePending)return false;
    this.gymChallengePending=false;
    this.$id('gym-entry-confirm').classList.add('hidden');
    this.isLocked=false;
    this.logMsg('Sfida annullata: puoi tornare quando vuoi.');
    return true;
  },

  confirmGymChallenge(){
    if(!this.gymChallengePending)return false;
    this.gymChallengePending=false;
    this.$id('gym-entry-confirm').classList.add('hidden');
    this.isLocked=true;
    this.currentGym=gymForFloor(this.floor);
    this.gymQueue=['trainer1','trainer2','trainer3','leader'];
    this.gymLeaderIndex=0;
    this.gymBadgeName=`Medaglia ${this.currentGym.badge}`;
    this.currentTrainerSprite=this.trainerSprites[Math.floor(Math.random()*this.trainerSprites.length)];
    this.setTrainerPortrait(this.$id('trainer-portrait-img'),this.currentTrainerSprite);
    this.$id('trainer-dialog-speech').textContent=`Palestra ${this.currentGym.specialty}: sconfiggi 3 allenatori per affrontare ${this.currentGym.name}!`;
    this.$id('trainer-encounter-overlay').classList.remove('hidden');
    return true;
  },

  showGymLeaderIntro() {
    const leader=this.currentGym;
    if(!leader) return;
    this.isLocked=true;
    // The leader introduction overlays the same arena; don't tear down the battle.
    this.hideAllActions();
    const overlay=this.$id('gym-leader-intro');
    this.$id('gym-leader-name').textContent=leader.name.toUpperCase();
    this.$id('gym-leader-specialty').textContent=`SPECIALITÀ ${leader.specialty}`;
    this.$id('gym-leader-roster').textContent=`SQUADRA: ${leader.pokemon.length} POKÉMON`;
    const portrait=this.$id('gym-leader-portrait');
    this.setTrainerPortrait(portrait,leaderSpriteUrl(leader));
    overlay.classList.remove('hidden');
    this.$id('btn-start-gym-leader')?.focus({preventScroll:true});
  },

  async advanceGymAfterVictory() {
    if (this.gymQueue[0] === 'leader') {
      if (this.gymLeaderIndex < this.currentGym.pokemon.length-1) {
        this.gymLeaderIndex++;
        await this.battleText(`${this.currentGym.name} schiera il prossimo Pokémon!`);
        await this.startBattle('gym',true);
        return;
      }
      this.gymQueue.shift();
      if(!this.completedGymFloors.has(this.floor)) {
        this.completedGymFloors.add(this.floor);
        this.badges.push({id:this.currentGym.badgeId,name:this.gymBadgeName});
        Objectives.record('badge',this.runId,{badges:this.badgeCount(),mode:this.runMode,lossless:!this.runStats.fallen.some(p=>p.lost)});
        this.renderBadges();
        this.saveCheckpoint();
      }
      this.money+=750;
      this.renderDungeon(); // L'uscita si sblocca visivamente dopo la medaglia.
      this.showDiscoveryNotice(`${this.gymBadgeName.toUpperCase()} OTTENUTA!`,3800);
      this.endBattle(`Hai sconfitto ${this.currentGym.name}! ${this.gymBadgeName} conquistata. +$750`);
      this.currentGym=null;
      return;
    }
    this.gymQueue.shift();
    if(this.gymQueue[0]==='leader') {
      await this.battleText('Tre allenatori sconfitti! Ora arriva il Capopalestra!');
      this.showGymLeaderIntro();
    } else {
      await this.battleText('Allenatore sconfitto! Il prossimo sfidante si prepara.');
      this.currentTrainerSprite=this.trainerSprites[Math.floor(Math.random()*this.trainerSprites.length)];
      await this.startBattle('gym',true);
    }
  },
};
