import { WargamingBase } from './packages/wargaming/build/class/base'
import { WOTClanResolve } from './packages/wargaming/world-of-tanks/src/interfaces/clan/clan-resolve'
import { WOTClanSearchResolve } from './packages/wargaming/world-of-tanks/src/interfaces/clan/search-resolve'
import { WOTTanksResolve } from './packages/wargaming/world-of-tanks/src/interfaces/tank/tank-resolve'
import { WOTTopTanksResolve } from './packages/wargaming/world-of-tanks/src/interfaces/tank/top-tanks'
import { WOTUserResolve } from './packages/wargaming/world-of-tanks/src/interfaces/user/user-return'
import { UserSearchResolve } from './packages/wargaming/build/interfaces/search-resolve'
import { BaseClass } from './builds/class/base'
import { warn } from 'console'

declare type AllRealms = | 'na' | 'eu' | 'ru' | 'asia'

class WarCord extends BaseClass {

    app: {
        id: string,
        realm?: AllRealms
    }
    wg: WargamingBase

    /**
     * @param {string} app_id The ID of your WarGaming App.
     * @param {string} [realm=na] The followed types are an option: .
     */
    constructor(app_id: string, realm?: AllRealms) {
        super(app_id)
        this.app = { id: this.idChecker(app_id), realm: this.realmChecker(realm) }
        this.wg = new WargamingBase(this.idChecker(app_id), this.realmChecker(realm))
    }

    private idChecker(id: string): string {
        if (!id || id.length <= 0) {
            warn('[WarCord] Your API ID is empty. (using Wargaming API)')
            return ''
        } else {
            return id
        }
    }

    private realmChecker(realm: AllRealms | undefined): AllRealms {
        if (!realm) return 'com' as AllRealms
        const langs = [
            'na',
            'eu',
            'ru',
            'asia'
        ]

        if (!langs.includes(realm)) { warn('[WarCord] Your API Lang is not valid. (using Wargaming API)'); return 'com' as AllRealms }
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