import { BaseApi } from "@/constants/api";
import { IHttpService } from "@/interfaces/http";
import { TEmailSubscribeRequest } from "./types/commands";
import { ApiResponse, CollectionResponse } from "@/interfaces/api.interface";
import { TSubscribeDto } from "./types/queries";

export class SubscribeService {
  private httpService: IHttpService;
  constructor(httpService: IHttpService) {
    this.httpService = httpService;
  }

  public async emailSubscribe(request: TEmailSubscribeRequest) {
    return this.httpService.post<ApiResponse<TSubscribeDto>>(
      `${BaseApi.subscribe.email()}`,
      request,
    );
  }
  public async cancelSubscripting(id: number) {
    return this.httpService.delete<ApiResponse<TSubscribeDto>>(
      `${BaseApi.subscribe.dashboard.cancel(id)}`,
    );
  }

  public async list() {
    return this.httpService.get<CollectionResponse<TSubscribeDto>>(
      `${BaseApi.subscribe.dashboard.base}`,
    );
  }
}
