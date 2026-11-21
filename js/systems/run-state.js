// Stato di una singola run. Unica fonte dei valori iniziali: viene usato sia alla
// creazione del motore sia a ogni ritorno al menu, così nessun campo resta "sporco".
export const STARTING_ITEMS = Object.freeze({
  pokeball: 5, masterball: 0, potion: 3, superPotion: 0, hyperPotion: 0, elixir: 1, abilityCapsule: 0,
  fishingRod: false, rareCandy: 0, goldCandy: 0, waterStone: 0, thunderStone: 0, fireStone: 0,
});
export const STARTING_MONEY = 600;
export const STARTING_RADAR = 3;

export const normalizeRunMode = mode => ['easy', 'normal'].includes(mode) ? 'normal' : 'nuzlocke';

export function createRunState() {
  return {
    runId: null,
    devRun: false,
    runMode: 'nuzlocke',
    // Statistiche mostrate nel riepilogo di fine run.
    runStats: { startedAt: null, playMs: 0, wins: 0, trainers: 0, captures: 0, maxFloor: 1, fallen: [] },
    // Tipo del piano scelto all'uscita precedente: null, 'calm' (tranquillo) o 'trainers' (zona allenatori).
    floorKind: null,
    // Mondo
    floor: 1, gridMap: [], playerPos: { x: 0, y: 0 }, playerGender: 'male', playerFacing: 'down', playerStep: 0,
    playerFishingFrame: null, pendingWalk: null,
    // Inventario e progressi
    money: STARTING_MONEY, items: { ...STARTING_ITEMS }, radarCharges: STARTING_RADAR, badges: [],
    completedGymFloors: new Set(), caughtLegendarySpecies: new Set(),
    expShareEnabled: true, expShareClaimed: false, fishingRodGiftClaimed: false, eeveeStoneGiftClaimed: false, adventureCompleted: false,
    soloRunEligible: true, soloRunTracked: false,
    // Squadra
    team: [], activeMon: null, enemyMon: null, selectedStarterData: null,
    partyMenuPokemon: null, partyMoveSource: null, partyInfoPokemon: null,
    // Blocchi e interazioni in corso
    isLocked: false, pendingItemTarget: null, pendingWildEncounterType: null, pendingLegendaryId: null,
    pendingTrainerCell: null, activeDialogNpcCell: null, gymChallengePending: false,
    // Lotta
    battleType: null, battleBusy: false, battleMode: null, battleWeather: null, battleParticipants: new Set(), lastPersistedFaint: null,
    pendingForcedSwitch: false, battleConfirmAction: null, teleportSwitchPending: false,
    devSkipPending: false, devSkipChain: false, fastBattleText: false,
    // Palestra e raid
    gymQueue: [], gymBadgeName: '', currentGym: null, gymLeaderIndex: 0,
    isRaidActive: false, raidQueueCount: 0, raidPickupSourceCell: null,
    // Grotta Celeste
    oakEventDismissed: false, isCelestialCave: false, celestialPhase: 'unvisited', celestialReturnState: null,
    celestialCutsceneActive: false, celestialDeparturePending: false, celestialReserve: [],
    celestialRosterSelection: new Set(), celestialDepositRequired: false, celestialExpeditionBusy: false,
    celestialMewtwoCaptured: false,
  };
}
