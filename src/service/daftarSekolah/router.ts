import { Request, Response } from "express";
import BaseRouter from "../routerBase";
import logic from "./logic";
import validator from "./validator"



class DaftarSekolahRouter extends BaseRouter {
    routes(): void {
        this.router.get('/', async (req: Request, res: Response): Promise<Response> => {
            const allDaftarSekolah = await logic.getAllDaftarSekolah()
            return res.status(allDaftarSekolah.status).json(allDaftarSekolah.data)
        })
        this.router.post('/', 
        validator.create(),
        async (req: Request, res: Response): Promise<Response> => {
            const createDaftarSekolah = await logic.createDaftarSekolah(req.body)
            return res.status(createDaftarSekolah.status).json(createDaftarSekolah.data)
        })
    }
}

export default new DaftarSekolahRouter().router;

