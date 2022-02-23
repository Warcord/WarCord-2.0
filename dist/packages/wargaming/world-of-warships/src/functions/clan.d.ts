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
     * Get a clan in World of WarShips.
     * @param clanID ID of clan.
     * @returns {WOWSClansResolve} Clan data.
     */
    get(clanID: number | string): Promise<WOWSClansResolve | null>;
    /**
     * Get a array with clans data of respective name.
     * @param clanNameOrTag Name or Tag of clan.
     * @returns {ClanSearchResolve} Array with clan data.
     */
    search(clanNameOrTag: string): Promise<WOWSClansSearchResolve | null>;
}
export { WOWSClans };
