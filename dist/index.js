"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarCord = void 0;
const base_1 = require("./builds/class/base");
const console_1 = require("console");
const user_1 = require("./packages/wargaming/world-of-tanks/src/functions/user");
const tank_1 = require("./packages/wargaming/world-of-tanks/src/functions/tank");
const clan_1 = require("./packages/wargaming/world-of-tanks/src/functions/clan");
const user_2 = require("./packages/wargaming/world-of-tanks-blitz/src/functions/user");
const tank_2 = require("./packages/wargaming/world-of-tanks-blitz/src/functions/tank");
const clan_2 = require("./packages/wargaming/world-of-tanks-blitz/src/functions/clan");
const tournaments_1 = require("./packages/wargaming/world-of-tanks-blitz/src/functions/tournaments");
const user_3 = require("./packages/wargaming/world-of-warships/src/functions/user");
const encyclopedia_1 = require("./packages/wargaming/world-of-warships/src/functions/encyclopedia");
const clan_3 = require("./packages/wargaming/world-of-warships/src/functions/clan");
const user_4 = require("./packages/wargaming/world-of-tanks-console/src/functions/user");
const clan_4 = require("./packages/wargaming/world-of-tanks-console/src/functions/clan");
const tankopedia_1 = require("./packages/wargaming/world-of-tanks-console/src/functions/tankopedia");
class WarCord extends base_1.BaseClass {
    /**
     * @param {string} app_id The ID of your WarGaming App.
     * @param {string} [realm=na] Location language. Not valid for World of Tanks Console (WOTC).
     */
    constructor(app_id, realm) {
        super(app_id);
        this.app = { id: this.idChecker(app_id), realm: this.realmChecker(realm) };
        this.wot = {
            user: new user_1.WOTUser(this.app.id, this.app.realm),
            pedia: new tank_1.WOTTankopedia(this.app.id, this.app.realm),
            clan: new clan_1.WOTClan(this.app.id, this.app.realm)
        };
        this.blitz = {
            user: new user_2.WOTBUser(this.app.id, this.app.realm),
            pedia: new tank_2.WOTBTankopedia(this.app.id, this.app.realm),
            clan: new clan_2.WOTBClan(this.app.id, this.app.realm),
            tournaments: new tournaments_1.WOTBTournaments(this.app.id, this.app.realm)
        };
        this.wows = {
            user: new user_3.WOWSUser(this.app.id, this.app.realm),
            pedia: new encyclopedia_1.WOWSEncyclopedia(this.app.id, this.app.realm),
            clan: new clan_3.WOWSClans(this.app.id, this.app.realm)
        };
        this.wotc = {
            user: new user_4.WOTCUser(this.app.id),
            clan: new clan_4.WOTCClan(this.app.id),
            pedia: new tankopedia_1.WOTCTankopedia(this.app.id)
        };
    }
    idChecker(id) {
        if (!id || id.length <= 0) {
            throw Error('[WarCord] Your API ID is empty.');
        }
        else {
            return id;
        }
    }
    realmChecker(realm) {
        if (!realm)
            return 'com';
        const realms = [
            'na',
            'eu',
            'ru',
            'asia'
        ];
        if (!realms.includes(realm)) {
            (0, console_1.warn)('[WarCord] Your API Lang is not valid. Using default...');
            return 'com';
        }
        if (realm == 'na') {
            realm = 'com';
        }
        return realm;
    }
}
exports.WarCord = WarCord;
