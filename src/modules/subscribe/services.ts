import { BaseApi } from "@/constants/api";
import { IHttpService } from "@/interfaces/http";
import { TEmailSubscribeRequest } from "./types/commands";
import { ApiResponse } from "@/interfaces/api.interface";

export class SubscribeService {
  private httpService: IHttpService;
  constructor(httpService: IHttpService) {
    this.httpService = httpService;
  }

  public async emailSubscribe(request: TEmailSubscribeRequest) {
    return this.httpService.post<ApiResponse<null>>(
      `${BaseApi.subscribe.email()}`,
      request,
    );
  }
}
