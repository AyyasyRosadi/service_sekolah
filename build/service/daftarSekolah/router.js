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
const routerBase_1 = __importDefault(require("../routerBase"));
const logic_1 = __importDefault(require("./logic"));
const validator_1 = __importDefault(require("./validator"));
class DaftarSekolahRouter extends routerBase_1.default {
    routes() {
        this.router.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const allDaftarSekolah = yield logic_1.default.getAllDaftarSekolah();
            return res.status(allDaftarSekolah.status).json(allDaftarSekolah.data);
        }));
        this.router.post('/', validator_1.default.create(), (req, res) => __awaiter(this, void 0, void 0, function* () {
            const createDaftarSekolah = yield logic_1.default.createDaftarSekolah(req.body);
            return res.status(createDaftarSekolah.status).json(createDaftarSekolah.data);
        }));
    }
}
exports.default = new DaftarSekolahRouter().router;
