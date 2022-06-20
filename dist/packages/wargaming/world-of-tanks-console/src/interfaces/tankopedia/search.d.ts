interface WOTCTank {
    "description": string;
    "short_name": string;
    "price_gold": number;
    "next_tanks": any | null;
    "price_credit": number;
    "nation": string;
    "is_premium": boolean;
    "images": {
        "big_icon": string;
    };
    "tag": string;
    "prices_xp": number | null;
    "era": string;
    "tier": number;
    "tank_id": number;
    "type": string;
    "name": string;
}
export { WOTCTank };
