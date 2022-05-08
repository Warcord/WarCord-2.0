import { WargamingBase } from './packages/wargaming/build/class/base';
import { WOTClanResolve } from './packages/wargaming/world-of-tanks/src/interfaces/clan/clan-resolve';
import { WOTClanSearchResolve } from './packages/wargaming/world-of-tanks/src/interfaces/clan/search-resolve';
import { WOTTanksResolve } from './packages/wargaming/world-of-tanks/src/interfaces/tank/tank-resolve';
import { WOTTopTanksResolve } from './packages/wargaming/world-of-tanks/src/interfaces/tank/top-tanks';
import { WOTUserResolve } from './packages/wargaming/world-of-tanks/src/interfaces/user/user-return';
import { UserSearchResolve } from './packages/wargaming/build/interfaces/search-resolve';
import { BaseClass } from './builds/class/base';
declare class WarCord extends BaseClass {
    app: {
        id: string;
        lang?: string;
    };
    wg: WargamingBase;
    /**
     * @param {string} app_id The ID of your WarGaming App.
     * @param {string} [lang=na] The followed types are an option: 'na' | 'eu' |'ru' | 'asia'.
     */
    constructor(app_id: string, lang?: string);
    private idChecker;
    private langChecker;
}
export { WarCord };
export { WOTClanResolve, WOTClanSearchResolve, WOTTanksResolve, WOTTopTanksResolve, WOTUserResolve, UserSearchResolve };
