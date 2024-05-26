import SchoolList from "../service/schoolList/model";
import Regency from "../service/regency/model";
import Province from "../service/province/model";
import db from "./database";


const Synchronize = async()=>{
    try{
        await db.authenticate()
        await Province.sync({alter:true})
        await Regency.sync({alter:true})
        await SchoolList.sync({alter:true})
    }catch(r){
        console.log(r)
        return r 
    }
}

export default Synchronize