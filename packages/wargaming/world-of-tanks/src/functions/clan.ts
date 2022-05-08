import axios from 'axios'
import { BaseClass } from '../../../../../builds/class/base'
import { WOTClanResolve } from '../interfaces/clan/clan-resolve'
import { WOTClanSearchResolve } from '../interfaces/clan/search-resolve'
import { WOTMember } from '../interfaces/clan/member'
import { AllRealms } from '../../../../..'

class WorldOfTanksClan extends BaseClass {

    app: { id: string, realm?: string }
    constructor(app_id: string, realm?: AllRealms) {
        super(app_id)
        this.app = { id: app_id, realm: realm }
    }

    /**
     * @description Get a clan in World of Tanks.
     * @param {string} clanID ID of clan.
     * @returns {Promise<WOTClanResolve | null>} Clan data.
     * @example
     * ...
     * const clan = await <Warcord>.wg.wot.clan.get('ID of Clan')
     */

    public async get(clanID: number | string): Promise<WOTClanResolve | null> {
        let data = await (await axios.get(`https://api.worldoftanks.${this.app.realm}/wot/clans/info/?application_id=${this.app.id}&clan_id=${clanID}`)).data
        if (data.status == "error") return null
        data = data.data[clanID]
        return {
            leader_id: data.leader_id,
            color: data.color,
            updated_at: data.updated_at,
            tag: data.tag,
            members_count: data.members_count,
            description_html: data.description_html,
            accepts_join_requests: data.accepts_join_requests,
            leader_name: data.leader_name,
            emblems: data.emblems,
            clan_id: data.clan_id,
            renamed_at: data.renamed_at,
            old_tag: data.old_tag,
            description: data.description,
            members: data.members,
            old_name: data.old_name,
            is_clan_disbanded: data.is_clan_disbanded,
            motto: data.motto,
            name: data.name,
            creator_name: data.creator_name,
            created_at: data.created_at,
            creator_id: data.creator_id
        }
    }

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
    public async search(clanNameOrTag: string): Promise<WOTClanSearchResolve | null> {
        let data = await (await axios.get(`https://api.worldoftanks.${this.app.realm}/wot/clans/list/?application_id=${this.app.id}&search=${clanNameOrTag}`)).data
        if (data.status == "error") return null
        data = data.data
        if (!data || data.length <= 0) return null
        return data
    }

    /**
     * @description Get the rating of an Clan.
     * @param {string | number} clanID ID of Clan.
     * @returns {Object} Clan rating.
     * @example
     * ...
     * const ratingOfClan = await <Warcord>.wg.wot.clan.rating('ID of Clan')
     */
    public async rating(clanID: string | number): Promise<any | null> {
        let data = await (await axios.get(`https://api.worldoftanks.${this.app.realm}/wot/clanratings/clans/?application_id=${this.app.id}&clan_id=${clanID}`)).data
        if (data.status == "error") return null
        data = data.data[clanID]
        return data
    }

    /**
     * @description Get the clan member data.
     * @param {string | number} memberID ID of Clan Member.
     * @returns {Promise<WOTMember | null>} Clan Member data.
     * @example
     * const memberOfClan = await <Warcord>.wg.wot.clan.member('ID of Member')
     */
    public async member(memberID: string | number): Promise<WOTMember | null> {
        let data = await (await axios.get(`https://api.worldoftanks.${this.app.realm}/wot/clans/accountinfo/?application_id=${this.app.id}&account_id=${memberID}`)).data
        if (data.status == "error") return null

        return data.data[memberID]
    }
}

export { WorldOfTanksClan }