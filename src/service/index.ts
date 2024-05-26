import express, { Router } from "express";
import Province from "./province/router";
import Regency from "./regency/router";
import SchoolList from "./schoolList/router";



const serviceRouter: Router = express()

serviceRouter.use('/province',Province)
serviceRouter.use('/regency',Regency)
serviceRouter.use('/school-list',SchoolList)

export default serviceRouter;