"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WOWSEncyclopedia = void 0;
const base_1 = require("../../../../../builds/class/base");
const axios_1 = __importDefault(require("axios"));
const console_1 = require("console");
class WOWSEncyclopedia extends base_1.BaseClass {
    constructor(app_id, realm) {
        super(app_id);
        this.commanders = {
            /**
             * @description Search a commander in API
             * @param {Object} options Options Object
             * @property {string | string[]} options.commander_id Commander ID
             * @property {AcceptedLangs} options.Localization language. Commander ID
             * @returns {Promise<WOWSPediaCommandersSearch | null>}
             */
            search: (options) => __awaiter(this, void 0, void 0, function* () {
                let option = '';
                if (options) {
                    let { commander_id, language } = options;
                    if (commander_id) {
                        commander_id.length > 1 ? option += '&commander_id=' + commander_id.join('+') : option += '&commander_id=' + commander_id;
                    }
                    const acceptedLangs = [
                        "cs",
                        "de",
                        "en",
                        "es",
                        "fr",
                        "ja",
                        "pl",
                        "ru",
                        "th",
                        "zh-tw",
                        "tr",
                        "zh-cn",
                        "pt-br",
                        "es-mx" /** Español (México) */
                    ];
                    if (language && !acceptedLangs.includes(language)) {
                        (0, console_1.warn)("[WARCORD] The language is invalid. Using the default...");
                        language = "en";
                    }
                    language ? option += "&language=" + language : '';
                }
                const data = (yield axios_1.default.get(`https://api.worldofwarships.${this.app.realm}/wows/encyclopedia/crews/?application_id=${this.app.id}${option}`)).data;
                if (data.status == "error")
                    return data.error;
                return data.data;
            }),
            ranks: (options) => __awaiter(this, void 0, void 0, function* () {
                let option = '';
                if (options) {
                    let { language, nation } = options;
                    const acceptedLangs = [
                        "cs",
                        "de",
                        "en",
                        "es",
                        "fr",
                        "ja",
                        "pl",
                        "ru",
                        "th",
                        "zh-tw",
                        "tr",
                        "zh-cn",
                        "pt-br",
                        "es-mx" /** Español (México) */
                    ];
                    if (language && !acceptedLangs.includes(language)) {
                        (0, console_1.warn)("[WARCORD] The language is invalid. Using the default...");
                        language = "en";
                    }
                    const acceptedNations = ["europe", "commonwealth", "netherlands", "italy", "usa", "ussr", "pan_asia", "france", "germany", "uk", "japan", "pan_america"];
                    if (nation && acceptedNations.includes(nation)) {
                        (0, console_1.warn)("[WARCORD] Invalid nation.");
                        nation = undefined;
                    }
                    language ? option += "&language=" + language : '';
                    nation ? option += "&nation=" + nation : '';
                }
                const data = (yield axios_1.default.get(`https://api.worldofwarships.${this.app.realm}/wows/encyclopedia/crewranks/?application_id=${this.app.id}${option}`)).data;
                if (data.status == "error")
                    return data.error;
                return data.data;
            })
        };
        this.app = { id: app_id, realm: realm };
    }
    /**
     * @deprecated Has moved to user. (shipStats)
     */
    get() {
        return (0, console_1.warn)("[WARCORD] The <Warcord>.wg.wows.ship.get() method is deprecated. Use <Warcord>.wg.wows.user.shipStats().");
    }
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
    find(ops) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nation, type, options } = ops;
            let option = '';
            if (!nation && !type)
                throw Error("[WARCORD] It's necessary a nation/type to use this method.");
            const types = ["AirCarrier", "Battleship", "Destroyer", "Cruiser"];
            if (type && !types.includes(type))
                throw Error("[WARCORD] This type of ship does not exist.");
            if (options && options.limit) {
                if (options.limit > 100 || options.limit <= 0) {
                    options.limit = 100;
                }
                option += '&limit=' + options.limit;
            }
            const langs = ["cs", "de", "en", "es", "fr", "ja", "pl", "ru", "th", "zh-tw", "tr", "zh-cn", "pt-br", "es-mx"];
            if (options && options.lang) {
                if (!langs.includes(options.lang)) {
                    options.lang = "en";
                    (0, console_1.warn)("[WARCORD WARNING] This language is not supported. Using the default language...");
                }
                option += '&language=' + options.lang;
            }
            nation ? option += '&nation=' + nation : '';
            type ? option += '&type=' + type : '';
            var data = yield (yield axios_1.default.get(`https:/api.worldofwarships.${this.app.realm}/wows/encyclopedia/ships/?application_id=${this.app.id}${option}`)).data;
            if (data.status == "error")
                return data.error;
            return data.data;
        });
    }
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
    shipParams(ship_id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let option = '';
            if (options) {
                let { artillery_id, dive_bomber_id, engine_id, fighter_id, fire_control_id, flight_control_id, hull_id, language, torpedo_bomber_id, torpedoes_id } = options;
                artillery_id ? option += '&artillery_id=' + artillery_id : '';
                dive_bomber_id ? option += '&dive_bomber_id=' + dive_bomber_id : '';
                engine_id ? option += '&engine_id=' + engine_id : '';
                fighter_id ? option += '&fighter_id=' + fighter_id : '';
                fire_control_id ? option += '&fire_control_id=' + fire_control_id : '';
                fighter_id ? option += '&fighter_id=' + fighter_id : '';
                fire_control_id ? option += '&fire_control_id=' + fire_control_id : '';
                flight_control_id ? option += '&flight_control_id=' + flight_control_id : '';
                hull_id ? option += '&hull_id=' + hull_id : '';
                torpedo_bomber_id ? option += '&torpedo_bomber_id=' + torpedo_bomber_id : '';
                torpedoes_id ? option += '&torpedoes_id=' + torpedoes_id : '';
                const acceptedLangs = [
                    "cs",
                    "de",
                    "en",
                    "es",
                    "fr",
                    "ja",
                    "pl",
                    "ru",
                    "th",
                    "zh-tw",
                    "tr",
                    "zh-cn",
                    "pt-br",
                    "es-mx" /** Español (México) */
                ];
                if (language && !acceptedLangs.includes(language)) {
                    (0, console_1.warn)("[WARCORD] The language is invalid. Using the default...");
                    language = "en";
                }
                language ? option += '&language=' + language : '';
            }
            const data = (yield axios_1.default.get(`https://api.worldofwarships.${this.app.realm}/wows/encyclopedia/shipprofile/?application_id=${this.app.id}&ship_id=${ship_id}${option}`)).data;
            if (data.status == "error")
                return data.error;
            return data.data;
        });
    }
}
exports.WOWSEncyclopedia = WOWSEncyclopedia;
