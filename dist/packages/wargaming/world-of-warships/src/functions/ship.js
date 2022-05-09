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
exports.WOWSShip = void 0;
const base_1 = require("../../../../../builds/class/base");
const axios_1 = __importDefault(require("axios"));
const console_1 = require("console");
class WOWSShip extends base_1.BaseClass {
    constructor(app_id, realm) {
        super(app_id);
        this.app = { id: app_id, realm: realm };
    }
    /**
     * @description Get the ships status of an user.
     * @param {string} userID the ID of user.
     * @returns {Promise<WOWSShipResolve[] | null>}
     * @example
     * ...
     * const ships = await <Warcord>.wg.wows.ship.get('ID of User')
     */
    get(userID) {
        return __awaiter(this, void 0, void 0, function* () {
            var data = yield (yield axios_1.default.get(`https://api.worldofwarships.${this.app.realm}/wows/ships/stats/?application_id=${this.app.id}&account_id=${userID}`)).data;
            if (data.status == "error")
                return null;
            return data.data[userID];
        });
    }
    /**
     * @description Get a ship based on params.
     * @param {Object} ops
     * @property {?string} ops.nation The nation of ship.
     * @property {?string} ops.string The type of ship.
     * @property {?Object} ops.options Options of query.
     * @property {?number} [ops.options.limit=100] The limit of ships finded.
     * @property {?string} [ops.options.lang=en] The Language of Texts.
     * @returns {Promise<(WOWSShipResolve & WOWSLongShipResolve)[] | WOWSLongShipResolve[] | WOWSShipResolve[] | null>}
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
                option = option + '&limit=' + options.limit;
            }
            const langs = ["cs", "de", "en", "es", "fr", "ja", "pl", "ru", "th", "zh-tw", "tr", "zh-cn", "pt-br", "es-mx"];
            if (options && options.lang) {
                if (!langs.includes(options.lang)) {
                    options.lang = "en";
                    (0, console_1.warn)("[WARCORD WARNING] This language is not supported. Using the default language...");
                }
                option = option + '&language=' + options.lang;
            }
            nation ? option = option + '&nation=' + nation : '';
            type ? option = option + '&type=' + type : '';
            var data = yield (yield axios_1.default.get(`https://api.worldofwarships.${this.app.realm}/wows/encyclopedia/ships/?application_id=${this.app.id}${option}`)).data;
            if (data.status == "error")
                return null;
            return data.data;
        });
    }
}
exports.WOWSShip = WOWSShip;
