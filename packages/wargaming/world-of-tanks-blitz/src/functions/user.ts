import { BaseClass } from "../../../../../builds/class/base";
import axios from "axios";
import { WOTBUserResolve } from '../interfaces/user/user-return';
import { UserSearchResolve } from '../../../build/interfaces/search-resolve';
import { WOTBTankTop } from '../interfaces/tank/tank-top'

class WOTBUser extends BaseClass {

    app: { id: string }
    constructor(app_id: string) {
        super(app_id)
        this.app = { id: app_id }
    }


    public async get(userID: string | number): Promise<WOTBUserResolve | null> {
        let data = await (await axios.get(`https://api.wotblitz.com/wotb/account/info/?application_id=${this.app.id}&account_id=${userID}`)).data
        if (data.status == "error") return null
        data = data.data[userID]
        return {
            statistics: {
              clan: data.statistics.clan,
              all: data.statistics.all
            },
            account_id: data.account_id,
            created_at: data.created_at,
            last_battle_time: data.last_battle_time,
            nickname: data.nickname
          }
    }

    public async search(userName: string): Promise<UserSearchResolve | null> {
        let data = await (await axios.get(`https://api.wotblitz.com/wotb/account/list/?application_id=${this.app.id}&search=${userName}`)).data
        if (data.status == "error" || data.data.length <= 0) return null
        return data.data
    }

    public async topTanks(userID: string | number): Promise<WOTBTankTop | null> {
        let data = await (await axios.get(`https://api.wotblitz.com/wotb/tanks/stats/?application_id=${this.app.id}&account_id=${userID}`)).data
        if (data.status == "error" || data.data.length <= 0) return null
        data = data.data[userID]
        data.length = 5
        return data
    }
}

export { WOTBUser }