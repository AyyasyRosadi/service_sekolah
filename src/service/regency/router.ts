import { Request, Response } from "express";
import BaseRouter from "../routerBase";
import logic from "./logic";



class RegencyRouter extends BaseRouter{
    routes(): void {
        this.router.get('/',async(req:Request,res:Response):Promise<Response>=>{
            const getAllRegency = await logic.getAllRegencyByProvinceId(Number(req.query?.province_id))
            return res.status(getAllRegency.status).json(getAllRegency.data)
        })
    }
}

export default new RegencyRouter().router;