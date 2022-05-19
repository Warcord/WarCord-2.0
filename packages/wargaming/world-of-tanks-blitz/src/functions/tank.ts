import { BaseClass } from "../../../../../builds/class/base";
import axios from "axios";
import { WOTBTankResolve } from '../interfaces/tank/tank-resolve'
import { AllRealms } from "../../../../..";

class WOTBTank extends BaseClass {

    private app: { id: string, realm?: AllRealms }
    constructor(app_id: string, realm?: AllRealms) {
        super(app_id)
        this.app = { id: app_id, realm: realm }
    }

    /**
     * @description Get the tank by ID.
     * @param {string | number} tankID
     * @returns {Promise<WOTBTankResolve | null>}
     */
    public async get(tankID: string | number): Promise<WOTBTankResolve | null> {
        var data = await (await axios.get(`https://api.wotblitz.${this.app.realm}/wotb/encyclopedia/vehicles/?application_id=${this.app.id}&tank_id=${tankID}`)).data
        if (data.status == "error") return data.error

        return data.data[tankID]
    }
}

export { WOTBTank }