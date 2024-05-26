import express, { Application, json } from "express";
import cors from "cors";
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";
import routes from "./service";


const app: Application = express();

app.use(json())
app.use(cors())
app.use(morgan('dev'))
app.use(compression())
app.use(helmet())

app.use(routes)

export default app