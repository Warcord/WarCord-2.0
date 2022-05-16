import axios from 'axios'
import { WOTBTournamentsSearch } from '../interfaces/tournaments/search'
import { BaseClass } from '../../../../../builds/class/base'
import { AllRealms } from '../../../../..'
import { warn } from 'console'
import { StautsTournaments } from '../interfaces/tournaments/search'
import { WOTBGetTeam } from '../interfaces/tournaments/team'


export declare type AcceptedLanguagesFindWOTBTournaments = 'en' | 'es' | 'pt'
/**
 * @forming team roster is not yet confirmed
 * @confirmed team roster is confirmed
 * @disqualified team is disqualified
 */
export declare type StatusTeams = 'forming' | 'confirmed' | 'disqualified'
class WOTBTournaments extends BaseClass {

    app: { id: string, realm?: AllRealms }
    constructor(app_id: string, realm?: AllRealms) {
        super(app_id)
        this.app = { id: app_id, realm: realm }
    }


    /**
     * 
     * @param {Object} options Options Object
     * @property {AcceptedLanguagesFindWOTBTournaments | string} [options.language="en"] Localization language.
     * @property {number} [options.limit=10] Number of returned entries. Min value is 1. Maximum value: 25.
     * @property {string} options.search First letters in tournament name for search. Minimum length: 2 characters. Maximum length: 50 characters.
     * @property {StautsTournaments | StautsTournaments[]} options.status Tournament status.
     * @returns {Promise<WOTBTournamentsSearch[] | null>} The search data.
     */
    public async find(options?: { lang?: AcceptedLanguagesFindWOTBTournaments, limit?: number, search?: string, status?: StautsTournaments | StautsTournaments[] }): Promise<WOTBTournamentsSearch[] | null> {

        let option = ''
        if (options && options.limit) {

            if ((<number>options.limit) > 25 || (<number>options.limit) <= 0) {
                options.limit = 25
            }

            option = option + '&limit=' + options.limit
        }

        const langs = ['en', 'es', 'pt']
        if (options && options.lang) {

            if (!langs.includes(options.lang)) {
                options.lang = "en"
                warn("[WARCORD WARNING] This language is not supported. Using the default language...")
            }

            option = option + '&language=' + options.lang
        }

        options?.search ? option = option + '&search=' + options?.search : ''

        if (options?.status && options?.status?.length > 1) {
            option = option + '&status=' + (<string[]>options.status).join('%2C+')
        } else {
            options?.status ? option = option + '&status=' + options?.status : ''
        }

        var data = await (await axios.get(`https://api.wotblitz.${this.app.realm}/wotb/tournaments/list/?application_id=${this.app.id}${option}`)).data
        if (data.status == "error") return null

        return data.data
    }

    /**
     * 
     * @param {string} tourID Tournament ID that can be retrieved from the {@link find} method.
     * @param {Object} options The Options Object
     * @property {AcceptedLanguagesFindWOTBTournaments | string} options.language Localization language.
     * @returns {Promise<WOTBTournamentsGet | null>} The tournament data.
     */
    public async get(tourID: string, options?: { language?: AcceptedLanguagesFindWOTBTournaments }): Promise<WOTBTournamentsGet | null> {

        let option = ''
        if (options && options?.language) {
            option = option + `&language=${options.language}`
        }
        const data = await (await axios.get(`https://api.wotblitz.${this.app.realm}/wotb/tournaments/info/?application_id=${this.app.id}&tournament_id=${tourID}${option}`)).data
        if (data.status == "error") return null

        return data.data
    }

    public readonly teams = {
        /**
         * @description Get the teams of an tournament.
         * @param tourID ID of Tournament.
         * @param {Object} options The options Object.
         * @property {string} options.account_id ID of the account that belongs to the team.
         * @property {string} options.clan_id ID of the clan that owns the team.
         * @property {AcceptedLanguagesFindWOTBTournaments | string} [options.language="en"] Localization language.
         * @property {number} [options.limit=10] Number of returned entries. Min value is 1. Maximum value: 100.
         * @property {string} options.search First letters in team name for search. Minimum length: 2 characters. Maximum length: 50 characters.
         * @property {StatusTeams | StatusTeams[]} options.status Team status.
         * @property {number | number[]} options.team Team ID. Maximum limit: 25.
         * @returns {Promise<WOTBGetTeam | null>} The team data.
         */
        get: async (tourID: string, options?: { account_id?: string, clan_id?: string, language?: AcceptedLanguagesFindWOTBTournaments, limit?: number, search?: string, status?: StatusTeams | StatusTeams[], team?: number | number[] }): Promise<WOTBGetTeam | null> => {

            let option = ''
            if (options) {
                let { account_id, clan_id, language, limit, search, status, team } = options

                if (limit && !(limit > 100 || limit < 1)) {
                    warn("[WARCORD] The minimum or maximum of the limit is invalid. Using the default...")
                    limit = 100
                }

                const langs = ['en', 'es', 'pt']
                if (language && !langs.includes(language)) {
                    warn("[WARCORD] The language is invalid. Using the default...")
                    language = "en"
                }

                if (search && !(search.length < 2 || search.length > 50)) {
                    throw Error("[WARCORD] The maximum of an search query is 50 characters and the minimum is 2 characters.")
                }

                account_id ? option = option + `&account_id=${account_id}` : ''
                clan_id ? option = option + `&clan_id=${clan_id}` : ''
                language ? option = option + `&language=${language}` : ''
                limit ? option = option + `&limit=${limit}` : ''
                search ? option = option + `&search=${search}` : ''
                status ? option = option + `&status=${status}` : ''
                team ? option = option + `&team=${team}` : ''
            }

            const data = (await axios.get(`https://api.wotblitz.${this.app.realm}/wotb/tournaments/teams/?application_id=${this.app.id}&tournament_id=${tourID}${option}`)).data
            if (data.status == "error") return null

            return data.data
        }
    }
}

export { WOTBTournaments }