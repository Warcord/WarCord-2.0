import { BaseClass } from "../../../../../builds/class/base";
import axios from "axios";
import { WOWSShipResolve } from '../interfaces/ships/data'

class WOWSShip extends BaseClass {

    app: { id: string }
    constructor(app_id: string) {
        super(app_id)
        this.app = { id: app_id }
    }

    public async get(tankID: string | number): Promise<WOWSShipResolve[] | null> {
        var data = await (await axios.get(`https://api.wotblitz.com/wotb/encyclopedia/vehicles/?application_id=${this.app.id}&tank_id=${tankID}`)).data
        if (data.status == "error") return null

        return data.data[tankID]
    }
}

export { WOWSShip }