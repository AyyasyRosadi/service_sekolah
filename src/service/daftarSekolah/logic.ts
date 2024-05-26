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
                attributes: ['nama']
            }, {
                model: Kabupaten,
                attributes: ['nama']
            }]
        })
        return this.message(200, allDaftarSekolah)
    }
    public async createDaftarSekolah(data: Omit<DaftarSekolahAttributes, 'id'>): Promise<messageAttribute<defaultMessage>> {
        try {
            await DaftarSekolah.create({
                kategori: data.kategori,
                nama: data.nama,
                alamat: data.alamat,
                kode_pos: data.kode_pos,
                provinsi_id: data.provinsi_id,
                kabupaten_id: data.kabupaten_id,
                no_telepon: data.no_telepon,
                email: data.email,
                facebook: data.facebook,
                jumlah_siswa: data.jumlah_siswa
            })
            return this.message(200, { message: "Berhasil menambahkan daftar sekolah" })
        } catch {
            return this.message(403, { message: "error" })
        }
    }
}

export default new DaftarSekolahLogic;
