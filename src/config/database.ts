import dotenv from "dotenv"
import { Sequelize } from "sequelize"

dotenv.config()

const db = new Sequelize(process.env.DB_NAME!,process.env.DB_USER!,process.env.DB_PASS!,{
    host:process.env.DB_HOST!,
    port:parseInt(process.env.DB_PORT!),
    dialect:"mysql",
    define:{
        freezeTableName:true
    },
    logging:false
})

export default db;
