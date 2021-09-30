import https from "https";
import { IRequestService } from "../interfaces/IRequestService";

export class RequestService implements IRequestService {
  constructor() {}

  async get(url: string): Promise<any> {
    const headers = {
      "User-Agent": "Mozilla/5.0",
    };
    return new Promise(async (resolve, reject) => {
      https.get(url, { headers }, async (res) => {
        res.setEncoding("utf-8");
        var data: string;
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve(data));
        res.on("error", (err) => {
          res.destroy();
          reject(err);
        });
      });
    });
  }
}
