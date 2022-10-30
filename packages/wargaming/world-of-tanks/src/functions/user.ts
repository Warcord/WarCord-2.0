import { WOTUserResolve } from '../interfaces/user/user-return'
import { UserSearchResolve } from '../../../build/interfaces/search-resolve'
import axios from 'axios'
import { WOTTopTanksResolve } from '../interfaces/tank/top-tanks'
import { BaseClass } from '../../../../../builds/class/base'
import { AllRealms } from '../../../../..'

class WOTUser extends BaseClass {

    private app: { id: string, realm?: AllRealms }
    constructor(app_id: string, realm?: AllRealms) {
        super(app_id)
        this.app = { id: app_id, realm: realm }
    }

    /**
     * @description Search users with respective name.
     * @param {string} userName Name of user.
     * @param {Object} options Options Object.
     * @property {AllRealms} options.realm The realm of query.
     * @returns {Promise<UserSearchResolve[] | null>} Object Array with users data.
     * @example
     * ...
     * const searchingUser = await <Warcord>.wot.user.search('Wargaming NickName of User')
     * //this returns an array of the users found.
     *
     * const user = await <Warcord>.wot.user.get(searchingUser[0].id)
     * //this returns the first user data.
     */

    public async search(userName: string, options?: { realm?: AllRealms }): Promise<UserSearchResolve[] | null> {

        const real = options && options?.realm ? options.realm : this.app.realm

        const searchUser = await ((await axios.get(`https://api.worldoftanks.${real}/wot/account/list/?application_id=${this.app?.id}&search=${userName}`)).data).data
        if (!searchUser || searchUser.length <= 0) return null
        return searchUser
    }

    /**
     * @description Get an user by ID.
     * @param {number | string} userID ID of user.
     * @param {Object} options Options Object.
     * @property {AllRealms} options.realm The realm of query.
     * @returns {Promise<WOTUserResolve | null>} Object of user data.
     * @example
     * ...
     * const user = await <Warcord>.wot.user.get('Wargaming ID of User')
     */

    public async get(userID: number | string, options?: { realm?: AllRealms }): Promise<WOTUserResolve | null> {

        const real = options && options?.realm ? options.realm : this.app.realm

        let data = await (await axios.get(`https://api.worldoftanks.${real}/wot/account/info/?application_id=${this.app?.id}&account_id=${userID}`)).data
        if (data.status == "error") return data.error
        data = data.data[userID]

        return data
    }

    /**
     * @description Get the 5 best tanks of user.
     * @param {number | string} userID ID of user.
     * @param {?Object} options Options Object.
     * @property {?AllRealms} options.realm The realm of query.
     * @returns {Promise<WOTTopTanksResolve[] | null>} Object Array with tanks data.
     * @example
     * ...
     * const topTanks = await <Warcord>.wot.user.topTanks('Wargaming ID of User')
     */
    public async topTanks(userID: number | string, options?: { realm?: AllRealms }): Promise<WOTTopTanksResolve[] | null> {

        const real = options && options?.realm ? options.realm : this.app.realm

        let data = await (await axios.get(`https://api.worldoftanks.${real}/wot/account/tanks/?application_id=${this.app.id}&account_id=${userID}`)).data
        if (data.status == "error") return data.error
        data = data.data[userID]
        data.length = 5
        return data
    }
}

export { WOTUser }