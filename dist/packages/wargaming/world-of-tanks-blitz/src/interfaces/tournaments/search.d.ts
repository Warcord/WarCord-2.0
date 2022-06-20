export declare type StautsTournaments = 'upcoming' | 'registration_finished' | 'finished' | 'registration_started' | 'running' | 'complete';
export declare interface WOTBTournamentsSearch {
    status: StautsTournaments;
    fee: {
        currency?: string;
        amount?: number;
    };
    start_at: number;
    description: string;
    title: string;
    matches_start_at?: number;
    award: {
        currency?: string;
        amount?: number;
    };
    end_at: number;
    registration_start_at: number;
    logo: {
        preview: string;
        original: string;
    };
    registration_end_at: number;
    tournament_id: number;
    winner_award: {
        currency?: string;
        amount?: number;
    };
}
