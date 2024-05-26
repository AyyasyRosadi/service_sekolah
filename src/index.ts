import express, { Application, json } from "express";
import cors from "cors";
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";
import Synchronize from "./config/synchronize";
import router from "./service/index"

const app: Application = express()
const port: number = 9897

app.use(json())
app.use(cors())
app.use(morgan('dev'))
app.use(compression())
app.use(helmet())

app.use(router)

app.listen(port, async () => {
    try {
        await Synchronize()
        console.log('hello iam running on port', port)
    } catch (r) {
        console.log(r)
    }
})