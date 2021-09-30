export interface IRequestService {
  get<T>(url: string): Promise<T>;
}
