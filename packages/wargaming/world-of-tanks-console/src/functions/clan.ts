import { BaseClass } from "../../../../../builds/class/base";
import axios from "axios";

import { AcceptedLangs } from "../interfaces/general/types";
import { WarCordError } from "../../../../warcord/functions/error";
import { WOTCClanSearch } from "../interfaces/clan/search";

export = class WOTCClan extends BaseClass {

    private app: { id: string }
    private errorController: WarCordError

    constructor(app_id: string) {
        super(app_id)
        this.app = { id: app_id }
        this.errorController = new WarCordError()
    }

    /**
     * @description Method returns partial list of clans in alphabetical order by clan name or tag.
     * @param {Object} options Options Object
     * @property {AcceptedLangs | string} options.language Localization language.
     * @property {number} [options.limit=100] Number of returned entries (fewer can be returned, but not more than 100). If the limit sent exceeds 100, a limit of 100 is applied (by default).
     * @property {string} options.search Part of name or tag for clan search. Minimum 2 characters
     * @returns {Promise<WOTCClanSearch[] | void>} Array of clans.
     */
    public async search(options?: { language?: AcceptedLangs, limit?: number, search?: string }): Promise<WOTCClanSearch[] | void> {
        

        let option = ''
        if (options) {
            let { language, limit, search } = options

            const acceptedLangs = [ "en", "ru", "pl", "de", "fr", "es", "tr" ]
            if (language && !acceptedLangs.includes(language)) {
                this.errorController.createWarn("The language is invalid. Using default...", "WARCORD")
                language = "en"
            }

            if (limit && (limit > 100 || limit < 1)) {

                this.errorController.createWarn("The limit is invalid. Using default...", "WARCORD")
                limit = 100
            }

            if (search && search.length < 2) {
                return this.errorController.createError("The search length is invalid. The minimum is 2 characters.", "WARCORD")
            }

            language ? option += '&language=' + language : ''
            limit ? option += '&limit=' + limit : ''
            search ? option += '&search=' + search : ''
        }

        const data = (await axios.get(`https://api-console.worldoftanks.com/wotx/clans/list/?application_id=${this.app.id}${option}`)).data
        if (data.status == "error") return this.errorController.createError(data.error, "API")

        return data.data
    }


    /**
     * @description Method returns detailed clan information.
     * @param clan_id Clan ID
     * @param {Object} options Options Object
     * @property {AcceptedLangs | string} options.language Localization language.
     * @property {boolean} options.members Return with the members info.
     * @returns {Promise<WOTCClanGet | void>} Clan data.
     */
    public async get(clan_id: string, options?: { members?: boolean, language: AcceptedLangs }): Promise<WOTCClanGet | void> {

        let option = ''
        if (options) {

            let { members, language } = options
            const acceptedLangs = [ "en", "ru", "pl", "de", "fr", "es", "tr" ]
            if (language && !acceptedLangs.includes(language)) {
                this.errorController.createWarn("The language is invalid. Using default...", "WARCORD")
                language = "en"
            }

            language ? option += '&language=' + language : ''
            members ? option += '&extra=members' : ''
        }

        if (clan_id.length > 100 || clan_id.length < 1) return this.errorController.createError("Invalid clan_id", "WARCORD")

        const data = (await axios.get(`https://api-console.worldoftanks.com/wotx/clans/info/?application_id=${this.app.id}&clan_id=${clan_id}${option}`)).data
        if (data.status == "error") return this.errorController.createError(data.error, "API")

        return data.data
    }
}