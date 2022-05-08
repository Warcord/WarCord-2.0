import { WOWSClansResolve } from '../interfaces/clan/clan-resolve';
import { WOWSClansSearchResolve } from '../interfaces/clan/search-resolve';
import { BaseClass } from '../../../../../builds/class/base';
declare class WOWSClans extends BaseClass {
    app: {
        id: string;
        lang?: string;
    };
    constructor(app_id: string, lang?: string);
    /**
     * @description Get a clan in World of WarShips.
     * @param {number | string} clanID ID of clan.
     * @returns {Promise<WOWSClansResolve | null>} Clan data.
     */
    get(clanID: number | string): Promise<WOWSClansResolve | null>;
    /**
     * @description Get a array with clans data of respective name.
     * @param {string} clanNameOrTag Name or Tag of clan.
     * @returns {Promise<WOWSClansSearchResolve | null>} Array with clan data.
     */
    search(clanNameOrTag: string): Promise<WOWSClansSearchResolve | null>;
}
export { WOWSClans };
