import axios from 'axios'

import { UserSearchResolve } from '../../../build/interfaces/search-resolve'
import { BaseClass } from '../../../../../builds/class/base'

import { WOWSUserResolve } from '../interfaces/user/result'
import { AllRealms } from '../../../../..'

class WOWSUser extends BaseClass {

    app: { id: string, realm?: AllRealms }
    constructor(app_id: string, realm?: AllRealms) {
        super(app_id)
        this.app = { id: app_id, realm: realm }
    }

    /**
     * @description Search users with respective name.
     * @param {string} userName Name of user.
     * @returns {Promise<UserSearchResolve[] | null>} Object Array with users data.
     */

    public async search(userName: string): Promise<UserSearchResolve[] | null> {
        const searchUser = await ((await axios.get(`https://api.worldofwarships.${this.app.realm}/wows/account/list/?application_id=${this.app?.id}&search=${userName}`)).data).data
        if (!searchUser || searchUser.length <= 0) return null
        return searchUser
    }

    /**
     * @description Get an user by ID.
     * @param {number | string} userID ID of user.
     * @returns {Promise<WOWSUserResolve | null>} Object of user data.
     */

    public async get(userID: number | string): Promise<WOWSUserResolve | null> {
        let data = await (await axios.get(`https://api.worldofwarships.${this.app.realm}/wows/account/info/?application_id=${this.app?.id}&account_id=${userID}`)).data
        if (data.status == "error") return null
        data = data.data[userID]

        return data;
    }
}

export { WOWSUser }