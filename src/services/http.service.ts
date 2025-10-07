import { IHttpService } from "@/interfaces/http";
import { getEnv } from "@/utils/env";
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  CreateAxiosDefaults,
} from "axios";

class HttpService implements IHttpService {
  protected axiosInstance: AxiosInstance;
  constructor(options: CreateAxiosDefaults) {
    this.axiosInstance = axios.create({
      ...options,
    });
    this.setupInterceptors();
  }

  setupInterceptors() {
    this.axiosInstance.interceptors.response.use(
      this.onFulfilled,
      this.onRejected,
    );
  }
  onFulfilled(res: AxiosResponse) {
    return res.data;
  }

  onRejected(error: AxiosError) {
    return Promise.reject(error);
  }

  get<ReturnType>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<ReturnType> {
    return this.axiosInstance.get(url, {
      ...config,
      headers: {
        ...config?.headers,
        Authorization: "your-token",
      },
    });
  }
  patch<ReturnType>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<ReturnType> {
    return this.axiosInstance.patch(url, data, {
      ...config,
      headers: {
        ...config?.headers,
        Authorization: "your-token",
      },
    });
  }
  post<ReturnType>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<ReturnType> {
    return this.axiosInstance.post(url, data, {
      ...config,
      headers: {
        ...config?.headers,
        Authorization: "your-token",
      },
    });
  }
  put<ReturnType>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<ReturnType> {
    return this.axiosInstance.put(url, data, {
      ...config,
      headers: {
        ...config?.headers,
        Authorization: "your-token",
      },
    });
  }
  delete<ReturnType>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<ReturnType> {
    return this.axiosInstance.delete(url, {
      ...config,
      headers: {
        ...config?.headers,
        Authorization: "your-token",
      },
    });
  }
}

const httpService = new HttpService({
  baseURL: getEnv("NEXT_PUBLIC_API_URL"),
  timeout: 30000,
});

export default httpService;
