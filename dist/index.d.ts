import { WOTClanResolve } from './packages/wargaming/world-of-tanks/src/interfaces/clan/clan-resolve';
import { WOTClanSearchResolve } from './packages/wargaming/world-of-tanks/src/interfaces/clan/search-resolve';
import { WOTTanksResolve } from './packages/wargaming/world-of-tanks/src/interfaces/tank/tank-resolve';
import { WOTTopTanksResolve } from './packages/wargaming/world-of-tanks/src/interfaces/tank/top-tanks';
import { WOTUserResolve } from './packages/wargaming/world-of-tanks/src/interfaces/user/user-return';
import { UserSearchResolve } from './packages/wargaming/build/interfaces/search-resolve';
import { BaseClass } from './builds/class/base';
import { WOTUser } from './packages/wargaming/world-of-tanks/src/functions/user';
import { WOTTankopedia } from './packages/wargaming/world-of-tanks/src/functions/tank';
import { WOTClan } from './packages/wargaming/world-of-tanks/src/functions/clan';
import { WOTBUser } from './packages/wargaming/world-of-tanks-blitz/src/functions/user';
import { WOTBTankopedia } from './packages/wargaming/world-of-tanks-blitz/src/functions/tank';
import { WOTBClan } from './packages/wargaming/world-of-tanks-blitz/src/functions/clan';
import { WOTBTournaments } from './packages/wargaming/world-of-tanks-blitz/src/functions/tournaments';
import { WOWSUser } from './packages/wargaming/world-of-warships/src/functions/user';
import { WOWSEncyclopedia } from './packages/wargaming/world-of-warships/src/functions/encyclopedia';
import { WOWSClans } from './packages/wargaming/world-of-warships/src/functions/clan';
import { WOTCUser } from './packages/wargaming/world-of-tanks-console/src/functions/user';
import { WOTCClan } from './packages/wargaming/world-of-tanks-console/src/functions/clan';
import { WOTCTankopedia } from './packages/wargaming/world-of-tanks-console/src/functions/tankopedia';
declare type AllRealms = 'na' | 'eu' | 'ru' | 'asia';
declare class WarCord extends BaseClass {
    app: {
        id: string;
        realm?: AllRealms;
    };
    wot: {
        user: WOTUser;
        pedia: WOTTankopedia;
        clan: WOTClan;
    };
    blitz: {
        user: WOTBUser;
        pedia: WOTBTankopedia;
        clan: WOTBClan;
        tournaments: WOTBTournaments;
    };
    wows: {
        user: WOWSUser;
        pedia: WOWSEncyclopedia;
        clan: WOWSClans;
    };
    wotc: {
        user: WOTCUser;
        clan: WOTCClan;
        pedia: WOTCTankopedia;
    };
    /**
     * @param {string} app_id The ID of your WarGaming App.
     * @param {string} [realm=na] Location language. Not valid for World of Tanks Console (WOTC).
     */
    constructor(app_id: string, realm?: AllRealms);
    private idChecker;
    private realmChecker;
}
export { WarCord };
export { WOTClanResolve, WOTClanSearchResolve, WOTTanksResolve, WOTTopTanksResolve, WOTUserResolve, UserSearchResolve };
export { AllRealms };
