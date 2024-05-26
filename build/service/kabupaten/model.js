"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../config/database"));
const sequelize_1 = require("sequelize");
const model_1 = __importDefault(require("../daftarSekolah/model"));
;
const Kabupaten = database_1.default.define('kabupaten', {
    id: {
        type: sequelize_1.DataTypes.STRING(4),
        primaryKey: true,
    },
    nama: {
        type: sequelize_1.DataTypes.STRING,
    },
    provinsi_id: {
        type: sequelize_1.DataTypes.STRING(2),
    }
}, {
    timestamps: false
});
Kabupaten.hasMany(model_1.default, { foreignKey: "kabupaten_id" });
model_1.default.belongsTo(Kabupaten, { foreignKey: "kabupaten_id" });
exports.default = Kabupaten;
