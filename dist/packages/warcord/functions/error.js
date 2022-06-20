"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarCordError = void 0;
const process_1 = require("process");
class WarCordError {
    createError(send, type) {
        let name = '';
        type == "WARCORD" ? name = type : name = "WarGamingApiError";
        send ? send : send = "None.";
        if (type == "API") {
            let { field, message, code, value } = send;
            throw Error(`[${name}] ${message} - Code: ${code} (${field}: ${value})`);
        }
        throw Error(`[${name}] ${send}`);
    }
    createWarn(message, type) {
        let name = '';
        type == "WARCORD" ? name = type : name = "WarGamingApiError";
        message ? message : message = "None.";
        throw (0, process_1.emitWarning)(`[${name}] ${message}`);
    }
}
exports.WarCordError = WarCordError;
