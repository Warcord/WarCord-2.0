import { BaseClass } from "../../../../../builds/class/base";
import axios from "axios";

import { AcceptedLangs } from "../interfaces/general/types";
import { WarCordError } from "../../../../warcord/functions/error";
import { WOTCTank } from "../interfaces/tankopedia/search";

type AcceptedNations =  "italy" | "usa" | "ussr" | "france" | "germany" | "uk" | "japan"

export class WOTCTankopedia extends BaseClass {

    private app: { id: string }
    private errorController: WarCordError
    constructor(app_id: string) {
        super(app_id)
        this.app = { id: app_id }
        this.errorController = new WarCordError()
    }


    /**
     * @description Method returns list of available vehicles.
     * @param options Options Object
     * @property {?AcceptedLangs | AcceptedLangs[]} options.language Localization language.
     * @property {?AcceptedNations | AcceptedNations[]} options.nation Nation.
     * @property {?number | number[]} options.tank_id Vehicle ID.
     * @property {?number | number[]} options.tier Tier.
     * @returns {Promise<WOTCTank[] | void>} An array with search data.
     */
    public async search(options?: { language?: AcceptedLangs, nation?: AcceptedNations | AcceptedNations[], tank_id?: number | number[], tier?: number | number[] }): Promise<WOTCTank[] | void> {

        let option = ''
        if (options) {

            let { language, nation, tank_id, tier } = options

            const acceptedLangs = [ "en", "ru", "pl", "de", "fr", "es", "tr" ]
            if (language && !acceptedLangs.includes(language)) {
                this.errorController.createWarn("The language is invalid. Using default...", "WARCORD")
                language = "en"
            }

            if (nation && nation.length > 100) nation = undefined
            if (tank_id && tank_id > 100) tank_id = 100
            if (tier && tier > 100) tier = 100

            if (tier && tier > 1) {
                option += '&tier=' + (<number[]>tier).join('%2C')
            } else {
                tier ? option += '&tier=' + tier : ''
            }

            if (nation && nation.length > 1) {
                option += '&nation=' + (<string[]>nation).join('%2C')
            } else {
                nation ? option += '&nation=' + nation : ''
            }

            if (tank_id && tank_id > 1) {
                option += '&tank_id=' + (<number[]>tank_id).join('%2C')
            } else {
                tank_id ? option += '&tank_id=' + tank_id : ''
            }

            language ? option += '&language=' + language : ''
            tier ? option += '&tier=' + tier : ''
            nation ? option += '&nation=' + nation : ''
            tank_id ? option += '&tank_id=' + tank_id : ''
        }

        const data = (await axios.get(`https://api-console.worldoftanks.com/wotx/encyclopedia/vehicles/?application_id=${this.app.id}${option}`)).data
        if (data.status == "error") return this.errorController.createError(data.error, "API")

        return data.data
    }
}