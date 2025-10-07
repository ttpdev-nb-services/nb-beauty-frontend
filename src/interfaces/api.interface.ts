export interface ApiResponse<ReturnType> {
  data: ReturnType;
  message?: string;
  success: boolean;
}

export interface ApiErrorResponse {
  message: string;
  code: string;
  path: string;
  timestamp: string;
}

export interface ApiValidationResponse {
  code: string;
  message: string;
  timestamp: string;
  path: string;
  errors: Record<string, string>;
}

export interface CollectionResponse<TData> {
  filter: {
    order: string;
    sortBy: string;
  };
  pagination: {
    page: number;
    totals: number;
    nextPage: number;
  };
  results: TData[];
}
