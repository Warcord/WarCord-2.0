interface WOTCClanGet {
    creator_id: number;
    members_count: number;
    description: string;
    creator_name: string;
    color: string;
    clan_id: number;
    created_at: number;
    updated_at: number;
    leader_name: string;
    members_ids: number[];
    members?: {
        role: string;
        joined_at: number;
        account_id: number;
        account_name: string;
    }[];
    recruiting_policy: string;
    tag: string;
    emblem_set_id: number;
    is_clan_disbanded: boolean;
    old_name: string;
    joining_options: {
        wins_ratio: number;
        battles_per_day: number;
        damage_per_battle: number;
        battles_survived: number;
        hits_ratio: number;
        battles: number;
        xp_per_battle: number;
    };
    leader_id: number;
    motto: string;
    renamed_at: number;
    old_tag: string;
    name: string;
}
