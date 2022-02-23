import { BaseClass } from "../../../../../builds/class/base";
import axios from "axios";
import { WOTBClanResolve } from '../interfaces/clan/clan-resolve'

class WOTBClan extends BaseClass {

    app: { id: string, lang?: string }
    constructor(app_id: string, lang?: string) {
        super(app_id)
        this.app = { id: app_id, lang: lang }
    }

    public async get(clanID: string | number): Promise<WOTBClanResolve | null> {
        let data = await (await axios.get(`https://api.wotblitz.${this.app.lang}/wotb/clans/info/?application_id=${this.app.id}&clan_id=${clanID}`)).data
        if (data.status == "error") return null
        return data.data[clanID]
    }

    public async search(clanNameOrTag: string): Promise<any | null> {
        let data = await (await axios.get(`https://api.wotblitz.${this.app.lang}/wotb/clans/list/?application_id=${this.app.id}&search=${clanNameOrTag}`)).data

        if (data.status == "error" || data.data.length <= 0) return null
        return data.data
    }
}

export { WOTBClan }