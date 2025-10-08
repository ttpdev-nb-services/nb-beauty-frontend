import {
  TCreateCategoryRequest,
  TUpdateCategoryRequest,
} from "@/modules/category/types/services";
import { useMutation } from "@tanstack/react-query";
import categoryServices from "./services";
import notificationService from "@/services/notification.service";
import { categoryQueries } from "./queries";
import queryClient from "@/configs/react-query.config";
import { AxiosError } from "axios";
import {
  ApiErrorResponse,
  ApiValidationResponse,
} from "@/interfaces/api.interface";

export const categoryCommands = {
  useCreateCategory: () => {
    return useMutation({
      mutationFn: (request: TCreateCategoryRequest) =>
        categoryServices.create(request),
      onError: (error: AxiosError) => {
        const errors = error.response?.data as ApiValidationResponse;
        notificationService.error(errors.message);
      },
      onSuccess(data) {
        if (data) {
          queryClient.invalidateQueries({
            queryKey: categoryQueries.index(),
          });
          notificationService.success(data.message);
        }
      },
    });
  },
  useUpdateCategory: (id: number) => {
    return useMutation({
      mutationFn: (request: TUpdateCategoryRequest) =>
        categoryServices.update(id, request),
      onError: (error: AxiosError) => {
        const errors = error.response?.data as ApiValidationResponse;
        notificationService.error(errors.message);
      },
      onSuccess(data) {
        if (data) {
          queryClient.invalidateQueries({
            queryKey: categoryQueries.index(),
          });
          notificationService.success(data.message);
        }
      },
    });
  },
  useDeleteCategory: (id: number) => {
    return useMutation({
      mutationFn: () => categoryServices.delete(id),
      onError: (error: AxiosError) => {
        const errors = error.response?.data as ApiValidationResponse;
        notificationService.error(errors.message);
      },
      onSuccess(data) {
        if (data) {
          queryClient.invalidateQueries({
            queryKey: categoryQueries.index(),
          });
          notificationService.success(data.message);
        }
      },
    });
  },
  useToggleActiveCategory: () => {
    return useMutation({
      mutationFn: (id: number) => categoryServices.delete(id),
      onError: (error: AxiosError) => {
        const errors = error.response?.data as ApiValidationResponse;
        notificationService.error(errors.message);
      },
      onSuccess(data) {
        if (data) {
          queryClient.invalidateQueries({
            queryKey: categoryQueries.index(),
          });
          notificationService.success(data.message);
        }
      },
    });
  },
};

export const handleToggleActiveCategory = async (id: number) => {
  try {
    const res = await categoryServices.toggleActive(id);

    if (res.success) {
      queryClient.invalidateQueries({
        ...categoryQueries.index,
      });
      notificationService.success(res.message);
    }
  } catch (error) {
    const axiosError = error as AxiosError;
    const apiError = axiosError.response?.data as ApiErrorResponse;
    notificationService.error(apiError.message);
  }
};
