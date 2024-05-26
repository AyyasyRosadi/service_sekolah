import { LogicBase, messageAttribute } from "../logicBase";
import RegencyAttributes from "./dto";
import Regency from "./model";


class RegencyLogic extends LogicBase {
    public async getAllRegencyByProvinceId(province_id: number): Promise<messageAttribute<RegencyAttributes[]>> {
        const allRegency = await Regency.findAll({ where: { province_id } })
        return this.message(200, allRegency)
    }
}

export default new RegencyLogic;

