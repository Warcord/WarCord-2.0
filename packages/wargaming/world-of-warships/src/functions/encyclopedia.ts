import { BaseClass } from "../../../../../builds/class/base";
import axios from "axios";
import { WOWSPediaResolve } from '../interfaces/encyclopedia/resolve'
import { warn } from "console";
import { WOWSLongPediaResolve } from "../interfaces/encyclopedia/resolve-long";
import { AllRealms } from "../../../../..";
import { WOWSPediaCommandersSearch } from "../interfaces/encyclopedia/commanders/search";

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
        if (data.status == "error") return null;

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
        search: async (options?: { commander_id: string | string[], language: AcceptedLangs }): Promise<WOWSPediaCommandersSearch | null> => {

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

                if (!acceptedLangs.includes(language)) {
                    warn("[WARCORD] The language is invalid. Using the default...")
                    language = "en"
                }

                language ? option = option + "&language=" + language : ''
            }

            const data = (await axios.get(`https://api.worldofwarships.${this.app.realm}/wows/encyclopedia/crews/?application_id=${this.app.id}${option}`)).data
            if (data.status == "error") return null;

            return data.data
        }
    }
}

export { WOWSEncyclopedia }