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
     * @description Get a clan in World of Tanks.
     * @param {string} clanID ID of clan.
     * @returns {Promise<WOTClanResolve | null>} Clan data.
     * @example
     * ...
     * const clan = await <Warcord>.wg.wot.clan.get('ID of Clan')
     */
    get(clanID: number | string): Promise<WOTClanResolve | null>;
    /**
     * @description Get a array with clans data of respective name.
     * @param {string} clanNameOrTag Name or Tag of clan.
     * @returns {Promise<WOTClanSearchResolve[] | null>} Array with clan data.
     * @example
     * ...
     * const searchingClan = await <Warcord>.wg.wot.clan.search('Name or Tag of Clan')
     * //this returns an array of the clans found.
     *
     * const clan = await <Warcord>.wg.wot.clan.get(searchingClan[0].clan_id)
     * //this returns the first clan data.
     */
    search(clanNameOrTag: string): Promise<WOTClanSearchResolve | null>;
    /**
     * @description Get the rating of an Clan.
     * @param {string | number} clanID ID of Clan.
     * @returns {Object} Clan rating.
     * @example
     * ...
     * const ratingOfClan = await <Warcord>.wg.wot.clan.rating('ID of Clan')
     */
    rating(clanID: string | number): Promise<any | null>;
    /**
     * @description Get the clan member data.
     * @param {string | number} memberID ID of Clan Member.
     * @returns {Promise<WOTMember | null>} Clan Member data.
     * @example
     * const memberOfClan = await <Warcord>.wg.wot.clan.member('ID of Member')
     */
    member(memberID: string | number): Promise<WOTMember | null>;
}
export { WorldOfTanksClan };
