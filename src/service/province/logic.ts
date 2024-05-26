import { LogicBase, messageAttribute } from "../logicBase";
import ProvinceAttributes from "./dto";
import Province from "./model";


class ProvinceLogic extends LogicBase {
    public async getAllProvince(): Promise<messageAttribute<ProvinceAttributes[]>> {
        const allProvince = await Province.findAll()
        return this.message(200, allProvince)
    }
}

export default new ProvinceLogic;
