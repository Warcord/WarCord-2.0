import { WOTBTournamentsSearch } from '../interfaces/tournaments/search';
import { BaseClass } from '../../../../../builds/class/base';
import { AllRealms } from '../../../../..';
import { StautsTournaments } from '../interfaces/tournaments/search';
import { WOTBGetTeam } from '../interfaces/tournaments/team';
import { WOTBTourResult } from '../interfaces/tournaments/result';
export declare type AcceptedLanguagesWOTBTournaments = 'en' | 'es' | 'pt';
/**
 * @forming team roster is not yet confirmed
 * @confirmed team roster is confirmed
 * @disqualified team is disqualified
 */
export declare type StatusTeams = 'forming' | 'confirmed' | 'disqualified';
declare class WOTBTournaments extends BaseClass {
    private app;
    constructor(app_id: string, realm?: AllRealms);
    /**
     * @description Search tournaments in API.
     * @param {Object} options Options Object
     * @property {AcceptedLanguagesWOTBTournaments | string} [options.language="en"] Localization language.
     * @property {number} [options.limit=10] Number of returned entries. Min value is 1. Maximum value: 25.
     * @property {string} options.search First letters in tournament name for search. Minimum length: 2 characters. Maximum length: 50 characters.
     * @property {StautsTournaments | StautsTournaments[]} options.status Tournament status.
     * @returns {Promise<WOTBTournamentsSearch[] | null>} The search data.
     */
    find(options?: {
        lang?: AcceptedLanguagesWOTBTournaments;
        limit?: number;
        search?: string;
        status?: StautsTournaments | StautsTournaments[];
    }): Promise<WOTBTournamentsSearch[] | null>;
    /**
     * @description Get a tournamente by ID.
     * @param {string} tourID Tournament ID that can be retrieved from the {@link find} method.
     * @param {Object} options The Options Object
     * @property {AcceptedLanguagesWOTBTournaments | string} options.language Localization language.
     * @returns {Promise<WOTBTournamentsGet | null>} The tournament data.
     */
    get(tourID: string, options?: {
        language?: AcceptedLanguagesWOTBTournaments;
    }): Promise<WOTBTournamentsGet | null>;
    /**
     * @description Used to get the tournament result.
     * @param tourID Tournament ID that can be retrieved from the {@link find} method.
     * @param {Object} options Options Object
     * @property {AcceptedLanguagesWOTBTournaments} language Localization language.
     * @property {number} [limit=10] Number of returned entries.
     * @property {string} team_id Team ID.
     * @returns {Promise<WOTBTourResult | null>} Tournament Result.
     */
    getResult(tourID: string, options?: {
        language?: AcceptedLanguagesWOTBTournaments;
        limit?: number;
        team_id?: string | string[];
    }): Promise<WOTBTourResult | null>;
    readonly teams: {
        /**
         * @description Get the teams of an tournament.
         * @param tourID ID of Tournament.
         * @param {Object} options The options Object.
         * @property {string} options.account_id ID of the account that belongs to the team.
         * @property {string} options.clan_id ID of the clan that owns the team.
         * @property {AcceptedLanguagesWOTBTournaments | string} [options.language="en"] Localization language.
         * @property {number} [options.limit=10] Number of returned entries. Min value is 1. Maximum value: 100.
         * @property {string} options.search First letters in team name for search. Minimum length: 2 characters. Maximum length: 50 characters.
         * @property {StatusTeams | StatusTeams[]} options.status Team status.
         * @property {number | number[]} options.team Team ID. Maximum limit: 25.
         * @returns {Promise<WOTBGetTeam | null>} The team data.
         */
        get: (tourID: string, options?: {
            account_id?: string | undefined;
            clan_id?: string | undefined;
            language?: AcceptedLanguagesWOTBTournaments | undefined;
            limit?: number | undefined;
            search?: string | undefined;
            status?: StatusTeams | StatusTeams[] | undefined;
            team?: number | number[] | undefined;
        } | undefined) => Promise<WOTBGetTeam | null>;
    };
}
export { WOTBTournaments };
