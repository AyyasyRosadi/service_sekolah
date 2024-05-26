import Regency from "../regency/model";
import { LogicBase, defaultMessage, messageAttribute } from "../logicBase";
import Province from "../province/model";
import SchoolListAttributes from "./dto";
import SchoolList from "./model";


class SchoolListLogic extends LogicBase {
    public async getAllSchoolList(): Promise<messageAttribute<SchoolListAttributes[]>> {
        const allSchoolList = await SchoolList.findAll({
            include: [{
                model: Province,
                attributes: ['name']
            }, {
                model: Regency,
                attributes: ['name']
            }]
        })
        return this.message(200, allSchoolList)
    }
    public async createSchoolList(data: Omit<SchoolListAttributes, 'id'>): Promise<messageAttribute<defaultMessage>> {
        try {
            await SchoolList.create({
                category: data.category,
                name: data.name,
                address: data.address,
                postal_code: data.postal_code,
                province_id: data.province_id,
                regency_id: data.regency_id,
                phone_number: data.phone_number,
                email: data.email,
                facebook: data.facebook,
                total_students: data.total_students
            })
            return this.message(200, { message: "Berhasil menambahkan daftar sekolah" })
        } catch {
            return this.message(403, { message: "error" })
        }
    }
}

export default new SchoolListLogic;
