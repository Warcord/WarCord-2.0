import { BaseClass } from "../../../../../builds/class/base";
import axios from "axios";
import { WOWSShipResolve } from '../interfaces/ships/resolve'
import { warn } from "console";
import { WOWSLongShipResolve } from "../interfaces/ships/resolve-long";
import { AllRealms } from "../../../../..";

class WOWSShip extends BaseClass {

    app: { id: string, realm?: AllRealms }
    constructor(app_id: string, realm?: AllRealms) {
        super(app_id)
        this.app = { id: app_id, realm: realm }
    }

    /**
     * @description Get the ships status of an user.
     * @param {string} userID the ID of user.
     * @returns {Promise<WOWSShipResolve[] | null>}
     * @example
     * ...
     * const ships = await <Warcord>.wg.wows.ship.get('ID of User')
     */
    public async get(userID: string | number): Promise<WOWSShipResolve[] | null> {
        var data = await (await axios.get(`https://api.worldofwarships.${this.app.realm}/wows/ships/stats/?application_id=${this.app.id}&account_id=${userID}`)).data
        if (data.status == "error") return null;

        return data.data[userID]
    }

    /**
     * @description Get a ship based on params.
     * @param {Object} ops
     * @property {?string} ops.nation The nation of ship.
     * @property {?string} ops.string The type of ship.
     * @property {?Object} ops.options Options of query.
     * @property {?number} [ops.options.limit=100] The limit of ships finded.
     * @property {?string} [ops.options.lang=en] The Language of Texts.
     * @returns {Promise<(WOWSShipResolve & WOWSLongShipResolve)[] | WOWSLongShipResolve[] | WOWSShipResolve[] | null>}
     * @example
     * ...
     * const getShip = await <WarCord>.wg.wows.ship.find({ nation: 'japan', options: { lang: 'pt-br', limit: 100 } })
     */
    public async find(ops: { nation?: string, type?: string, options?: { limit?: number, lang?: string } }): Promise<(WOWSShipResolve & WOWSLongShipResolve)[] | WOWSLongShipResolve[] | WOWSShipResolve[] | null> {

        const { nation, type, options } = ops
        let option = ''
        if (!nation && !type) throw Error("[WARCORD] It's necessary a nation/type to use this method.")

        const types = [ "AirCarrier", "Battleship", "Destroyer", "Cruiser" ]
        if (type && !types.includes(type)) throw Error("[WARCORD] This type of ship does not exist.")

        if (options && options.limit) {
            
            if ((<number>options.limit) > 100 || (<number>options.limit) <= 0) {
                options.limit = 100
            }

            option = option + '&limit=' + options.limit
        }

        const langs = [ "cs", "de", "en", "es", "fr", "ja", "pl", "ru", "th", "zh-tw", "tr", "zh-cn", "pt-br", "es-mx" ]
        if (options && options.lang) {

            if (!langs.includes(options.lang)) {
                options.lang = "en"
                warn("[WARCORD WARNING] This language is not supported. Using the default language...")
            }

            option = option + '&language=' + options.lang
        }

        nation? option = option + '&nation=' + nation : ''
        type? option = option + '&type=' + type : ''

        var data = await (await axios.get(`https://api.worldofwarships.${this.app.realm}/wows/encyclopedia/ships/?application_id=${this.app.id}${option}`)).data
        if (data.status == "error") return null;

        return data.data
    }
}

export { WOWSShip }