import { BaseClass } from "../../../../../builds/class/base";
import { WOWSPediaResolve } from '../interfaces/encyclopedia/resolve';
import { WOWSLongPediaResolve } from "../interfaces/encyclopedia/resolve-long";
import { AllRealms } from "../../../../..";
import { WOWSPediaCommandersSearch } from "../interfaces/encyclopedia/commanders/search";
import { WOWSShipParams } from "../interfaces/encyclopedia/params";
import { WOWSCommanderRank } from "../interfaces/encyclopedia/commanders/rank";
declare type AcceptedNations = "europe" | "commonwealth" | "netherlands" | "italy" | "usa" | "ussr" | "pan_asia" | "france" | "germany" | "uk" | "japan" | "pan_america";
declare type AcceptedLangs = "cs" /** Čeština */ | "de" /** Deutsch */ | "en" /** English (by default) */ | "es" /** Español */ | "fr" /** Français */ | "ja" /** 日本語 */ | "pl" /** Polski */ | "ru" /** Русский */ | "th" /** ไทย */ | "zh-tw" /** 繁體中文 */ | "tr" /** Türkçe */ | "zh-cn" /** 中文 */ | "pt-br" /** Português do Brasil */ | "es-mx";
declare class WOWSEncyclopedia extends BaseClass {
    private app;
    constructor(app_id: string, realm?: AllRealms);
    /**
     * @deprecated Has moved to user. (shipStats)
     */
    get(): void;
    /**
     * @description Get a ship based on params.
     * @param {object} ops
     * @property {?string} ops.nation The nation of ship.
     * @property {?string} ops.type The type of ship.
     * @property {?object} ops.options Options of query.
     * @property {?number} [ops.options.limit=100] The limit of ships finded.
     * @property {?string} [ops.options.lang=en] The Language of Texts.
     * @returns {Promise<(WOWSPediaResolve & WOWSLongPediaResolve)[] | WOWSLongPediaResolve[] | WOWSPediaResolve[] | null>}
     * @example
     * ...
     * const getShip = await <WarCord>.wg.wows.ship.find({ nation: 'japan', options: { lang: 'pt-br', limit: 100 } })
     */
    find(ops: {
        nation?: string;
        type?: string;
        options?: {
            limit?: number;
            lang?: string;
        };
    }): Promise<(WOWSPediaResolve & WOWSLongPediaResolve)[] | WOWSLongPediaResolve[] | WOWSPediaResolve[] | null>;
    /**
     * @description Get the parameters of a ship
     * @param ship_id Ship ID
     * @param {Object} options Options Object
     * @property {string | number} options.artillery_id Main Battery ID. If the module is not indicated, module of basic configuration is used.
     * @property {string | number} options.dive_bomber_id Dive bombers' ID. If the module is not indicated, module of basic configuration is used.
     * @property {string | number} options.engine_id Engine ID. If the module is not indicated, module of basic configuration is used.
     * @property {string | number} options.fighter_id Fighters' ID. If the module is not indicated, module of basic configuration is used.
     * @property {string | number} options.fire_control_id ID of Gun Fire Control System. If the module is not indicated, module of basic configuration is used.
     * @property {string | number} options.flight_control_id ID of Flight Control System. If the module is not indicated, module of basic configuration is used.
     * @property {string | number} options.hull_id Hull ID. If the module is not indicated, module of basic configuration is used.
     * @property {string | number} [options.language="en"] Localization language.
     * @property {string | number} options.torpedo_bomber_id Torpedo bombers' ID. If the module is not indicated, module of basic configuration is used.
     * @property {string | number} options.torpedoes_id Torpedo tubes' ID. If the module is not indicated, module of basic configuration is used.
     * @returns {Promise<WOWSShipParams | null>} Parameters of ships in all existing configurations.
     */
    shipParams(ship_id: string | number, options?: {
        artillery_id?: string | number;
        dive_bomber_id?: string | number;
        engine_id?: string | number;
        fighter_id?: string | number;
        fire_control_id?: string | number;
        flight_control_id?: string | number;
        hull_id?: string | number;
        language?: AcceptedLangs;
        torpedo_bomber_id?: string | number;
        torpedoes_id?: string | number;
    }): Promise<WOWSShipParams | null>;
    readonly commanders: {
        /**
         * @description Search a commander in API
         * @param {Object} options Options Object
         * @property {string | string[]} options.commander_id Commander ID
         * @property {AcceptedLangs} options.Localization language. Commander ID
         * @returns {Promise<WOWSPediaCommandersSearch | null>}
         */
        search: (options?: {
            commander_id?: string | string[] | undefined;
            language?: AcceptedLangs | undefined;
        } | undefined) => Promise<WOWSPediaCommandersSearch | null>;
        ranks: (options?: {
            language?: AcceptedLangs | undefined;
            nation?: AcceptedNations | undefined;
        } | undefined) => Promise<WOWSCommanderRank | null>;
    };
}
export { WOWSEncyclopedia };
