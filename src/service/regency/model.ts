import db from "../../config/database";
import { Optional, Model, DataTypes } from "sequelize";
import RegencyAttributes from "./dto";
import SchoolList from "../schoolList/model";

interface RegencyCreationAttributes extends Optional<RegencyAttributes, 'id'> { };
interface RegencyInstance extends Model<RegencyAttributes, RegencyCreationAttributes>, RegencyAttributes { }

const Regency = db.define<RegencyInstance>('regency', {
    id: {
        type: DataTypes.STRING(4),
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    province_id: {
        type: DataTypes.STRING(2),
    }
}, {
    timestamps: false
})

Regency.hasMany(SchoolList, { foreignKey: "regency_id" })
SchoolList.belongsTo(Regency, { foreignKey: "regency_id" })

export default Regency;