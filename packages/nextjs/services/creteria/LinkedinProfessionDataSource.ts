import { Datasource } from "./interface";

export class LinkedinProfessionDataSource implements Datasource {
  async getValue(id: string): Promise<string> {
    console.log(id);
    return "Software engineering";
  }

  getType(): string {
    return "string";
  }
}
