import { BaseClass } from "../../../../../builds/class/base";
import { AcceptedLangs } from "../interfaces/general/types";
import { WOTCClanSearch } from "../interfaces/clan/search";
export declare class WOTCClan extends BaseClass {
    private app;
    private errorController;
    constructor(app_id: string);
    /**
     * @description Method returns partial list of clans in alphabetical order by clan name or tag.
     * @param {Object} options Options Object
     * @property {AcceptedLangs | string} options.language Localization language.
     * @property {number} [options.limit=100] Number of returned entries (fewer can be returned, but not more than 100). If the limit sent exceeds 100, a limit of 100 is applied (by default).
     * @property {string} options.search Part of name or tag for clan search. Minimum 2 characters
     * @returns {Promise<WOTCClanSearch[] | void>} Array of clans.
     */
    search(options?: {
        language?: AcceptedLangs;
        limit?: number;
        search?: string;
    }): Promise<WOTCClanSearch[] | void>;
    /**
     * @description Method returns detailed clan information.
     * @param clan_id Clan ID
     * @param {Object} options Options Object
     * @property {AcceptedLangs | string} options.language Localization language.
     * @property {boolean} options.members Return with the members info.
     * @returns {Promise<WOTCClanGet | void>} Clan data.
     */
    get(clan_id: string, options?: {
        members?: boolean;
        language: AcceptedLangs;
    }): Promise<WOTCClanGet | void>;
}
