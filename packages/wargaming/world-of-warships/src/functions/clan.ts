import axios from 'axios'
import { WOWSClansResolve } from '../interfaces/clan/clan-resolve'
import { WOWSClansSearchResolve } from '../interfaces/clan/search-resolve'
import { BaseClass } from '../../../../../builds/class/base'

class WOWSClans extends BaseClass {

    app: { id: string, lang?: string }
    constructor(app_id: string, lang?: string) {
        super(app_id)
        this.app = { id: app_id, lang: lang }
    }

    /**
     * Get a clan in World of WarShips.
     * @param clanID ID of clan.
     * @returns {WOWSClansResolve} Clan data.
     */

    public async get(clanID: number | string): Promise<WOWSClansResolve | null> {
        let data = await (await axios.get(`https://api.worldofwarships.${this.app.lang}/wows/clans/info/?application_id=${this.app.id}&clan_id=${clanID}`)).data
        if (data.status == "error") return null
        data = data.data[clanID]
        return data
    }

    /**
     * Get a array with clans data of respective name.
     * @param clanNameOrTag Name or Tag of clan.
     * @returns {ClanSearchResolve} Array with clan data.
     */
    public async search(clanNameOrTag: string): Promise<WOWSClansSearchResolve | null> {
        let data = await (await axios.get(`https://api.worldofwarships.${this.app.lang}/wows/clans/list/?application_id=${this.app.id}&search=${clanNameOrTag}`)).data
        if (data.status == "error") return null
        data = data.data
        if (!data || data.length <= 0) return null
        return data
    }
}

export { WOWSClans }