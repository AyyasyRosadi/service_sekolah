import Kabupaten from "../kabupaten/model";
import { LogicBase, defaultMessage, messageAttribute } from "../logicBase";
import Provinsi from "../provinsi/model";
import DaftarSekolahAttributes from "./dto";
import DaftarSekolah from "./model";


class DaftarSekolahLogic extends LogicBase {
    public async getAllDaftarSekolah(): Promise<messageAttribute<DaftarSekolahAttributes[]>> {
        const allDaftarSekolah = await DaftarSekolah.findAll({
            include: [{
                model: Provinsi,
                attributes: ['name']
            }, {
                model: Kabupaten,
                attributes: ['name']
            }]
        })
        return this.message(200, allDaftarSekolah)
    }
    public async createDaftarSekolah(data: Omit<DaftarSekolahAttributes, 'id'>): Promise<messageAttribute<defaultMessage>> {
        try {
            await DaftarSekolah.create({
                category: data.category,
                name: data.name,
                address: data.address,
                postal_code: data.postal_code,
                provinsi_id: data.provinsi_id,
                kabupaten_id: data.kabupaten_id,
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

export default new DaftarSekolahLogic;
