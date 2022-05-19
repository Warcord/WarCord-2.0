import axios from 'axios'
import { warn } from 'console'

import { UserSearchResolve } from '../../../build/interfaces/search-resolve'
import { BaseClass } from '../../../../../builds/class/base'
import { WOWSPediaResolve } from '../interfaces/encyclopedia/resolve'
import { WOWSUserResolve } from '../interfaces/user/result'
import { AllRealms } from '../../../../..'

type AcceptedLangs = "cs" /** Čeština */ | "de" /** Deutsch */ | "en" /** English (by default) */ | "es" /** Español */ | "fr" /** Français */ | "ja" /** 日本語 */ | "pl" /** Polski */ | "ru" /** Русский */ | "th" /** ไทย */ | "zh-tw" /** 繁體中文 */ | "tr" /** Türkçe */ | "zh-cn" /** 中文 */ | "pt-br" /** Português do Brasil */ | "es-mx"

class WOWSUser extends BaseClass {

    private app: { id: string, realm?: AllRealms }
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
        if (data.status == "error") return data.error
        data = data.data[userID]

        return data;
    }

    /**
     * @description Get all achievements of an user.
     * @param account_id Player account ID.
     * @param {Object} options Options Object
     * @property {AcceptedLangs} options.language Localization language.
     * @returns {Promise<{ battle: any, progress: any } | null>} The achievements of user.
     */
    public async achievements(account_id: string, options?: { language?: AcceptedLangs }): Promise<{ battle: any, progress: any } | null> {
        
        let option = ''
        if (options && options.language) {
            
            const acceptedLangs = [
                "cs", /** Čeština */
                "de", /** Deutsch */
                "en", /** English (by default) */
                "es", /** Español */
                "fr", /** Français */
                "ja", /** 日本語 */
                "pl", /** Polski */
                "ru", /** Русский */
                "th", /** ไทย */
                "zh-tw", /** 繁體中文 */
                "tr", /** Türkçe */
                "zh-cn", /** 中文 */
                "pt-br", /** Português do Brasil */
                "es-mx"  /** Español (México) */
            ]
            if (!acceptedLangs.includes(options.language)) {
                warn("[WARCORD] The language is invalid. Using the default...")
                options.language = "en"
            }
        }

        options?.language ? option = option + '&language=' + options?.language : ''

        const data = (await axios.get(`https://api.worldofwarships.${this.app.realm}/wows/account/achievements/?application_id=${this.app.id}&account_id=${account_id}${option}`)).data
        if (data.status == "error") return data.error

        return data.data;
    }

    /**
     * @description Get the ships status of an user.
     * @param {string} account_id the ID of user.
     * @returns {Promise<WOWSPediaResolve[] | null>}
     * @example
     * ...
     * const ships = await <Warcord>.wg.wows.user.shipStats('ID of User')
     */
         public async shipStats(account_id: string | number): Promise<WOWSPediaResolve[] | null> {
            var data = await (await axios.get(`https://api.worldofwarships.${this.app.realm}/wows/ships/stats/?application_id=${this.app.id}&account_id=${account_id}`)).data
            if (data.status == "error") return data.error;
    
            return data.data[account_id]
        }
    
}

export { WOWSUser }