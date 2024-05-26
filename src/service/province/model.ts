import db from "../../config/database";
import { Optional, Model, DataTypes } from "sequelize";
import ProvinceAttributes from "./dto";
import Regency from "../regency/model";
import SchoolList from "../schoolList/model";

interface ProvinceCreationAttributes extends Optional<ProvinceAttributes, 'id'> { };
interface ProvinceInstance extends Model<ProvinceAttributes, ProvinceCreationAttributes>, ProvinceAttributes { };

const Province = db.define<ProvinceInstance>('province', {
    id: {
        type: DataTypes.STRING(2),
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
    }
},{
    timestamps:false
})

Province.hasMany(Regency, { foreignKey: "province_id" })
Regency.belongsTo(Province, { foreignKey: "province_id" })
Province.hasMany(SchoolList, { foreignKey: "province_id" })
SchoolList.belongsTo(Province, { foreignKey: "province_id" })

export default Province