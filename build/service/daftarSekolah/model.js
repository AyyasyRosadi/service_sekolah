"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../config/database"));
;
;
const DaftarSekolah = database_1.default.define('daftar_sekolah', {
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4
    },
    kategori: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    nama: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    alamat: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    kode_pos: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    provinsi_id: {
        type: sequelize_1.DataTypes.STRING(2),
        allowNull: false
    },
    kabupaten_id: {
        type: sequelize_1.DataTypes.STRING(4),
        allowNull: false
    },
    no_telepon: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    facebook: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    jumlah_siswa: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
});
exports.default = DaftarSekolah;
