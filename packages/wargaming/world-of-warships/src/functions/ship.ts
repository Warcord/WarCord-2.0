import { BaseClass } from "../../../../../builds/class/base";
import axios from "axios";
import { WOWSShipResolve } from '../interfaces/ships/data'

class WOWSShip extends BaseClass {

    app: { id: string, lang?: string }
    constructor(app_id: string, lang?: string) {
        super(app_id)
        this.app = { id: app_id, lang: lang }
    }

    public async get(userID: string | number): Promise<WOWSShipResolve[] | null> {
        var data = await (await axios.get(`https://api.worldofwarships.${this.app.lang}/wows/ships/stats/?application_id=${this.app.id}&account_id=${userID}`)).data
        if (data.status == "error") return null;

        return data.data[userID]
    }
}

export { WOWSShip }