export interface IDto {
  run<T>(value: string): Promise<T | any>;
}
