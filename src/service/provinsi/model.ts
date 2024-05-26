import db from "../../config/database";
import { Optional, Model, DataTypes } from "sequelize";
import ProvinsiAttributes from "./dto";
import Kabupaten from "../kabupaten/model";
import DaftarSekolah from "../daftarSekolah/model";

interface ProvinsiCreationAttributes extends Optional<ProvinsiAttributes, 'id'> { };
interface ProvinsiInstance extends Model<ProvinsiAttributes, ProvinsiCreationAttributes>, ProvinsiAttributes { };

const Provinsi = db.define<ProvinsiInstance>('provinsi', {
    id: {
        type: DataTypes.STRING(2),
        primaryKey: true,
    },
    nama: {
        type: DataTypes.STRING,
    }
},{
    timestamps:false
})

Provinsi.hasMany(Kabupaten, { foreignKey: "provinsi_id" })
Kabupaten.belongsTo(Provinsi, { foreignKey: "provinsi_id" })
Provinsi.hasMany(DaftarSekolah, { foreignKey: "provinsi_id" })
DaftarSekolah.belongsTo(Provinsi, { foreignKey: "provinsi_id" })

export default Provinsi