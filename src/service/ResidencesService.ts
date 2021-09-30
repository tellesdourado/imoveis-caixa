import { IDto } from "../interfaces/IDto";
import { IRequestService } from "../interfaces/IRequestService";
import { Propeties } from "../interfaces/Properties";
import { StateListEnum } from "../utils/StateListEnum";

export class ResidecesService {
  constructor(
    private readonly requestService: IRequestService,
    private readonly residenceDto: IDto
  ) {}

  async run() {
    const url = `https://venda-imoveis.caixa.gov.br/listaweb/Lista_imoveis_${StateListEnum.MA.valueOf()}.htm`;
    const data = await this.requestService.get<string>(url);
    const propeties = await this.residenceDto.run<Propeties[]>(data);

    console.log(propeties);
  }
}
