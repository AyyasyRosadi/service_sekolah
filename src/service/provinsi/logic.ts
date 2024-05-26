import { LogicBase, messageAttribute } from "../logicBase";
import ProvinsiAttributes from "./dto";
import Provinsi from "./model";


class ProvinsiLogic extends LogicBase {
    public async getAllProvinsi(): Promise<messageAttribute<ProvinsiAttributes[]>> {
        const allProvinsi = await Provinsi.findAll()
        return this.message(200, allProvinsi)
    }
}

export default new ProvinsiLogic;
