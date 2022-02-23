import { WOTClanResolve } from '../interfaces/clan/clan-resolve';
import { WOTClanSearchResolve } from '../interfaces/clan/search-resolve';
import { BaseClass } from '../../../../../builds/class/base';
declare class WorldOfTanksClan extends BaseClass {
    app: {
        id: string;
        lang?: string;
    };
    constructor(app_id: string, lang?: string);
    /**
     * Get a clan in World of Tanks.
     * @param clanID ID of clan.
     * @returns {WOTClanResolve} Clan data.
     */
    get(clanID: number | string): Promise<WOTClanResolve | null>;
    /**
     * Get a array with clans data of respective name.
     * @param clanNameOrTag Name or Tag of clan.
     * @returns {ClanSearchResolve} Array with clan data.
     */
    search(clanNameOrTag: string): Promise<WOTClanSearchResolve | null>;
    /**
     * Get the rating of an Clan.
     * @param clanID ID of Clan.
     * @returns {Object} Clan rating.
     */
    rating(clanID: string | number): Promise<any | null>;
}
export { WorldOfTanksClan };
