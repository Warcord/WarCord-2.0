import { BaseClass } from "../../../../../builds/class/base";
import axios from "axios";
import { WOWSPediaResolve } from '../interfaces/encyclopedia/resolve'
import { warn } from "console";
import { WOWSLongPediaResolve } from "../interfaces/encyclopedia/resolve-long";
import { AllRealms } from "../../../../..";
import { WOWSPediaCommandersSearch } from "../interfaces/encyclopedia/commanders/search";
import { WOWSShipParams } from "../interfaces/encyclopedia/params";
import { WOWSCommanderRank } from "../interfaces/encyclopedia/commanders/rank"

type AcceptedNations = "europe" | "commonwealth" | "netherlands" | "italy" | "usa" | "ussr" | "pan_asia" | "france" | "germany" | "uk" | "japan" | "pan_america"
type AcceptedLangs = "cs" /** Čeština */ | "de" /** Deutsch */ | "en" /** English (by default) */ | "es" /** Español */ | "fr" /** Français */ | "ja" /** 日本語 */ | "pl" /** Polski */ | "ru" /** Русский */ | "th" /** ไทย */ | "zh-tw" /** 繁體中文 */ | "tr" /** Türkçe */ | "zh-cn" /** 中文 */ | "pt-br" /** Português do Brasil */ | "es-mx"

class WOWSEncyclopedia extends BaseClass {

    app: { id: string, realm?: AllRealms }
    constructor(app_id: string, realm?: AllRealms) {
        super(app_id)
        this.app = { id: app_id, realm: realm }
    }

    /**
     * @deprecated Has moved to user. (shipStats)
     */
    public get(): void {
        return warn("[WARCORD] The <Warcord>.wg.wows.ship.get() method is deprecated. Use <Warcord>.wg.wows.user.shipStats().")
    }

    /**
     * @description Get a ship based on params.
     * @param {Object} ops
     * @property {?string} ops.nation The nation of ship.
     * @property {?string} ops.string The type of ship.
     * @property {?Object} ops.options Options of query.
     * @property {?number} [ops.options.limit=100] The limit of ships finded.
     * @property {?string} [ops.options.lang=en] The Language of Texts.
     * @returns {Promise<(WOWSPediaResolve & WOWSLongPediaResolve)[] | WOWSLongPediaResolve[] | WOWSPediaResolve[] | null>}
     * @example
     * ...
     * const getShip = await <WarCord>.wg.wows.ship.find({ nation: 'japan', options: { lang: 'pt-br', limit: 100 } })
     */
    public async find(ops: { nation?: string, type?: string, options?: { limit?: number, lang?: string } }): Promise<(WOWSPediaResolve & WOWSLongPediaResolve)[] | WOWSLongPediaResolve[] | WOWSPediaResolve[] | null> {

        const { nation, type, options } = ops
        let option = ''
        if (!nation && !type) throw Error("[WARCORD] It's necessary a nation/type to use this method.")

        const types = ["AirCarrier", "Battleship", "Destroyer", "Cruiser"]
        if (type && !types.includes(type)) throw Error("[WARCORD] This type of ship does not exist.")

        if (options && options.limit) {

            if ((<number>options.limit) > 100 || (<number>options.limit) <= 0) {
                options.limit = 100
            }

            option = option + '&limit=' + options.limit
        }

        const langs = ["cs", "de", "en", "es", "fr", "ja", "pl", "ru", "th", "zh-tw", "tr", "zh-cn", "pt-br", "es-mx"]
        if (options && options.lang) {

            if (!langs.includes(options.lang)) {
                options.lang = "en"
                warn("[WARCORD WARNING] This language is not supported. Using the default language...")
            }

            option = option + '&language=' + options.lang
        }

        nation ? option = option + '&nation=' + nation : ''
        type ? option = option + '&type=' + type : ''

        var data = await (await axios.get(`https:/api.worldofwarships.${this.app.realm}/wows/encyclopedia/ships/?application_id=${this.app.id}${option}`)).data
        if (data.status == "error") return data.error;

        return data.data
    }

