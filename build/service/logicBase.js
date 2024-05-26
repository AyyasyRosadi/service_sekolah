"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogicBase = void 0;
class LogicBase {
    message(status, data) {
        return { data: data, status: status };
    }
}
exports.LogicBase = LogicBase;
