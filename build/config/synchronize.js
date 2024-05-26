"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = __importDefault(require("../service/daftarSekolah/model"));
const model_2 = __importDefault(require("../service/kabupaten/model"));
const model_3 = __importDefault(require("../service/provinsi/model"));
const database_1 = __importDefault(require("./database"));
const Synchronize = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield database_1.default.authenticate();
        yield model_3.default.sync({ alter: true });
        yield model_2.default.sync({ alter: true });
        yield model_1.default.sync({ alter: true });
    }
    catch (r) {
        console.log(r);
        return r;
    }
});
exports.default = Synchronize;
