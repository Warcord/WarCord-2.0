import { BaseClass } from "../../../../../builds/class/base";
import axios from "axios";
import { WOTBClanResolve } from '../interfaces/clan/clan-resolve'

class WOTBClan extends BaseClass {

    app: { id: string, lang?: string }
    constructor(app_id: string, lang?: string) {
        super(app_id)
        this.app = { id: app_id, lang: lang }
    }

    /**
     * @description Get a clan in World of Tanks Blitz.
     * @param {string | number} clanID ID of clan.
     * @returns {Promise<WOTBClanResolve | null>} Clan data.
     * @example
     * ...
     * const clan = await warcord.wargaming.blitz.clan.get('ID of Clan')
     */

    public async get(clanID: string | number): Promise<WOTBClanResolve | null> {
        let data = await (await axios.get(`https://api.wotblitz.${this.app.lang}/wotb/clans/info/?application_id=${this.app.id}&clan_id=${clanID}`)).data
        if (data.status == "error") return null
        return data.data[clanID]
    }

    /**
     * @description Get the ID's and Name of the putted name.
     * @param {string} clanNameOrTag ID or Tag of the clan.
     * @returns {Promise<any | null>} The clan ID's and Name.
     * @example
     * ...
     * const searchingClan = await warcord.wargaming.blitz.clan.search('Name or Tag of Clan')
     * //this returns an array of the clans found
     *
     * const clan = await warcord.wargaming.blitz.clan.get(searchingClan[0].clan_id)
     * //this returns the first clan data.
     */

    public async search(clanNameOrTag: string): Promise<any | null> {
        let data = await (await axios.get(`https://api.wotblitz.${this.app.lang}/wotb/clans/list/?application_id=${this.app.id}&search=${clanNameOrTag}`)).data

        if (data.status == "error" || data.data.length <= 0) return null
        return data.data
    }
}

export { WOTBClan }