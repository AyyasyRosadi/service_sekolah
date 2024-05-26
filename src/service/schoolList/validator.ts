import { check } from "express-validator";
import Validator from "../../middleware/validator";


class SchoolListValidator extends Validator {
    public create = () => [
        check('category').isString().notEmpty().withMessage('kategori tidak boleh kosong'),
        check('name').isString().notEmpty().withMessage('nama tidak boleh kosong'),
        check('address').isString().notEmpty().withMessage('alamat tidak boleh kosong'),
        check('postal_code').isString().isLength({ min: 5, max: 5 }).notEmpty().withMessage('kode pos tidak boleh kosong'),
        check('province_id').isString().notEmpty().withMessage('provinsi tidak boleh kosong'),
        check('regency_id').isString().notEmpty().withMessage('kabupaten tidak boleh kosong'),
        check('phone_number').isString().notEmpty().withMessage('no telepon tidak boleh kosong'),
        check('email').isString().notEmpty().withMessage('email tidak boleh kosong'),
        check('facebook').isString().notEmpty().withMessage('facebook tidak boleh kosong'),
        check('total_students').isInt().notEmpty().withMessage('jumlah siswa tidak boleh kosong'),
        this.validate
    ]
}

export default new SchoolListValidator;