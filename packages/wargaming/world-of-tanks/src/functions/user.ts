import { WOTUserResolve } from '../interfaces/user/user-return'
import { UserSearchResolve } from '../../../build/interfaces/search-resolve'
import axios from 'axios'
import { WOTTopTanksResolve } from '../interfaces/tank/top-tanks'
import { BaseClass } from '../../../../../builds/class/base'

class WorldOfTanksUser extends BaseClass {

    app: { id: string, lang?: string }
    constructor(app_id: string, lang?: string) {
        super(app_id)
        this.app = { id: app_id, lang: lang }
    }

    /**
     * @description Search users with respective name.
     * @param {string} userName Name of user.
     * @returns {Promise<UserSearchResolve[] | null>} Object Array with users data.
     * @example
     * ...
     * const searchingUser = await warcord.wargaming.wot.user.search('Wargaming NickName of User')
     * //this returns an array of the users found.
     * 
     * const user = await warcord.wargaming.wot.user.get(searchingUser[0].id)
     * //this returns the first user data.
     */

    public async search(userName: string): Promise<UserSearchResolve[] | null> {
        const searchUser = await ((await axios.get(`https://api.worldoftanks.${this.app.lang}/wot/account/list/?application_id=${this.app?.id}&search=${userName}`)).data).data
        if (!searchUser || searchUser.length <= 0) return null
        return searchUser
    }

    /**
     * @description Get an user by ID.
     * @param {number | string} userID ID of user.
     * @returns {Promise<WOTUserResolve | null>} Object of user data.
     * @example
     * ...
     * const user = await warcord.wargaming.wot.user.get('Wargaming ID of User')
     */

    public async get(userID: number | string): Promise<WOTUserResolve | null> {
        let data = await (await axios.get(`https://api.worldoftanks.${this.app.lang}/wot/account/info/?application_id=${this.app?.id}&account_id=${userID}`)).data
        if (data.status == "error") return null
        data = data.data[userID]

        return {
            last_battle_time: data.last_battle_time,
            account_id: data.account_id,
            created_at: data.created_at,
            global_rating: data.global_rating,
            clan_id: data.clan_id,
            statistics: {
                clan: data.statistics.clan,
                all: data.statistics.all,
                trees_cut: data.statistics.trees_cut
            },
            nickname: data.nickname
        }
    }

    /**
     * @description Get the 5 best tanks of user.
     * @param {number | string} userID ID of user.
     * @returns {Promise<WOTTopTanksResolve[] | null>} Object Array with tanks data.
     * @example
     * ...
     * const topTanks = await warcord.wargaming.wot.user.topTanks('Wargaming ID of User')
     */
    public async topTanks(userID: number | string): Promise<WOTTopTanksResolve[] | null> {
        let data = await (await axios.get(`https://api.worldoftanks.${this.app.lang}/wot/account/tanks/?application_id=${this.app.id}&account_id=${userID}`)).data
        if (data.status == "error") return null
        data = data.data[userID]
        data.length = 5
        return data
    }
}

export { WorldOfTanksUser }