import axios from 'axios'

import { UserSearchResolve } from '../../../build/interfaces/search-resolve'
import { BaseClass } from '../../../../../builds/class/base'

import { WOWSUserResolve } from '../interfaces/user/result'

class WOWSUser extends BaseClass {

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
        const searchUser = await ((await axios.get(`https://api.worldofwarships.com/wows/account/list/?application_id=${this.app?.id}&search=${userName}`)).data).data
        if (!searchUser || searchUser.length <= 0) return null
        return searchUser
    }

    /**
     * Get an user by ID.
     * @param userID ID of user.
     * @returns {Object} Object of user data.
     */

    public async get(userID: number | string): Promise<WOWSUserResolve | null> {
        let data = await (await axios.get(`https://api.worldofwarships.com/wows/account/info/?application_id=${this.app?.id}&account_id=${userID}`)).data
        if (data.status == "error") return null
        data = data.data[userID]

        return data;
    }
}

export { WOWSUser }