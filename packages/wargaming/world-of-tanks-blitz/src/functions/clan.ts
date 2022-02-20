import { BaseClass } from "../../../../../builds/class/base";
import axios from "axios";
import { WOTBClanResolve } from '../interfaces/clan/clan-resolve'

class WOTBClan extends BaseClass {

    app: { id: string }
    constructor(app_id: string) {
        super(app_id)
        this.app = { id: app_id }
    }

    public async get(clanID: string | number): Promise<WOTBClanResolve | null> {
        let data = await (await axios.get(`https://api.wotblitz.com/wotb/clans/info/?application_id=${this.app.id}&clan_id=${clanID}`)).data
        if (data.status == "error") return null
        return data.data[clanID]
    }

    public async search(clanNameOrTag: string): Promise<any | null> {
        let data = await (await axios.get(`https://api.wotblitz.com/wotb/clans/list/?application_id=${this.app.id}&search=${clanNameOrTag}`)).data
        if (data.status == "error" || data.data.length <= 0) return null
        return data.data
    }
}

export { WOTBClan }