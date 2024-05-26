"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../config/database"));
const sequelize_1 = require("sequelize");
const model_1 = __importDefault(require("../kabupaten/model"));
const model_2 = __importDefault(require("../daftarSekolah/model"));
;
;
const Provinsi = database_1.default.define('provinsi', {
    id: {
        type: sequelize_1.DataTypes.STRING(2),
        primaryKey: true,
    },
    nama: {
        type: sequelize_1.DataTypes.STRING,
    }
}, {
    timestamps: false
});
Provinsi.hasMany(model_1.default, { foreignKey: "provinsi_id" });
model_1.default.belongsTo(Provinsi, { foreignKey: "provinsi_id" });
Provinsi.hasMany(model_2.default, { foreignKey: "provinsi_id" });
model_2.default.belongsTo(Provinsi, { foreignKey: "provinsi_id" });
exports.default = Provinsi;
