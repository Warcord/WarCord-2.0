import { WOTUserResolve } from '../interfaces/user/user-return'
import { UserSearchResolve } from '../../../build/interfaces/search-resolve'
import axios from 'axios'
import { WOTTopTanksResolve } from '../interfaces/tank/top-tanks'
import { BaseClass } from '../../../../../builds/class/base'

class WorldOfTanksUser extends BaseClass {

    app: { id: string }
    constructor(app_id: string) {
        super(app_id)
        this.app = { id: app_id }
    }

    /**
     * Search users with respective name.
     * @param userName Name of user.
     * @returns {Object[]} Object Array with users data.
     */

    public async search(userName: string): Promise<UserSearchResolve[] | null> {
        const searchUser = await ((await axios.get(`https://api.worldoftanks.com/wot/account/list/?application_id=${this.app?.id}&search=${userName}`)).data).data
        if (!searchUser || searchUser.length <= 0) return null
        return searchUser
    }

    /**
     * Get an user by ID.
     * @param userID ID of user.
     * @returns {Object} Object of user data.
     */

    public async get(userID: number | string): Promise<WOTUserResolve | null> {
        let data = await (await axios.get(`https://api.worldoftanks.com/wot/account/info/?application_id=${this.app?.id}&account_id=${userID}`)).data
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
     * Get the 5 best tanks of user.
     * @param userID ID of user.
     * @returns {Object[]} Object Array with tanks data.
     */
    public async topTanks(userID: number | string): Promise<WOTTopTanksResolve[] | null> {
        let data = await (await axios.get(`https://api.worldoftanks.com/wot/account/tanks/?application_id=${this.app.id}&account_id=${userID}`)).data
        if (data.status == "error") return null
        data = data.data[userID]
        data.length = 5
        return data
    }
}

export { WorldOfTanksUser }