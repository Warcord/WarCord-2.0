import { BaseClass } from "../../../../../builds/class/base";
import { AcceptedLangs } from "../interfaces/general/types";
import { WOTCTank } from "../interfaces/tankopedia/search";
declare type AcceptedNations = "italy" | "usa" | "ussr" | "france" | "germany" | "uk" | "japan";
export declare class WOTCTankopedia extends BaseClass {
    private app;
    private errorController;
    constructor(app_id: string);
    /**
     * @description Method returns list of available vehicles.
     * @param options Options Object
     * @property {?AcceptedLangs | AcceptedLangs[]} options.language Localization language.
     * @property {?AcceptedNations | AcceptedNations[]} options.nation Nation.
     * @property {?number | number[]} options.tank_id Vehicle ID.
     * @property {?number | number[]} options.tier Tier.
     * @returns {Promise<WOTCTank[] | void>} An array with search data.
     */
    search(options?: {
        language?: AcceptedLangs;
        nation?: AcceptedNations | AcceptedNations[];
        tank_id?: number | number[];
        tier?: number | number[];
    }): Promise<WOTCTank[] | void>;
}
export {};
