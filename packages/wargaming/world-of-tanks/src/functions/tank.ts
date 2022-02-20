import { WOTTanksResolve } from '../interfaces/tank/tank-resolve'
import axios from 'axios'
import { BaseClass } from '../../../../../builds/class/base'

class WorldOfTanksTank extends BaseClass {

    app: { id: string }
    constructor(app_id: string) {
        super(app_id)
        this.app = { id: app_id }
    }

    /**
     * Get a tank by ID.
     * @param tankID ID of Tank.
     * @returns {Object} Object with Tank Data.
     */
    
    public async get(tankID: number | string): Promise<WOTTanksResolve | null> {
        let data = await (await axios.get(`https://api.worldoftanks.com/wot/encyclopedia/vehicles/?application_id=${this.app.id}&tank_id=${tankID}`)).data
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