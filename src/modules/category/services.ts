import { BaseApi } from "@/constants/api";
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
      BaseApi.categories.base(),
    );
  }
  public async create(request: TCreateCategoryRequest) {
    return this.httpService.post<ApiResponse<TCategory>>(
      BaseApi.categories.base(),
      request,
    );
  }
  public async delete(id: number) {
    return this.httpService.delete<ApiResponse<TCategory>>(
      `${BaseApi.categories.delete(id)}`,
    );
  }
  public async update(id: number, request: TUpdateCategoryRequest) {
    return this.httpService.put<ApiResponse<TCategory>>(
      `${BaseApi.categories.update(id)}`,
      request,
    );
  }
  public async detail(id: number) {
    return this.httpService.get<ApiResponse<TCategory>>(
      `${BaseApi.categories.detail(id)}`,
    );
  }
}
