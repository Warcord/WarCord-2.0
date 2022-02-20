interface WOWSUserResolve {
    last_battle_time: number | null;
    account_id: number | null;
    leveling_tier: number | null;
    created_at: number | null;
    leveling_points: number | null;
    updated_at: number | null;
    hidden_profile: boolean | null;
    logout_at: number | null;
    statistics: {
        distance: number | null;
        battles: number | null;
        pvp: {
            max_xp: number | null;
            damage_to_buildings: number | null;
            main_battery: {
                max_frags_battle: number | null;
                frags: number | null;
                hits: number | null;
                max_frags_ship_id: number | null;
                shots: number | null;
            };
            max_ships_spotted_ship_id: number | null;
            max_damage_scouting: number | null;
            art_agro: number | null;
            max_xp_ship_id: number | null;
            ships_spotted: number | null;
            second_battery: {
                max_frags_battle: number | null;
                frags: number | null;
                hits: number | null;
                max_frags_ship_id: number | null;
                shots: number | null;
            };
            max_frags_ship_id: number | null;
            xp: number | null;
            survived_battles: number | null;
            dropped_capture_points: number | null;
            max_damage_dealt_to_buildings: number | null;
            torpedo_agro: number | null;
            draws: number | null;
            control_captured_points: number | null;
            battles_since_510: number | null;
            max_total_agro_ship_id: number | null;
            planes_killed: number | null;
            battles: number | null;
            max_ships_spotted: number | null;
            max_suppressions_ship_id: number | null;
            survived_wins: number | null;
            frags: number | null;
            damage_scouting: number | null;
            max_total_agro: number | null;
            max_frags_battle: number | null;
            capture_points: number | null;
            ramming: {
                max_frags_battle: number | null;
                frags: number | null;
                max_frags_ship_id: number | null;
            };
            suppressions_count: number | null;
            max_suppressions_count: number | null;
            torpedoes: {
                max_frags_battle: number | null;
                frags: number | null;
                hits: number | null;
                max_frags_ship_id: number | null;
                shots: number | null;
            };
            max_planes_killed_ship_id: number | null;
            aircraft: {
                max_frags_battle: number | null;
                frags: number | null;
                max_frags_ship_id: number | null;
            };
            team_capture_points: number | null;
            control_dropped_points: number | null;
            max_damage_dealt: number | null;
            max_damage_dealt_to_buildings_ship_id: number | null;
            max_damage_dealt_ship_id: number | null;
            wins: number | null;
            losses: number | null;
            damage_dealt: number | null;
            max_planes_killed: number | null;
            max_scouting_damage_ship_id: number | null;
            team_dropped_capture_points: number | null;
            battles_since_512: number | null;
        };
    };
    nickname: string | null;
    stats_updated_at: number | null;
}
export { WOWSUserResolve };
