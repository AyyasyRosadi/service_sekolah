import { Request, Response } from "express";
import BaseRouter from "../routerBase";
import logic from "./logic";
import validator from "./validator"



class SchoolListRouter extends BaseRouter {
    routes(): void {
        this.router.get('/', async (req: Request, res: Response): Promise<Response> => {
            const allSchoolList = await logic.getAllSchoolList()
            return res.status(allSchoolList.status).json(allSchoolList.data)
        })
        this.router.post('/', 
        validator.create(),
        async (req: Request, res: Response): Promise<Response> => {
            const createSchoolList = await logic.createSchoolList(req.body)
            return res.status(createSchoolList.status).json(createSchoolList.data)
        })
    }
}

export default new SchoolListRouter().router;

