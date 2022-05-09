import { BaseClass } from '../../../../builds/class/base'
import { WargamingApp } from '../interfaces/app'

import { WOTUser } from '../../world-of-tanks/src/functions/user'
import { WOTTank } from '../../world-of-tanks/src/functions/tank'
import { WOTClan } from '../../world-of-tanks/src/functions/clan'

import { WOTBUser } from '../../world-of-tanks-blitz/src/functions/user'
import { WOTBTank } from '../../world-of-tanks-blitz/src/functions/tank'
import { WOTBClan } from '../../world-of-tanks-blitz/src/functions/clan'

import { WOWSUser } from '../../world-of-warships/src/functions/user'
import { WOWSShip } from '../../world-of-warships/src/functions/ship'
import { WOWSClans } from '../../world-of-warships/src/functions/clan'
import { AllRealms } from '../../../..'
class WargamingBase extends BaseClass implements WargamingApp {

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

    constructor(app_id: string, realm?: AllRealms) {
        super(app_id)
        this.app = { id: app_id, realm: realm }
        this.wot = {
            user: new WOTUser(app_id, realm),
            tank: new WOTTank(app_id, realm),
            clan: new WOTClan(app_id, realm)
        }
        this.blitz = {
            user: new WOTBUser(app_id, realm),
            tank: new WOTBTank(app_id, realm),
            clan: new WOTBClan(app_id, realm)
        }
        this.wows = {
            user: new WOWSUser(app_id, realm),
            ship: new WOWSShip(app_id, realm),
            clan: new WOWSClans(app_id, realm)
        }
    }
}

export { WargamingBase }