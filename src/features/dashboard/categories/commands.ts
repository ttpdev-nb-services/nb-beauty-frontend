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
import { ApiValidationResponse } from "@/interfaces/api.interface";

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
};
