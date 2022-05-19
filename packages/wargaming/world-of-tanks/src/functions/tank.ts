import { WOTTanksResolve } from '../interfaces/tank/tank-resolve'
import axios from 'axios'
import { BaseClass } from '../../../../../builds/class/base'
import { warn } from 'console'
import { AllRealms } from '../../../../..'

export type WOTLangs = | "cs" | "de" | "en" | "es" | "fr" | "pl" | "ru" | "th" | "zh-tw" | "tr" | "zh-cn" | "ko" | "vi"
export type WOTNations = | 'japan' | 'germany' | 'sweden' | 'poland' | 'czech' | 'usa' | 'france' | 'ussr' | 'uk' | 'china' | 'italy'
export type WOTTankTypes = | "heavyTank" | "AT-SPG" | "mediumTank" | "lightTank" | "SPG"

class WOTTank extends BaseClass {

    private app: { id: string, realm?: AllRealms }
    constructor(app_id: string, realm?: AllRealms) {
        super(app_id)
        this.app = { id: app_id, realm: realm }
    }

    /**
     * @description Get all tanks of parameters.
     * @param {?string} type type of tank.
     * @param {?WOTNations} nation The nation of tank.
     * @param {?string} tier The tier of tank.
     * @param {?Object} options - The options object.
     * @property {?number} [options.limit=100] Limit of returned data.
     * @property {?WOTLangs} [options.lang=en] The language of Texts.
     * @returns {Promise(<WOTTanksResolve | null>)} Returns all tanks finded.
     * @exemple
     * ...
     * 
     * const getTank = await <Warcord>.wg.tank.find('heavyTank')
     */

    public async find(type?: WOTTankTypes, nation?: WOTNations, tier?: string | number, options?: { limit?: number, lang?: WOTLangs }): Promise<WOTTanksResolve[] | null> {

        if (!type && !nation && !tier) throw Error("[WARCORD] It's necessary an tankName to use this method.")
        let option = '';

        const types = ["heavyTank", "AT-SPG", "mediumTank", "lightTank", "SPG"]
        if (!types.includes((<string>type))) throw Error("[WARCORD] This type of tank does not exist.");

        if (options && options.limit) {
            
            if ((<number>options.limit) > 100 || (<number>options.limit) <= 0) {
                options.limit = 100
            }

            option = option + '&limit=' + options.limit
        }

        const langs = [ "cs", "de", "en", "es", "fr", "pl", "ru", "th", "zh-tw", "tr", "zh-cn", "ko", "vi" ]
        if (options && options.lang) {

            if (!langs.includes(options.lang)) {
                options.lang = "en"
                warn("[WARCORD WARNING] This language is not supported. Using the default language...")
            }

            option = option + '&language=' + options.lang
        }

        type ? option = option + '&type=' + type : ''
        nation ? option = option + '&nation=' + nation : ''
        tier ? option = option + '&tier=' + tier : ''

        let data = await (await axios.get(`https://api.worldoftanks.${this.app.realm}/wot/encyclopedia/vehicles/?application_id=${this.app.id}${option}`)).data
        if (data.status == "error") return data.error
        return data.data
    }
    
    /**
     * @description Get a tank by ID.
     * @param {number | string} tankID ID of Tank.
     * @returns {Promise<WOTTanksResolve | null>} Object with Tank Data.
     * @example
     * ...
     * const tank = await .wg.blitz.tank.get('ID of Tank')
     */
    
    public async get(tankID: number | string): Promise<WOTTanksResolve | null> {
        let data = await (await axios.get(`https://api.worldoftanks.${this.app.realm}/wot/encyclopedia/vehicles/?application_id=${this.app.id}&tank_id=${tankID}`)).data
        if (data.status == "error") return data.error
        data = data.data[tankID]

        return {
            is_wheeled: data.is_wheeled,
            radios: data.radios,
            is_premium: data.is_premium,
            tag: data.tag,
            images: data.images,
            tank_id: data.tank_id,
            suspensions: data.suspensions,
            engines: data.engines,
            crew: data.crew,
            type: data.type,
            guns: data.guns,
            description: data.description,
            short_name: data.short_name,
            is_premium_igr: data.is_premium,
            next_tanks: data.next_tanks,
            modules_tree: data.modules_tree,
            nation: data.nation,
            tier: data.tier,
            prices_xp: data.prices_xp,
            is_gift: data.is_gift,
            name: data.name,
            price_gold: data.price_gold,
            price_credit: data.price_credit,
            default_profile: data.default_profile,
            turrets: data.turrets
        }
    }
}

export { WOTTank }