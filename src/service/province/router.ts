import { Request, Response } from "express";
import BaseRouter from "../routerBase";
import logic from "./logic";



class ProvinceRouter extends BaseRouter{
    routes(): void {
        this.router.get('/',async(req:Request,res:Response):Promise<Response>=>{
            const allProvince = await logic.getAllProvince()
            return res.status(allProvince.status).json(allProvince.data)
        })
    }
}

export default new ProvinceRouter().router;
