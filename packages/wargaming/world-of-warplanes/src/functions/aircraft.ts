import { BaseClass } from "../../../../../builds/class/base";
import axios from "axios";
import { AllRealms } from "../../../../..";
import { AllLangs } from "../interfaces/types";
import { AirCraft } from "../interfaces/aircraft";

export class WOWPAirCraft extends BaseClass {

    private app: { id: string, realm?: AllRealms | "com" }
    private langs: string[]
    constructor(app_id: string, realm?: AllRealms) {
        super(app_id)
        this.app = { id: app_id, realm: ["ru", "eu", "na"].includes(realm as string) ? realm : "com" }
        this.langs = [ "en", "ru", "pl", "de", "fr", "es", "zh-cn", "tr", "cs", "th", "vi", "ko"]
    }

    
    /**
    * @name statistics
    * @description Get the Statistics on Player's aircraft.
    * @param {string} playerId Player account ID.
    * @param {Object?} options Options Object.
    * @param {AllLangs?} [options.lang="en"] Localization language.
    * @param {string?} options.plane_id Aircraft ID.
    */
    public async stats(playerId: string, options?: { lang?: AllLangs, plane_id?: string }): Promise<AirCraft[] | null | void> {
        
        if (!playerId) return this.error('Invalid Player ID.', 'WARCORD')

        let option = ''
        if (options) {

            let { lang, plane_id } = options

            if (lang) {
                if (!this.langs.includes(lang)) return this.error('Invalid Language.', 'WARCORD')
                option += `&language=${lang}`
            }

            if (plane_id) {
                option += `&plane_id=${plane_id}`
            }
        }

        let data;
        try {
            data = (await axios.get(`https://api.worldofwarplanes.${this.app.realm}/wowp/planes/stats/?application_id=${this.app.id}&account_id=${playerId}${option}`)).data
        } catch(err: any) {
            if (data) return this.error(`ERROR: ${err}\n\nDATA FOUND: ${data}`, 'WARCORD');
            console.error(err)
            data = undefined;
        }

        if (data && data.status == "error") return this.error(data, 'API')
        return data.data[playerId] as AirCraft[];
    }
}