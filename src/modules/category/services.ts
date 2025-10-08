import { ApiResponse, CollectionResponse } from "@/interfaces/api.interface";
import { TCategories, TCategory } from "./types/queries";
import {
  TCreateCategoryRequest,
  TUpdateCategoryRequest,
} from "./types/services";
import { IHttpService } from "@/interfaces/http";

export class CategoryService {
  private httpService: IHttpService;
  constructor(httpService: IHttpService) {
    this.httpService = httpService;
  }
  public async list() {
    return this.httpService.get<CollectionResponse<TCategories>>(
      "/api/v1/dashboard/categories",
    );
  }
  public async create(request: TCreateCategoryRequest) {
    return this.httpService.post<ApiResponse<TCategory>>(
      "/api/v1/dashboard/categories",
      request,
    );
  }
  public async delete(id: number) {
    return this.httpService.delete<ApiResponse<TCategory>>(
      `/api/v1/dashboard/categories/${id}`,
    );
  }
  public async update(id: number, request: TUpdateCategoryRequest) {
    return this.httpService.put<ApiResponse<TCategory>>(
      `/api/v1/dashboard/categories/${id}`,
      request,
    );
  }
  public async view(id: number) {
    return this.httpService.get<ApiResponse<TCategory>>(
      `/api/v1/dashboard/categories/${id}`,
    );
  }
  public async toggleActive(id: number) {
    return this.httpService.patch<ApiResponse<TCategory>>(
      `/api/v1/dashboard/categories/${id}/active`,
    );
  }
}
