import DaftarSekolah from "../service/daftarSekolah/model";
import Kabupaten from "../service/kabupaten/model";
import Provinsi from "../service/provinsi/model";
import db from "./database";


const Synchronize = async()=>{
    try{
        await db.authenticate()
        await Provinsi.sync({alter:true})
        await Kabupaten.sync({alter:true})
        await DaftarSekolah.sync({alter:true})
    }catch(r){
        console.log(r)
        return r 
    }
}

export default Synchronize