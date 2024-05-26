import { Request, Response } from "express";
import BaseRouter from "../routerBase";
import logic from "./logic";



class KabupatenRouter extends BaseRouter{
    routes(): void {
        this.router.get('/',async(req:Request,res:Response):Promise<Response>=>{
            const getAllKabupaten = await logic.getAllKabupatenByPovinsiId(Number(req.query?.provinsi_id))
            return res.status(getAllKabupaten.status).json(getAllKabupaten.data)
        })
    }
}

export default new KabupatenRouter().router;