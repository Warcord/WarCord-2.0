import { BaseClass } from "../../../../../builds/class/base";
import axios from "axios";
import { WOTBTankResolve } from '../interfaces/tank/tank-resolve'

class WOTBTank extends BaseClass {

    app: { id: string, lang?: string }
    constructor(app_id: string, lang?: string) {
        super(app_id)
        this.app = { id: app_id, lang: lang }
    }

    /**
     * @description Get the tank by ID.
     * @param {string | number} tankID
     * @returns {Promise<WOTBTankResolve | null>}
     */
    public async get(tankID: string | number): Promise<WOTBTankResolve | null> {
        var data = await (await axios.get(`https://api.wotblitz.${this.app.lang}/wotb/encyclopedia/vehicles/?application_id=${this.app.id}&tank_id=${tankID}`)).data
        if (data.status == "error") return null

        return data.data[tankID]
    }
}

export { WOTBTank }