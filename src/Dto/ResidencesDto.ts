import { IDto } from "../interfaces/IDto";
import cheerio from "cheerio";
import { Propeties } from "../interfaces/Properties";
import { PropetiesArrayEnum } from "../utils/PropetiesArrayEnum";

export class ResidencesDto implements IDto {
  private cherioHelper(html: string) {
    const $ = cheerio.load(html);
    const info: { [k: number]: string[] } = [];

    $("tbody")
      .find("tr")
      .each((indexTr, tr) => {
        if (indexTr != 0) {
          info[indexTr] = [];
          $(tr)
            .find("td")
            .each((_, td) => {
              const a = $(td).find("a").attr("href")?.trim();
              if (a) {
                info[indexTr].push(a);
              } else {
                info[indexTr].push($(td).text().trim());
              }
            });
        }
      });

    return info;
  }

  async run(value: string): Promise<Propeties[]> {
    const propeties: Propeties[] = [];
    const listOfInfo = this.cherioHelper(value);

    for (let info of Object.values(listOfInfo)) {
      const propetie = {} as Propeties;
      info.map((line, index) => {
        propetie[PropetiesArrayEnum[index]] = line;
      });
      propeties.push(propetie);
    }
    return propeties;
  }
}
