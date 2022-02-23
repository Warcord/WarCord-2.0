"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WargamingBase = void 0;
const user_1 = require("../../world-of-tanks/src/functions/user");
const tank_1 = require("../../world-of-tanks/src/functions/tank");
const clan_1 = require("../../world-of-tanks/src/functions/clan");
const base_1 = require("../../../../builds/class/base");
const user_2 = require("../../world-of-tanks-blitz/src/functions/user");
const tank_2 = require("../../world-of-tanks-blitz/src/functions/tank");
const clan_2 = require("../../world-of-tanks-blitz/src/functions/clan");
class WargamingBase extends base_1.BaseClass {
    constructor(app_id) {
        super(app_id);
        this.app = { id: app_id };
        this.wot = {
            user: new user_1.WorldOfTanksUser(app_id),
            tank: new tank_1.WorldOfTanksTank(app_id),
            clan: new clan_1.WorldOfTanksClan(app_id)
        };
        this.blitz = {
            user: new user_2.WOTBUser(app_id),
            tank: new tank_2.WOTBTank(app_id),
            clan: new clan_2.WOTBClan(app_id)
        };
    }
}
exports.WargamingBase = WargamingBase;
