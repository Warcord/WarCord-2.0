import { BaseClass } from '../../../../builds/class/base';
import { WargamingApp } from '../interfaces/app';
import { WOTUser } from '../../world-of-tanks/src/functions/user';
import { WOTTank } from '../../world-of-tanks/src/functions/tank';
import { WOTClan } from '../../world-of-tanks/src/functions/clan';
import { WOTBUser } from '../../world-of-tanks-blitz/src/functions/user';
import { WOTBTank } from '../../world-of-tanks-blitz/src/functions/tank';
import { WOTBClan } from '../../world-of-tanks-blitz/src/functions/clan';
import { WOWSUser } from '../../world-of-warships/src/functions/user';
import { WOWSShip } from '../../world-of-warships/src/functions/ship';
import { WOWSClans } from '../../world-of-warships/src/functions/clan';
import { AllRealms } from '../../../..';
declare class WargamingBase extends BaseClass implements WargamingApp {
    app: {
        id: string;
        realm?: AllRealms;
    };
    wot: {
        user: WOTUser;
        tank: WOTTank;
        clan: WOTClan;
    };
    blitz: {
        user: WOTBUser;
        tank: WOTBTank;
        clan: WOTBClan;
    };
    wows: {
        user: WOWSUser;
        ship: WOWSShip;
        clan: WOWSClans;
    };
    constructor(app_id: string, realm?: AllRealms);
}
export { WargamingBase };
