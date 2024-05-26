import { DataTypes, Model, Optional } from "sequelize";
import db from "../../config/database"
import DaftarSekolahAttributes from "./dto";

interface DaftarSekolahCreationAttributes extends Optional<DaftarSekolahAttributes, 'id'> { };
interface DaftarSekolahInstance extends Model<DaftarSekolahAttributes, DaftarSekolahCreationAttributes>, DaftarSekolahAttributes { };

const DaftarSekolah = db.define<DaftarSekolahInstance>('daftar_sekolah', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    postal_code: {
        type: DataTypes.STRING(5),
        allowNull: false
    },
    provinsi_id: {
        type: DataTypes.STRING(2),
        allowNull: false
    },
    kabupaten_id: {
        type: DataTypes.STRING(4),
        allowNull: false
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    facebook: {
        type: DataTypes.STRING,
        allowNull: false
    },
    total_students: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})


export default DaftarSekolah