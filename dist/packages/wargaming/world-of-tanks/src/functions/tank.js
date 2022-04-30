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
class WorldOfTanksTank extends base_1.BaseClass {
    constructor(app_id, lang) {
        super(app_id);
        this.app = { id: app_id, lang: lang };
    }
    /**
     * @description Get a tank by ID.
     * @param {number | string} tankID ID of Tank.
     * @returns {Promise<WOTTanksResolve | null>} Object with Tank Data.
     * @example
     * ...
     * const tank = await warcord.wargaming.blitz.tank.get('ID of Tank')
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
