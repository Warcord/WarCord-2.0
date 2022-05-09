"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WargamingBase = void 0;
const base_1 = require("../../../../builds/class/base");
const user_1 = require("../../world-of-tanks/src/functions/user");
const tank_1 = require("../../world-of-tanks/src/functions/tank");
const clan_1 = require("../../world-of-tanks/src/functions/clan");
const user_2 = require("../../world-of-tanks-blitz/src/functions/user");
const tank_2 = require("../../world-of-tanks-blitz/src/functions/tank");
const clan_2 = require("../../world-of-tanks-blitz/src/functions/clan");
const user_3 = require("../../world-of-warships/src/functions/user");
const ship_1 = require("../../world-of-warships/src/functions/ship");
const clan_3 = require("../../world-of-warships/src/functions/clan");
class WargamingBase extends base_1.BaseClass {
    constructor(app_id, realm) {
        super(app_id);
        this.app = { id: app_id, realm: realm };
        this.wot = {
            user: new user_1.WOTUser(app_id, realm),
            tank: new tank_1.WOTTank(app_id, realm),
            clan: new clan_1.WOTClan(app_id, realm)
        };
        this.blitz = {
            user: new user_2.WOTBUser(app_id, realm),
            tank: new tank_2.WOTBTank(app_id, realm),
            clan: new clan_2.WOTBClan(app_id, realm)
        };
        this.wows = {
            user: new user_3.WOWSUser(app_id, realm),
            ship: new ship_1.WOWSShip(app_id, realm),
            clan: new clan_3.WOWSClans(app_id, realm)
        };
    }
}
exports.WargamingBase = WargamingBase;
