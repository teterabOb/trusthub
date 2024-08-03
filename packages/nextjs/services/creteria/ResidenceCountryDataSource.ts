import { Datasource } from "./interface";

export class ResidenceCountryDataSource implements Datasource {
  async getValue(id: string): Promise<string> {
    console.log(id);
    return "Argentina";
  }

  getType(): string {
    return "string";
  }
}
