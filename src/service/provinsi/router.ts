import { Request, Response } from "express";
import BaseRouter from "../routerBase";
import logic from "./logic";



class ProvinsiRouter extends BaseRouter{
    routes(): void {
        this.router.get('/',async(req:Request,res:Response):Promise<Response>=>{
            const allProvinsi = await logic.getAllProvinsi()
            return res.status(allProvinsi.status).json(allProvinsi.data)
        })
    }
}

export default new ProvinsiRouter().router;
