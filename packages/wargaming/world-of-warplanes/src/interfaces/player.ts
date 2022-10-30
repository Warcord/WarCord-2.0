export interface FindPlayer {
    nickname: string,
    account_id: number
}

export interface GetPlayer {
    client_language: string | null,
    last_battle_time: number | null,
    account_id: number | null,
    obt_games_played: number | null,
    created_at: number | null,
    updated_at: number | null,
    private: null,
    global_rating: number | null,
    statistics: {
        all: {
            avg_xp: number | null,
            bombers: {
                damage_dealt: number | null,
                assisted: number | null,
                max_killed: number | null,
                max_damage_dealt: number | null,
                killed: number | null
            },
            draws: number | null,
            eff_by_plane_type: {
                fighterHeavy: number | null,
                navy: number | null,
                assault: number | null,
                bomber: number | null,
                fighter: number | null
            },
            ground_objects: {
                avg_killed: number | null,
                avg_killed_per_flight: number | null,
                assisted: number | null,
                max_killed: number | null,
                killed: number | null,
                damage_dealt: number | null,
                max_damage_dealt: number | null
            },
            deaths: number | null,
            wins: number | null,
            flights_by_plane_type: {
                fighterHeavy: number | null,
                navy: number | null,
                assault: number | null,
                bomber: number | null,
                fighter: number | null
            },
            losses: number | null,
            battle_score: number | null,
            battles: number | null,
            zone_captures: number | null,
            players: {
                avg_killed: number | null,
                assisted: number | null,
                max_killed: number | null,
                killed: number | null,
                damage_dealt: number | null,
                max_damage_dealt: number | null,
                killed_in_defence: number | null
            },
            flights: number | null,
            defenders_and_bombers: {
                avg_killed: number | null
            },
            avg_battle_score: number | null,
            defenders: {
                damage_dealt: number | null,
                assisted: number | null,
                max_killed: number | null,
                max_damage_dealt: number | null,
                killed: number | null
            },
            ranks_by_plane_type: {
                fighterHeavy: number | null,
                navy: number | null,
                assault: number | null,
                bomber: number | null,
                fighter: number | null
            },
            max_battles_score: number | null,
            flight_time: number | null,
            air_targets: {
                avg_killed_per_flight: number | null,
                max_damage_dealt: number | null
            }
        }
    },
    nickname: string,
    cbt_games_played: number | null
}