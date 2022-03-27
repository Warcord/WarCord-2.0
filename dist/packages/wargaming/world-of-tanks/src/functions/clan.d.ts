import { BaseClass } from '../../../../../builds/class/base';
import { WOTClanResolve } from '../interfaces/clan/clan-resolve';
import { WOTClanSearchResolve } from '../interfaces/clan/search-resolve';
import { WOTMember } from '../interfaces/clan/member';
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
    /**
     * Get the clan member data.
     * @param memberID ID of Clan Member.
     * @returns {Object} Clan Member data.
     */
    member(memberID: string | number): Promise<WOTMember | null>;
}
export { WorldOfTanksClan };
