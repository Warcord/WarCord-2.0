interface WOTClanResolve {
    leader_id: number | null;
    color: string | null;
    updated_at: number | null;
    tag: string | null;
    members_count: number | null;
    description_html: string | null;
    accepts_join_requests: boolean | null;
    leader_name: string | null;
    emblems: {
        x24: any;
        x32: any;
        x64: any;
        x195: any;
        x256: any;
    };
    clan_id: number | null;
    renamed_at: number | null;
    old_tag: string | null;
    description: string | null;
    members: any[];
    old_name: string | null;
    is_clan_disbanded: boolean | null;
    motto: string | null;
    name: string | null;
    creator_name: string | null;
    created_at: number;
    creator_id: number;
}
export { WOTClanResolve };
