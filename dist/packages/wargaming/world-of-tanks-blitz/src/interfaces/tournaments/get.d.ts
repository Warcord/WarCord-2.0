interface WOTBTournamentsGet {
    status: string;
    fee: {
        currency: number | null;
        amount: number | null;
    };
    start_at: number;
    description: string;
    title: string;
    rules: string;
    matches_start_at: number | null;
    award: {
        currency: number | null;
        amount: number | null;
    };
    end_at: number;
    other_rules: string | null;
    registration_start_at: number;
    min_players_count: number;
    max_players_count: number;
    logo: {
        preview: string;
        original: string;
    };
    prize_description: string | null;
    teams: {
        max: number;
        confirmed: number | null;
        total: number;
        min: number | null;
    };
    registration_end_at: number;
    media_links: string | null;
    tournament_id: number;
    winner_award: {
        currency: string | null;
        amount: string | null;
    };
}
