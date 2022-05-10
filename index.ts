import { WOTClanResolve } from './packages/wargaming/world-of-tanks/src/interfaces/clan/clan-resolve'
import { WOTClanSearchResolve } from './packages/wargaming/world-of-tanks/src/interfaces/clan/search-resolve'
import { WOTTanksResolve } from './packages/wargaming/world-of-tanks/src/interfaces/tank/tank-resolve'
import { WOTTopTanksResolve } from './packages/wargaming/world-of-tanks/src/interfaces/tank/top-tanks'
import { WOTUserResolve } from './packages/wargaming/world-of-tanks/src/interfaces/user/user-return'
import { UserSearchResolve } from './packages/wargaming/build/interfaces/search-resolve'
import { BaseClass } from './builds/class/base'
import { warn } from 'console'

import { WOTUser } from './packages/wargaming/world-of-tanks/src/functions/user'
import { WOTTank } from './packages/wargaming/world-of-tanks/src/functions/tank'
import { WOTClan } from './packages/wargaming/world-of-tanks/src/functions/clan'

import { WOTBUser } from './packages/wargaming/world-of-tanks-blitz/src/functions/user'
import { WOTBTank } from './packages/wargaming/world-of-tanks-blitz/src/functions/tank'
import { WOTBClan } from './packages/wargaming/world-of-tanks-blitz/src/functions/clan'

import { WOWSUser } from './packages/wargaming/world-of-warships/src/functions/user'
import { WOWSShip } from './packages/wargaming/world-of-warships/src/functions/ship'
import { WOWSClans } from './packages/wargaming/world-of-warships/src/functions/clan'

declare type AllRealms = | 'na' | 'eu' | 'ru' | 'asia'

class WarCord extends BaseClass {

    app: {
        id: string,
        realm?: AllRealms
    }
    wot: {
        user: WOTUser,
        tank: WOTTank,
        clan: WOTClan
    }
    blitz: {
        user: WOTBUser,
        tank: WOTBTank,
        clan: WOTBClan
    }
    wows: {
        user: WOWSUser,
        ship: WOWSShip,
        clan: WOWSClans
    }

    /**
     * @param {string} app_id The ID of your WarGaming App.
     * @param {string} [realm=na] The followed types are an option: .
     */
    constructor(app_id: string, realm?: AllRealms) {
        super(app_id)
        this.app = { id: this.idChecker(app_id), realm: this.realmChecker(realm) }
        this.wot = {
            user: new WOTUser(this.app.id, this.app.realm),
            tank: new WOTTank(this.app.id, this.app.realm),
            clan: new WOTClan(this.app.id, this.app.realm)
        }
        this.blitz = {
            user: new WOTBUser(this.app.id, this.app.realm),
            tank: new WOTBTank(this.app.id, this.app.realm),
            clan: new WOTBClan(this.app.id, this.app.realm)
        }
        this.wows = {
            user: new WOWSUser(this.app.id, this.app.realm),
            ship: new WOWSShip(this.app.id, this.app.realm),
            clan: new WOWSClans(this.app.id, this.app.realm)
        }
    }

    private idChecker(id: string): string {
        if (!id || id.length <= 0) {
            throw Error('[WarCord] Your API ID is empty.')
        } else {
            return id
        }
    }

    private realmChecker(realm: AllRealms | undefined): AllRealms {
        if (!realm) return 'com' as AllRealms
        const realms = [
            'na',
            'eu',
            'ru',
            'asia'
        ]

        if (!realms.includes(realm)) { warn('[WarCord] Your API Lang is not valid. Now, the default is in use.'); return 'com' as AllRealms }
        if (realm == 'na') { realm = 'com' as AllRealms }

        return realm
    }


}

//Main class export
export { WarCord }

//Interfaces export
export { WOTClanResolve, WOTClanSearchResolve, WOTTanksResolve, WOTTopTanksResolve, WOTUserResolve, UserSearchResolve }

//Types export
export { AllRealms }