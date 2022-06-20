import { UserSearchResolve } from '../../../build/interfaces/search-resolve';
import { BaseClass } from '../../../../../builds/class/base';
import { WOWSPediaResolve } from '../interfaces/encyclopedia/resolve';
import { WOWSUserResolve } from '../interfaces/user/result';
import { AllRealms } from '../../../../..';
declare type AcceptedLangs = "cs" /** Čeština */ | "de" /** Deutsch */ | "en" /** English (by default) */ | "es" /** Español */ | "fr" /** Français */ | "ja" /** 日本語 */ | "pl" /** Polski */ | "ru" /** Русский */ | "th" /** ไทย */ | "zh-tw" /** 繁體中文 */ | "tr" /** Türkçe */ | "zh-cn" /** 中文 */ | "pt-br" /** Português do Brasil */ | "es-mx";
declare class WOWSUser extends BaseClass {
    private app;
    constructor(app_id: string, realm?: AllRealms);
    /**
     * @description Search users with respective name.
     * @param {string} userName Name of user.
     * @returns {Promise<UserSearchResolve[] | null>} Object Array with users data.
     */
    search(userName: string): Promise<UserSearchResolve[] | null>;
    /**
     * @description Get an user by ID.
     * @param {number | string} userID ID of user.
     * @returns {Promise<WOWSUserResolve | null>} Object of user data.
     */
    get(userID: number | string): Promise<WOWSUserResolve | null>;
    /**
     * @description Get all achievements of an user.
     * @param account_id Player account ID.
     * @param {Object} options Options Object
     * @property {AcceptedLangs} options.language Localization language.
     * @returns {Promise<{ battle: any, progress: any } | null>} The achievements of user.
     */
    achievements(account_id: string, options?: {
        language?: AcceptedLangs;
    }): Promise<{
        battle: any;
        progress: any;
    } | null>;
    /**
     * @description Get the ships status of an user.
     * @param {string} account_id the ID of user.
     * @returns {Promise<WOWSPediaResolve[] | null>}
     * @example
     * ...
     * const ships = await <Warcord>.wg.wows.user.shipStats('ID of User')
     */
    shipStats(account_id: string | number): Promise<WOWSPediaResolve[] | null>;
}
export { WOWSUser };
