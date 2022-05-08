import { BaseClass } from "../../../../../builds/class/base";
import axios from "axios";
import { WOTBUserResolve } from '../interfaces/user/user-return';
import { UserSearchResolve } from '../../../build/interfaces/search-resolve';
import { WOTBTankTop } from '../interfaces/tank/tank-top'

class WOTBUser extends BaseClass {

    app: { id: string, lang?: string }
    constructor(app_id: string, lang?: string) {
        super(app_id)
        this.app = { id: app_id, lang: lang }
    }

    /**
     * @description Get the user data by ID.
     * @param {string | number} userID
     * @returns {Promise<WOTBUserResolve | null>}
     * @example
     * ...
     * const user = await <Warcord>.wg.blitz.user.get('Wargaming ID of User')
     */
    public async get(userID: string | number): Promise<WOTBUserResolve | null> {
        let data = await (await axios.get(`https://api.wotblitz.${this.app.lang}/wotb/account/info/?application_id=${this.app.id}&account_id=${userID}`)).data

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

    /**
     * @description Get all users with the putted name.
     * @param {string} userName
     * @returns {Promise<UserSearchResolve | null>}
     * @example
     * ...
     * const searchingUser = await <Warcord>.wg.blitz.user.search('Wargaming NickName of User')
     * //this returns an array of the users found.
     *
     * const user = await <Warcord>.wg.blitz.user.get(searchingUser[0].id)
     * //this returns the first user data.
     */
    public async search(userName: string): Promise<UserSearchResolve | null> {
        let data = await (await axios.get(`https://api.wotblitz.${this.app.lang}/wotb/account/list/?application_id=${this.app.id}&search=${userName}`)).data
        if (data.status == "error" || data.data.length <= 0) return null
        return data.data
    }

    /**
     * @description Get the best 5 tanks of an user.
     * @param {string | number} userID
     * @returns {Promise<WOTBTankTop | null>}
     * @example
     * ...
     * const tank = await <Warcord>.wg.blitz.user.topTanks('Wargaming ID of User')
     */
    public async topTanks(userID: string | number): Promise<WOTBTankTop | null> {

        let data = await (await axios.get(`https://api.wotblitz.${this.app.lang}/wotb/tanks/stats/?application_id=${this.app.id}&account_id=${userID}`)).data

        if (data.status == "error" || data.data.length <= 0) return null
        data = data.data[userID]
        data.length = 5
        return data
    }
}

export { WOTBUser }