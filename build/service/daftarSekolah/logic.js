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
const model_1 = __importDefault(require("../kabupaten/model"));
const logicBase_1 = require("../logicBase");
const model_2 = __importDefault(require("../provinsi/model"));
const model_3 = __importDefault(require("./model"));
class DaftarSekolahLogic extends logicBase_1.LogicBase {
    getAllDaftarSekolah() {
        return __awaiter(this, void 0, void 0, function* () {
            const allDaftarSekolah = yield model_3.default.findAll({
                include: [{
                        model: model_2.default,
                        attributes: ['nama']
                    }, {
                        model: model_1.default,
                        attributes: ['nama']
                    }]
            });
            return this.message(200, allDaftarSekolah);
        });
    }
    createDaftarSekolah(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield model_3.default.create({
                    kategori: data.kategori,
                    nama: data.nama,
                    alamat: data.alamat,
                    kode_pos: data.kode_pos,
                    provinsi_id: data.provinsi_id,
                    kabupaten_id: data.kabupaten_id,
                    no_telepon: data.no_telepon,
                    email: data.email,
                    facebook: data.facebook,
                    jumlah_siswa: data.jumlah_siswa
                });
                return this.message(200, { message: "Berhasil menambahkan daftar sekolah" });
            }
            catch (_a) {
                return this.message(403, { message: "error" });
            }
        });
    }
}
exports.default = new DaftarSekolahLogic;
