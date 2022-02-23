import { WOTUserResolve } from './user-return';
interface QueryResult {
    status: string;
    meta: {
        count: number;
    };
    data: WOTUserResolve[];
}
export { QueryResult };
