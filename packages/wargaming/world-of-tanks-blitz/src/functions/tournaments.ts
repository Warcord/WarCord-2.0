import axios from 'axios'
import { WOTBTournamentsSearch } from '../interfaces/tournaments/search'
import { BaseClass } from '../../../../../builds/class/base'
import { AllRealms } from '../../../../..'
import { warn } from 'console'
import { StautsTournaments } from '../interfaces/tournaments/search'
import { WOTBGetTeam } from '../interfaces/tournaments/team'
import { WOTBTourResult } from '../interfaces/tournaments/result'


export declare type AcceptedLanguagesWOTBTournaments = 'en' | 'es' | 'pt'
/**
 * @forming team roster is not yet confirmed
 * @confirmed team roster is confirmed
 * @disqualified team is disqualified
 */
export declare type StatusTeams = 'forming' | 'confirmed' | 'disqualified'
class WOTBTournaments extends BaseClass {

    private app: { id: string, realm?: AllRealms }
    constructor(app_id: string, realm?: AllRealms) {
        super(app_id)
        this.app = { id: app_id, realm: realm }
    }


    /**
     * @description Search tournaments in API.
     * @param {Object} options Options Object
     * @property {AcceptedLanguagesWOTBTournaments | string} [options.language="en"] Localization language.
     * @property {number} [options.limit=10] Number of returned entries. Min value is 1. Maximum value: 25.
     * @property {string} options.search First letters in tournament name for search. Minimum length: 2 characters. Maximum length: 50 characters.
     * @property {StautsTournaments | StautsTournaments[]} options.status Tournament status.
     * @returns {Promise<WOTBTournamentsSearch[] | null>} The search data.
     */
    public async find(options?: { lang?: AcceptedLanguagesWOTBTournaments, limit?: number, search?: string, status?: StautsTournaments | StautsTournaments[] }): Promise<WOTBTournamentsSearch[] | null> {

        let option = ''
        if (options && options.limit) {

            if ((<number>options.limit) > 25 || (<number>options.limit) <= 0) {
                options.limit = 25
            }

            option += '&limit=' + options.limit
        }

        const langs = ['en', 'es', 'pt']
        if (options && options.lang) {

            if (!langs.includes(options.lang)) {
                options.lang = "en"
                warn("[WARCORD WARNING] This language is not supported. Using the default language...")
            }

            option += '&language=' + options.lang
        }

        options?.search ? option += '&search=' + options?.search : ''

        if (options?.status && options?.status?.length > 1) {
            option += '&status=' + (<string[]>options.status).join('%2C+')
        } else {
            options?.status ? option += '&status=' + options?.status : ''
        }

        var data = await (await axios.get(`https://api.wotblitz.${this.app.realm}/wotb/tournaments/list/?application_id=${this.app.id}${option}`)).data
        if (data.status == "error") return data.error

        return data.data
    }

    /**
     * @description Get a tournamente by ID.
     * @param {string} tourID Tournament ID that can be retrieved from the {@link find} method.
     * @param {Object} options The Options Object
     * @property {AcceptedLanguagesWOTBTournaments | string} options.language Localization language.
     * @returns {Promise<WOTBTournamentsGet | null>} The tournament data.
     */
    public async get(tourID: string, options?: { language?: AcceptedLanguagesWOTBTournaments }): Promise<WOTBTournamentsGet | null> {

        let option = ''
        if (options && options?.language) {
            option += `&language=${options.language}`
        }
        const data = await (await axios.get(`https://api.wotblitz.${this.app.realm}/wotb/tournaments/info/?application_id=${this.app.id}&tournament_id=${tourID}${option}`)).data
        if (data.status == "error") return data.error

        return data.data
    }

    /**
     * @description Used to get the tournament result.
     * @param tourID Tournament ID that can be retrieved from the {@link find} method.
     * @param {Object} options Options Object
     * @property {AcceptedLanguagesWOTBTournaments} language Localization language.
     * @property {number} [limit=10] Number of returned entries.
     * @property {string} team_id Team ID.
     * @returns {Promise<WOTBTourResult | null>} Tournament Result.
     */
    public async getResult(tourID: string, options?: { language?: AcceptedLanguagesWOTBTournaments, limit?: number, team_id?: string | string[] }): Promise<WOTBTourResult | null> {

        let option = ''
        if (options) {

            let { language, limit, team_id } = options
            const acceptedLangs = ['en', 'es', 'pt']

            if (language && !acceptedLangs.includes(language)) {
                warn("[WARCORD] The language is invalid. Using the default...")
                language = "en"
            }

            if (limit && (limit < 1 || limit > 25)) {
                warn("[WARCORD] The minimum or maximum of the limit is invalid. Using the default...")
                limit = 10
            }

            if (team_id) {
                team_id.length > 1 ? option += '&team_id=' + (<string[]>team_id).join('+') : option += '&team_id=' + team_id
            }

            language ? option += '&language=' + language : ''
            limit ? option += '&limit=' + limit : ''
        }

        const data = (await axios.get(`https://api.wotblitz.${this.app.realm}/wotb/tournaments/standings/?application_id=${this.app.id}&tournament_id=${tourID}${option}`)).data
        if (data.status == "error") return data.error

        return data.data
    }

    public readonly teams = {
        /**
         * @description Get the teams of an tournament.
         * @param tourID ID of Tournament.
         * @param {Object} options The options Object.
         * @property {string} options.account_id ID of the account that belongs to the team.
         * @property {string} options.clan_id ID of the clan that owns the team.
         * @property {AcceptedLanguagesWOTBTournaments | string} [options.language="en"] Localization language.
         * @property {number} [options.limit=10] Number of returned entries. Min value is 1. Maximum value: 100.
         * @property {string} options.search First letters in team name for search. Minimum length: 2 characters. Maximum length: 50 characters.
         * @property {StatusTeams | StatusTeams[]} options.status Team status.
         * @property {number | number[]} options.team Team ID. Maximum limit: 25.
         * @returns {Promise<WOTBGetTeam | null>} The team data.
         */
        get: async (tourID: string, options?: { account_id?: string, clan_id?: string, language?: AcceptedLanguagesWOTBTournaments, limit?: number, search?: string, status?: StatusTeams | StatusTeams[], team?: number | number[] }): Promise<WOTBGetTeam | null> => {

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

                account_id ? option += `&account_id=${account_id}` : ''
                clan_id ? option += `&clan_id=${clan_id}` : ''
                language ? option += `&language=${language}` : ''
                limit ? option += `&limit=${limit}` : ''
                search ? option += `&search=${search}` : ''
                status ? option += `&status=${status}` : ''
                team ? option += `&team=${team}` : ''
            }

            const data = (await axios.get(`https://api.wotblitz.${this.app.realm}/wotb/tournaments/teams/?application_id=${this.app.id}&tournament_id=${tourID}${option}`)).data
            if (data.status == "error") return data.error

            return data.data
        }
    }
}

export { WOTBTournaments }