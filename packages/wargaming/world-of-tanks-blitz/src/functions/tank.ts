import { BaseClass } from "../../../../../builds/class/base";
import axios from "axios";
import { WOTBTankResolve } from '../interfaces/tank/tank-resolve'

class WOTBTank extends BaseClass {

    app: { id: string }
    constructor(app_id: string) {
        super(app_id)
        this.app = { id: app_id }
    }

    public async get(tankID: string | number): Promise<WOTBTankResolve | null> {
        var data = await (await axios.get(`https://api.wotblitz.com/wotb/encyclopedia/vehicles/?application_id=${this.app.id}&tank_id=${tankID}`)).data
        if (data.status == "error") return null

        return data.data[tankID]
    }
}

export { WOTBTank }