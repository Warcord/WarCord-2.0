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
exports.WorldOfTanksTank = void 0;
const axios_1 = __importDefault(require("axios"));
const base_1 = require("../../../../../builds/class/base");
const console_1 = require("console");
class WorldOfTanksTank extends base_1.BaseClass {
    constructor(app_id, lang) {
        super(app_id);
        this.app = { id: app_id, lang: lang };
    }
    /**
     * @description Get all tanks of parameters.
     * @param {?string} type type of tank.
     * @param {?string} nation The nation of tank.
     * @param {?string} tier The tier of tank.
     * @param {?Object} options - The options object.
     * @property {?number} [options.limit=100] Limit of returned data.
     * @property {?string} [options.lang=en] The language of Texts.
     * @returns {Promise(<WOTTanksResolve | null>)} Returns all tanks finded.
     * @exemple
     * ...
     *
     * const getTank = await <Warcord>.wg.tank.find('heavyTank')
     */
    find(type, nation, tier, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!type && !nation && !tier)
                throw Error("[WARCORD] It's necessary an tankName to use this method.");
            let option = '';
            const types = ["heavyTank", "AT-SPG", "mediumTank", "lightTank", "SPG"];
            if (!types.includes(type))
                throw Error("[WARCORD] This type of tank does not exist.");
            if (options && options.limit) {
                if (options.limit > 100 || options.limit <= 0) {
                    options.limit = 100;
                }
                option = option + '&limit=' + options.limit;
            }
            const langs = ["cs", "de", "en", "es", "fr", "pl", "ru", "th", "zh-tw", "tr", "zh-cn", "ko", "vi"];
            if (options && options.lang) {
                if (!langs.includes(options.lang)) {
                    options.lang = "en";
                    (0, console_1.warn)("[WARCORD WARNING] This language is not supported. Using the default language...");
                }
                option = option + '&language=' + options.lang;
            }
            type ? option = option + '&type=' + type : '';
            nation ? option = option + '&nation=' + nation : '';
            tier ? option = option + '&tier=' + tier : '';
            let data = yield (yield axios_1.default.get(`https://api.worldoftanks.${this.app.lang}/wot/encyclopedia/vehicles/?application_id=${this.app.id}${option}`)).data;
            if (data.status == "error")
                return null;
            return data.data;
        });
    }
    /**
     * @description Get a tank by ID.
     * @param {number | string} tankID ID of Tank.
     * @returns {Promise<WOTTanksResolve | null>} Object with Tank Data.
     * @example
     * ...
     * const tank = await .wg.blitz.tank.get('ID of Tank')
     */
    get(tankID) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield (yield axios_1.default.get(`https://api.worldoftanks.${this.app.lang}/wot/encyclopedia/vehicles/?application_id=${this.app.id}&tank_id=${tankID}`)).data;
            if (data.status == "error")
                return null;
            data = data.data[tankID];
            return {
                is_wheeled: data.is_wheeled,
                radios: data.radios,
                is_premium: data.is_premium,
                tag: data.tag,
                images: data.images,
                tank_id: data.tank_id,
                suspensions: data.suspensions,
                engines: data.engines,
                crew: data.crew,
                type: data.type,
                guns: data.guns,
                description: data.description,
                short_name: data.short_name,
                is_premium_igr: data.is_premium,
                next_tanks: data.next_tanks,
                modules_tree: data.modules_tree,
                nation: data.nation,
                tier: data.tier,
                prices_xp: data.prices_xp,
                is_gift: data.is_gift,
                name: data.name,
                price_gold: data.price_gold,
                price_credit: data.price_credit,
                default_profile: data.default_profile,
                turrets: data.turrets
            };
        });
    }
}
exports.WorldOfTanksTank = WorldOfTanksTank;
