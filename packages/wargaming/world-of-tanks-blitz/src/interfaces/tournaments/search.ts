export declare interface WOTBTournamentsSearch {
    status: string,
    fee: {
        currency?: string,
        amount?: number
    },
    start_at: number,
    description: string,
    title: string,
    matches_start_at?: number,
    award: {
        currency?: string,
        amount?: number
    },
    end_at: number,
    registration_start_at: number,
    logo: {
        preview: string,
        original: string
    },
    registration_end_at: number,
    tournament_id: number,
    winner_award: {
        currency?: string,
        amount?: number
    }
}