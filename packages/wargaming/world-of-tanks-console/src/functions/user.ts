import { BaseClass } from "../../../../../builds/class/base";
import axios from "axios";

import { AcceptedLangs, SearchType } from "../interfaces/general/types";
import { WarCordError } from "../../../../warcord/functions/error";

export = class WOTCUser extends BaseClass {

    private app: { id: string }
    private errorController: WarCordError

    constructor(app_id: string) {
        super(app_id)
        this.app = { id: app_id }
        this.errorController = new WarCordError()
    }

    public async search(search: string, options?: { language?: AcceptedLangs, limit?: number, type?: SearchType }): Promise<({ nickname: string, account_id: number }[] | null) | void>  { 

        if (search.length > 24) return this.errorController.createError("The maximum of a search length is 24.", "WARCORD")
        
        let option = ''
        if (options) {
            let { language, limit, type } = options

            const acceptedLangs = [ "en", "ru", "pl", "de", "fr", "es", "tr" ]
            if (language && !acceptedLangs.includes(language)) {

                this.errorController.createWarn("The language is invalid. Using the default...", "WARCORD")
                language = "en"
            }

            if (limit && (limit > 100 || limit < 1)) {

                this.errorController.createWarn("The limit is invalid. Using none...", "WARCORD")
                limit = undefined
            }

            if (type && type.includes("startswith") && type.includes("exact")) {

               return this.errorController.createError("Only one type is valid.", "WARCORD")
            }

            language ? option = option + '&language=' + language : ''
            limit ? option = option + '&limit=' + limit : ''
            type ? option = option + '&type=' + type : ''
        }

        const data = (await axios.get(`https://api-console.worldoftanks.com/wotx/account/list/?application_id=${this.app.id}&search=${search}${option}`)).data
        if (data.status == "error") return this.errorController.createError(`${data.error}`, "API")

        return data.data
    }
}