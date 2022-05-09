import { WargamingBase } from './packages/wargaming/build/class/base';
import { WOTClanResolve } from './packages/wargaming/world-of-tanks/src/interfaces/clan/clan-resolve';
import { WOTClanSearchResolve } from './packages/wargaming/world-of-tanks/src/interfaces/clan/search-resolve';
import { WOTTanksResolve } from './packages/wargaming/world-of-tanks/src/interfaces/tank/tank-resolve';
import { WOTTopTanksResolve } from './packages/wargaming/world-of-tanks/src/interfaces/tank/top-tanks';
import { WOTUserResolve } from './packages/wargaming/world-of-tanks/src/interfaces/user/user-return';
import { UserSearchResolve } from './packages/wargaming/build/interfaces/search-resolve';
import { BaseClass } from './builds/class/base';
declare type AllRealms = 'na' | 'eu' | 'ru' | 'asia';
declare class WarCord extends BaseClass {
    app: {
        id: string;
        realm?: AllRealms;
    };
    wg: WargamingBase;
    /**
     * @param {string} app_id The ID of your WarGaming App.
     * @param {string} [realm=na] The followed types are an option: .
     */
    constructor(app_id: string, realm?: AllRealms);
    private idChecker;
    private realmChecker;
}
export { WarCord };
export { WOTClanResolve, WOTClanSearchResolve, WOTTanksResolve, WOTTopTanksResolve, WOTUserResolve, UserSearchResolve };
export { AllRealms };
