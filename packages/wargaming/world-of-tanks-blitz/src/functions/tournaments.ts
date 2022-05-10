import axios from 'axios'
import { WOTBTournamentsSearch } from '../interfaces/tournaments/search'
import { BaseClass } from '../../../../../builds/class/base'
import { AllRealms } from '../../../../..'
import { warn } from 'console'

export declare type AcceptedLanguagesFindWOTBTournaments = 'en' | 'es' | 'pt'

class WOTBTournaments extends BaseClass {

    app: { id: string, realm?: AllRealms }
    constructor(app_id: string, realm?: AllRealms) {
        super(app_id)
        this.app = { id: app_id, realm: realm }
    }


    public async find(options?: { lang?: AcceptedLanguagesFindWOTBTournaments, limit?: number, search?: string, status?: string | string[] }): Promise<WOTBTournamentsSearch[] | null> {
        
        let option = ''
        if (options && options.limit) {
            
            if ((<number>options.limit) > 100 || (<number>options.limit) <= 0) {
                options.limit = 100
            }

            option = option + '&limit=' + options.limit
        }

        const langs = [ 'en', 'es', 'pt' ]
        if (options && options.lang) {

            if (!langs.includes(options.lang)) {
                options.lang = "en"
                warn("[WARCORD WARNING] This language is not supported. Using the default language...")
            }

            option = option + '&language=' + options.lang
        }

        options?.search ? option = option + '&search=' + options?.search : ''
        
        if (options?.status && options?.status?.length > 1) {
            option = option + '&status=' + (<string[]>options.status).join('%2C+')
        } else {
            options?.status ? option = option + '&status=' + options?.status : ''
        }

        var data = await (await axios.get(`https://api.wotblitz.${this.app.realm}/wotb/tournaments/list/?application_id=${this.app.id}${option}`)).data
        if (data.status == "error") return null

        return data.data
    }

}

export { WOTBTournaments }