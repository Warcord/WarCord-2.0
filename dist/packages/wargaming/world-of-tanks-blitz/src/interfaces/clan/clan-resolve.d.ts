interface WOTBClanResolve {
    recruiting_options: {
        vehicles_level: number | null;
        wins_ratio: number | null;
        average_battles_per_day: number | null;
        battles: number | null;
        average_damage: number | null;
    };
    members_count: number | null;
    name: string | null;
    creator_name: string | null;
    clan_id: number | null;
    created_at: number | null;
    updated_at: number | null;
    leader_name: string | null;
    members_ids: number[];
    recruiting_policy: string | null;
    tag: string | null;
    is_clan_disbanded: boolean;
    old_name: string | null;
    emblem_set_id: number | null;
    creator_id: number | null;
    motto: string | null;
    renamed_at: number | null;
    old_tag: string | null;
    leader_id: number | null;
    description: string | null;
}
export { WOTBClanResolve };
