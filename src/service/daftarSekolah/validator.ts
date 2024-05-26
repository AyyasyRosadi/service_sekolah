import { check } from "express-validator";
import Validator from "../../middleware/validator";


class DaftarSekolahValidator extends Validator{
    public create = ()=>[
        check('kategori').isString().notEmpty().withMessage('kategori tidak boleh kosong'),
        check('nama').isString().notEmpty().withMessage('nama tidak boleh kosong'),
        check('alamat').isString().notEmpty().withMessage('alamat tidak boleh kosong'),
        check('kode_pos').isString().notEmpty().withMessage('kode pos tidak boleh kosong'),
        check('provinsi_id').isString().notEmpty().withMessage('provinsi tidak boleh kosong'),
        check('kabupaten_id').isString().notEmpty().withMessage('kabupaten tidak boleh kosong'),
        check('no_telepon').isString().notEmpty().withMessage('no telepon tidak boleh kosong'),
        check('email').isString().notEmpty().withMessage('email tidak boleh kosong'),
        check('facebook').isString().notEmpty().withMessage('facebook tidak boleh kosong'),
        check('jumlah_siswa').isString().notEmpty().withMessage('jumlah siswa tidak boleh kosong'),
        this.validate
    ]
}

export default new DaftarSekolahValidator;