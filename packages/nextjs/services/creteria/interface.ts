export interface Datasource {
  getValue(id: string): Promise<string>;
  getType(): string;
}
