"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validator_1 = __importDefault(require("../../middleware/validator"));
class DaftarSekolahValidator extends validator_1.default {
    constructor() {
        super(...arguments);
        this.create = () => [
            (0, express_validator_1.check)('kategori').isString().notEmpty().withMessage('kategori tidak boleh kosong'),
            (0, express_validator_1.check)('nama').isString().notEmpty().withMessage('nama tidak boleh kosong'),
            (0, express_validator_1.check)('alamat').isString().notEmpty().withMessage('alamat tidak boleh kosong'),
            (0, express_validator_1.check)('kode_pos').isString().notEmpty().withMessage('kode pos tidak boleh kosong'),
            (0, express_validator_1.check)('provinsi_id').isString().notEmpty().withMessage('provinsi tidak boleh kosong'),
            (0, express_validator_1.check)('kabupaten_id').isString().notEmpty().withMessage('kabupaten tidak boleh kosong'),
            (0, express_validator_1.check)('no_telepon').isString().notEmpty().withMessage('no telepon tidak boleh kosong'),
            (0, express_validator_1.check)('email').isString().notEmpty().withMessage('email tidak boleh kosong'),
            (0, express_validator_1.check)('facebook').isString().notEmpty().withMessage('facebook tidak boleh kosong'),
            (0, express_validator_1.check)('jumlah_siswa').isString().notEmpty().withMessage('jumlah siswa tidak boleh kosong'),
            this.validate
        ];
    }
}
exports.default = new DaftarSekolahValidator;
