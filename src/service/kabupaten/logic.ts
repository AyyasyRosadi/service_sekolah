import { LogicBase, messageAttribute } from "../logicBase";
import KabupatenAttributes from "./dto";
import Kabupaten from "./model";


class KabupatenLogic extends LogicBase {
    public async getAllKabupatenByPovinsiId(provinsi_id: number): Promise<messageAttribute<KabupatenAttributes[]>> {
        const allKabupaten = await Kabupaten.findAll({ where: { provinsi_id } })
        return this.message(200, allKabupaten)
    }
}

export default new KabupatenLogic;

