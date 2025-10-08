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
      "/api/v1/subscribes",
      request,
    );
  }
  public async cancelSubscripting(id: number) {
    return this.httpService.delete<ApiResponse<TSubscribeDto>>(
      `/api/v1/dashboard/subscribes/${id}/cancel`,
    );
  }

  public async list() {
    return this.httpService.get<CollectionResponse<TSubscribeDto>>(
      `/api/v1/dashboard/subscribes`,
    );
  }
}
