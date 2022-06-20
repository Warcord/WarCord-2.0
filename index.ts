import { BaseClass } from './builds/class/base'
import { warn } from 'console'

import { WOTUser } from './packages/wargaming/world-of-tanks/src/functions/user'
import { WOTTankopedia } from './packages/wargaming/world-of-tanks/src/functions/tank'
import { WOTClan } from './packages/wargaming/world-of-tanks/src/functions/clan'

import { WOTBUser } from './packages/wargaming/world-of-tanks-blitz/src/functions/user'
import { WOTBTankopedia } from './packages/wargaming/world-of-tanks-blitz/src/functions/tank'
import { WOTBClan } from './packages/wargaming/world-of-tanks-blitz/src/functions/clan'
import { WOTBTournaments } from './packages/wargaming/world-of-tanks-blitz/src/functions/tournaments'

import { WOWSUser } from './packages/wargaming/world-of-warships/src/functions/user'
import { WOWSEncyclopedia } from './packages/wargaming/world-of-warships/src/functions/encyclopedia'
import { WOWSClans } from './packages/wargaming/world-of-warships/src/functions/clan'

import { WOTCUser } from './packages/wargaming/world-of-tanks-console/src/functions/user'
import { WOTCClan } from './packages/wargaming/world-of-tanks-console/src/functions/clan'
import { WOTCTankopedia } from './packages/wargaming/world-of-tanks-console/src/functions/tankopedia'

import { WOTClanResolve } from './packages/wargaming/world-of-tanks/src/interfaces/clan/clan-resolve'
import { WOTClanSearchResolve } from './packages/wargaming/world-of-tanks/src/interfaces/clan/search-resolve'
import { WOTTanksResolve } from './packages/wargaming/world-of-tanks/src/interfaces/tank/tank-resolve'
import { WOTTopTanksResolve } from './packages/wargaming/world-of-tanks/src/interfaces/tank/top-tanks'
import { WOTUserResolve } from './packages/wargaming/world-of-tanks/src/interfaces/user/user-return'
import { UserSearchResolve } from './packages/wargaming/build/interfaces/search-resolve'

export declare type AllRealms = | 'na' | 'eu' | 'ru' | 'asia'

export class WarCord extends BaseClass {

    app: {
        id: string,
        realm?: AllRealms
    }
    wot: {
        user: WOTUser,
        pedia: WOTTankopedia,
        clan: WOTClan
    }
    blitz: {
        user: WOTBUser,
        pedia: WOTBTankopedia,
        clan: WOTBClan,
        tournaments: WOTBTournaments
    }
    wows: {
        user: WOWSUser,
        pedia: WOWSEncyclopedia,
        clan: WOWSClans
    }
    wotc: {
        user: WOTCUser,
        clan: WOTCClan,
        pedia: WOTCTankopedia
    }

    /**
     * @param {string} app_id The ID of your WarGaming App.
     * @param {string} [realm=na] Location language. Not valid for World of Tanks Console (WOTC).
     */
    constructor(app_id: string, realm?: AllRealms) {
        super(app_id)
        this.app = { id: this.idChecker(app_id), realm: this.realmChecker(realm) }
        this.wot = {
            user: new WOTUser(this.app.id, this.app.realm),
            pedia: new WOTTankopedia(this.app.id, this.app.realm),
            clan: new WOTClan(this.app.id, this.app.realm)
        }
        this.blitz = {
            user: new WOTBUser(this.app.id, this.app.realm),
            pedia: new WOTBTankopedia(this.app.id, this.app.realm),
            clan: new WOTBClan(this.app.id, this.app.realm),
            tournaments: new WOTBTournaments(this.app.id, this.app.realm)
        }
        this.wows = {
            user: new WOWSUser(this.app.id, this.app.realm),
            pedia: new WOWSEncyclopedia(this.app.id, this.app.realm),
            clan: new WOWSClans(this.app.id, this.app.realm)
        }
        this.wotc = {
            user: new WOTCUser(this.app.id),
            clan: new WOTCClan(this.app.id),
            pedia: new WOTCTankopedia(this.app.id)
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

        if (!realms.includes(realm)) { warn('[WarCord] Your API Lang is not valid. Using default...'); return 'com' as AllRealms }
        if (realm == 'na') { realm = 'com' as AllRealms }

        return realm
    }
}

//Interfaces export
export { WOTClanResolve, WOTClanSearchResolve, WOTTanksResolve, WOTTopTanksResolve, WOTUserResolve, UserSearchResolve }