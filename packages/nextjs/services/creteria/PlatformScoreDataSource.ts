import { Datasource } from "./interface";

export class PlatformScoreDataSource implements Datasource {
  async getValue(id: string): Promise<string> {
    console.log(id);
    return "10";
  }

  getType(): string {
    return "number";
  }
}
