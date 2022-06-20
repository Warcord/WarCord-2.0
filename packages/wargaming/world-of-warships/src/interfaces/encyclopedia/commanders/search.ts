interface WOWSPediaCommandersSearch {
    base_training_level: number,
    first_names: string[],
    gold_training_hire_price: number,
    gold_retraining_price: number,
    subnation_index: number,
    icons: [
        {
            1: string | null,
            8: string | null,
            14: string | null
        }
    ],
    base_training_hire_price: number,
    money_training_hire_price: number,
    nation: string,
    last_names: string[],
    money_retraining_price: number | null,
    money_training_level: number | null,
    is_retrainable: boolean,
    gold_training_level: number
}

export { WOWSPediaCommandersSearch }