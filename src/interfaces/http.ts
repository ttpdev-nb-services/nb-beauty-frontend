import { AxiosRequestConfig } from "axios";

export interface IHttpService {
  get: <ReturnType>(
    url: string,
    config?: AxiosRequestConfig,
  ) => Promise<ReturnType>;
  post: <ReturnType>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ) => Promise<ReturnType>;
  put: <ReturnType>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ) => Promise<ReturnType>;
  patch: <ReturnType>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ) => Promise<ReturnType>;
  delete: <ReturnType>(
    url: string,
    config?: AxiosRequestConfig,
  ) => Promise<ReturnType>;
}