    /**
     * @description Get the parameters of a ship
     * @param ship_id Ship ID
     * @param {Object} options Options Object
     * @property {string | number} options.artillery_id Main Battery ID. If the module is not indicated, module of basic configuration is used.
     * @property {string | number} options.dive_bomber_id Dive bombers' ID. If the module is not indicated, module of basic configuration is used.
     * @property {string | number} options.engine_id Engine ID. If the module is not indicated, module of basic configuration is used.
     * @property {string | number} options.fighter_id Fighters' ID. If the module is not indicated, module of basic configuration is used.
     * @property {string | number} options.fire_control_id ID of Gun Fire Control System. If the module is not indicated, module of basic configuration is used.
     * @property {string | number} options.flight_control_id ID of Flight Control System. If the module is not indicated, module of basic configuration is used.
     * @property {string | number} options.hull_id Hull ID. If the module is not indicated, module of basic configuration is used.
     * @property {string | number} [options.language="en"] Localization language.
     * @property {string | number} options.torpedo_bomber_id Torpedo bombers' ID. If the module is not indicated, module of basic configuration is used.
     * @property {string | number} options.torpedoes_id Torpedo tubes' ID. If the module is not indicated, module of basic configuration is used.
     * @returns {Promise<WOWSShipParams | null>} Parameters of ships in all existing configurations.
     */
    public async shipParams(ship_id: string | number, options?: { artillery_id?: string | number, dive_bomber_id?: string | number, engine_id?: string | number, fighter_id?: string | number, fire_control_id?: string | number, flight_control_id?: string | number, hull_id?: string | number, language?: AcceptedLangs, torpedo_bomber_id?: string | number, torpedoes_id?: string | number }): Promise<WOWSShipParams | null> {

        let option = ''

        if (options) {

            let { artillery_id, dive_bomber_id, engine_id, fighter_id, fire_control_id, flight_control_id, hull_id, language, torpedo_bomber_id, torpedoes_id } = options

            artillery_id ? option = option + '&artillery_id=' + artillery_id : ''
            dive_bomber_id ? option = option + '&dive_bomber_id=' + dive_bomber_id : ''
            engine_id ? option = option + '&engine_id=' + engine_id : ''
            fighter_id ? option = option + '&fighter_id=' + fighter_id : ''
            fire_control_id ? option = option + '&fire_control_id=' + fire_control_id : ''
            fighter_id ? option = option + '&fighter_id=' + fighter_id : ''
            fire_control_id ? option = option + '&fire_control_id=' + fire_control_id : ''
            flight_control_id ? option = option + '&flight_control_id=' + flight_control_id : ''
            hull_id ? option = option + '&hull_id=' + hull_id : ''
            torpedo_bomber_id ? option = option + '&torpedo_bomber_id=' + torpedo_bomber_id : ''
            torpedoes_id ? option = option + '&torpedoes_id=' + torpedoes_id : ''

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

            if (language && !acceptedLangs.includes(language)) {

                warn("[WARCORD] The language is invalid. Using the default...")
                language = "en"
            }

            language ? option = option + '&language=' + language : ''
        }

        const data = (await axios.get(`https://api.worldofwarships.${this.app.realm}/wows/encyclopedia/shipprofile/?application_id=${this.app.id}&ship_id=${ship_id}${option}`)).data
        if (data.status == "error") return data.error
        return data.data
    }

    public readonly commanders = {
        /**
         * @description Search a commander in API
         * @param {Object} options Options Object
         * @property {string | string[]} options.commander_id Commander ID
         * @property {AcceptedLangs} options.Localization language. Commander ID
         * @returns {Promise<WOWSPediaCommandersSearch | null>}
         */
        search: async (options?: { commander_id?: string | string[], language?: AcceptedLangs }): Promise<WOWSPediaCommandersSearch | null> => {

            let option = ''
            if (options) {
                let { commander_id, language } = options

                if (commander_id) {
                    commander_id.length > 1 ? option = option + '&commander_id=' + (<string[]>commander_id).join('+') : option = option + '&commander_id=' + commander_id
                }

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

                if (language && !acceptedLangs.includes(language)) {
                    warn("[WARCORD] The language is invalid. Using the default...")
                    language = "en"
                }

                language ? option = option + "&language=" + language : ''
            }

            const data = (await axios.get(`https://api.worldofwarships.${this.app.realm}/wows/encyclopedia/crews/?application_id=${this.app.id}${option}`)).data
            if (data.status == "error") return data.error;

            return data.data
        },

        ranks: async (options?: { language?: AcceptedLangs, nation?: AcceptedNations }): Promise<WOWSCommanderRank | null> => {

            let option = ''
            if (options) {

                let { language, nation } = options

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
                if (language && !acceptedLangs.includes(language)) {
                    warn("[WARCORD] The language is invalid. Using the default...")
                    language = "en"
                }

                const acceptedNations = [ "europe", "commonwealth", "netherlands", "italy", "usa", "ussr", "pan_asia", "france", "germany", "uk", "japan", "pan_america" ]
                if (nation && acceptedNations.includes(nation)) {
                    warn("[WARCORD] Invalid nation.")
                    nation = undefined
                }

                language ? option = option + "&language=" + language : ''
                nation ? option = option + "&nation=" + nation : ''
            }


            const data = (await axios.get(`https://api.worldofwarships.${this.app.realm}/wows/encyclopedia/crewranks/?application_id=${this.app.id}${option}`)).data
            if (data.status == "error") return data.error

            return data.data
        }
    }
}

export { WOWSEncyclopedia }