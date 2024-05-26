import { DataTypes, Model, Optional } from "sequelize";
import db from "../../config/database"
import DaftarSekolahAttributes from "./dto";

interface DaftarSekolahCreationAttributes extends Optional<DaftarSekolahAttributes,'id'>{};
interface DaftarSekolahInstance extends Model<DaftarSekolahAttributes,DaftarSekolahCreationAttributes>,DaftarSekolahAttributes{};

const DaftarSekolah = db.define<DaftarSekolahInstance>('daftar_sekolah',{
    id:{
        type:DataTypes.STRING,
        primaryKey:true,
        defaultValue:DataTypes.UUIDV4
    },
    kategori:{
        type:DataTypes.STRING,
        allowNull:false
    },
    nama:{
        type:DataTypes.STRING,
        allowNull:false
    },
    alamat:{
        type:DataTypes.STRING,
        allowNull:false
    },
    kode_pos:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    provinsi_id:{
        type:DataTypes.STRING(2),
        allowNull:false
    },
    kabupaten_id:{
        type:DataTypes.STRING(4),
        allowNull:false
    },
    no_telepon:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    facebook:{
        type:DataTypes.STRING,
        allowNull:false
    },
    jumlah_siswa:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})


export default DaftarSekolah