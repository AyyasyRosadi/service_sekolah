import { DataTypes, Model, Optional } from "sequelize";
import db from "../../config/database"
import SchoolListAttributes from "./dto";

interface SchoolListCreationAttributes extends Optional<SchoolListAttributes, 'id'> { };
interface SchoolListInstance extends Model<SchoolListAttributes, SchoolListCreationAttributes>, SchoolListAttributes { };

const SchoolList = db.define<SchoolListInstance>('school_list', {
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
    province_id: {
        type: DataTypes.STRING(2),
        allowNull: false
    },
    regency_id: {
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


export default SchoolList