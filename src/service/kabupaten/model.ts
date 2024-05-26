import db from "../../config/database";
import { Optional, Model, DataTypes } from "sequelize";
import KabupatenAttributes from "./dto";
import DaftarSekolah from "../daftarSekolah/model";

interface KabupatenCreationAttributes extends Optional<KabupatenAttributes, 'id'> { };
interface KabupatenInstance extends Model<KabupatenAttributes, KabupatenCreationAttributes>, KabupatenAttributes { }

const Kabupaten = db.define<KabupatenInstance>('kabupaten', {
    id: {
        type: DataTypes.STRING(4),
        primaryKey: true,
    },
    nama: {
        type: DataTypes.STRING,
    },
    provinsi_id: {
        type: DataTypes.STRING(2),
    }
},{
    timestamps:false
})

Kabupaten.hasMany(DaftarSekolah, { foreignKey: "kabupaten_id" })
DaftarSekolah.belongsTo(Kabupaten, { foreignKey: "kabupaten_id" })

export default Kabupaten;