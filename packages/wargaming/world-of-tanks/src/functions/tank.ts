import { WOTTanksResolve } from '../interfaces/tank/tank-resolve'
import axios from 'axios'
import { BaseClass } from '../../../../../builds/class/base'

class WorldOfTanksTank extends BaseClass {

    app: { id: string, lang?: string }
    constructor(app_id: string, lang?: string) {
        super(app_id)
        this.app = { id: app_id, lang: lang }
    }

    /**
     * @description Get all tanks of parameters.
     * @param {?string} type type of tank.
     * @param {?string} nation The nation of tank.
     * @param {?string} tier The tier of tank.
     * @param {?Object} options - The options object.
     * @property {?number} [options.limit=100] Limit of returned data.
     * @returns {Promise(<WOTTanksResolve | null>)} Returns all tanks finded.
     * @exemple
     * ...
     * 
     * const getTank = await warcord.wg.tank.find('heavyTank')
     */

    public async find(type?: string, nation?: string, tier?: string, options?: { limit?: number }): Promise<WOTTanksResolve[] | null> {

        if (!type && !nation && !tier) throw Error("[WARCORD] It's necessary an tankName to use this method.")

        const types = ["heavyTank", "AT-SPG", "mediumTank", "lightTank", "SPG"]
        if (!types.includes((<string>type))) throw Error("This type of tank does not exist.");

        if (options && (<number>options.limit) > 100 || options && (<number>options.limit) <= 0) {
            options.limit = 100
        }

        let option = '';
        options?.limit ? '&' + options?.limit : ''
        type ? option = '&' + type : ''
        nation ? option = '&' + nation : ''
        tier ? option = '&' + tier : ''
        option + type + nation + tier

        let data = await (await axios.get(`https://api.worldoftanks.${this.app.lang}/wot/encyclopedia/vehicles/?application_id=${this.app.id}${option}`)).data
        if (data.status == "error") return null
        return data.data
    } 
    
    /**
     * @description Get a tank by ID.
     * @param {number | string} tankID ID of Tank.
     * @returns {Promise<WOTTanksResolve | null>} Object with Tank Data.
     * @example
     * ...
     * const tank = await warcord.wg.blitz.tank.get('ID of Tank')
     */
    
    public async get(tankID: number | string): Promise<WOTTanksResolve | null> {
        let data = await (await axios.get(`https://api.worldoftanks.${this.app.lang}/wot/encyclopedia/vehicles/?application_id=${this.app.id}&tank_id=${tankID}`)).data
        if (data.status == "error") return null
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

export { WorldOfTanksTank }