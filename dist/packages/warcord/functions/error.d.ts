declare type AcceptedTypes = "WARCORD" | "API";
interface APIError {
    field: string;
    message: string;
    code: number;
    value: string;
}
export declare class WarCordError {
    createError(send: string | APIError, type: AcceptedTypes): void;
    createWarn(message: string, type: AcceptedTypes): void;
}
export {};
