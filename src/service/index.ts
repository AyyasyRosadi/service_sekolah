import express, { Router } from "express";
import Provinsi from "./provinsi/router";
import Kabupaten from "./kabupaten/router";
import DaftarSekolah from "./daftarSekolah/router";



const serviceRouter: Router = express()

serviceRouter.use('/provinsi',Provinsi)
serviceRouter.use('/kabupaten',Kabupaten)
serviceRouter.use('/daftar-sekolah',DaftarSekolah)

export default serviceRouter;