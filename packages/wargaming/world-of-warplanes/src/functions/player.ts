import { BaseClass } from "../../../../../builds/class/base";
import axios from "axios";
import { AllRealms } from "../../../../..";
import { AllLangs, AllTypes } from "../interfaces/types";
import { FindPlayer, GetPlayer } from "../interfaces/player";

export class WOWPPlayer extends BaseClass {

    private app: { id: string, realm?: AllRealms | "com" }
    private langs: string[]
    constructor(app_id: string, realm?: AllRealms) {
        super(app_id)
        this.app = { id: app_id, realm: ["ru", "eu", "na"].includes(realm as string) ? realm : "com" }
        this.langs = [ "en", "ru", "pl", "de", "fr", "es", "zh-cn", "tr", "cs", "th", "vi", "ko"]
    }


    /**
     * @name find
     * @description Used to search a Player by name.
     * @param {String} name Name of Player.
     * @param {Object} options Options Object.
     * @param {AllLangs | String} [options.lang="en"] Language of return.
     * @param {Number} options.limit Limit of Search Query.
     * @param {AllTypes | String } [options.type="startswith"] Type of Search.
     * @return {Promise<any>} Return a Map of Match Players.
     */
    public async find(name: string, options?: { lang?: AllLangs, limit?: number, type?: AllTypes }): Promise<FindPlayer[] | null | void> {

        if (!name) return this.error('You need to put a name!', 'WARCORD');
        
        let option = '';

        if (options) {

            let { lang, limit, type } = options
            
            
            if (lang && !this.langs.includes(lang)) return this.error('Invalid Language.', 'WARCORD')
            if (limit && (limit > 100 || limit < 0)) return this.error('Invalid Limit.', 'WARCORD')
            if (type && !["startswith", "exact"].includes(type)) return this.error('Invalid Type.', 'WARCORD')

            lang ? option += `&language=${lang}` : ''
            limit ? option += `&limit=${limit}` : ''
            type ? option += `&type=${type}` : ''
        }

        let data
        try {
            data = (await axios.get(`https://api.worldofwarplanes.${this.app.realm}/wowp/account/list/?application_id=${this.app.id}&search=${name}${option}`)).data
        } catch(err: any) {
            if (data) return this.error(`ERROR: ${err}\n\nDATA FOUND: ${data}`, 'WARCORD');
            console.error(err)
            data = null;
        }
        if (data && data.status == "error") return this.error(data, 'API')
        return data.data as FindPlayer[];
    }
    

    /**
     * @name get
     * @description Get a Player by ID.
     * @param {String} playerId Player account ID.
     * @param {Object?} options Options Object.
     * @param {AllLangs?} [options.lang="en"] Localization language.
     */
    public async get(playerId: string, options?: { lang?: AllLangs }): Promise<GetPlayer | void | undefined> {

        if (!playerId) return this.error('Invalid Player ID.', 'WARCORD')

        let option = ''
        if (options) {

            let { lang } = options

            if (lang) {
                if (!this.langs.includes(lang)) return this.error('Invalid Language.', 'WARCORD')
                option += `&language=${lang}`
            }
        }

        let data;
        try {
            data = (await axios.get(`https://api.worldofwarplanes.${this.app.realm}/wowp/account/info2/?application_id=${this.app.id}&account_id=${playerId}${option}`)).data
        } catch(err: any) {
            if (data) return this.error(`ERROR: ${err}\n\nDATA FOUND: ${data}`, 'WARCORD');
            console.error(err)
            data = undefined;
        }

        if (data && data.status == "error") return this.error(data, 'API')
        return data?.data ? data.data[playerId] : undefined
    }

}