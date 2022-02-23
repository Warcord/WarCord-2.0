interface WOTBUserResolve {

    last_battle_time: number | null,
    account_id: number | null,
    created_at: number | null,
    statistics: {
        clan: {
            spotted: number | null,
            max_frags_tank_id: number | null,
            hits: number | null,
            frags: number | null,
            max_xp: number | null,
            max_xp_tank_id: number | null,
            wins: number | null,
            losses: number | null,
            capture_points: number | null,
            battles: number | null,
            damage_dealt: number | null,
            damage_received: number | null,
            max_frags: number | null,
            shots: number | null,
            frags8p: number | null,
            xp: number | null,
            win_and_survived: number | null,
            survived_battles: number | null,
            dropped_capture_points: number | null
        },
        all: {
            spotted: number | null,
            max_frags_tank_id: number | null,
            hits: number | null,
            frags: number | null,
            max_xp: number | null,
            max_xp_tank_id: number | null,
            wins: number | null,
            losses: number | null,
            capture_points: number | null,
            battles: number | null,
            damage_dealt: number | null,
            damage_received: number | null,
            max_frags: number | null,
            shots: number | null,
            frags8p: number | null,
            xp: number | null,
            win_and_survived: number | null,
            survived_battles: number | null,
            dropped_capture_points: number | null
        }
    },
    nickname: string | null
}

export { WOTBUserResolve }