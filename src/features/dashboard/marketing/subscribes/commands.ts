import { TEmailSubscribeRequest } from "@/modules/subscribe/types/commands";
import { useMutation } from "@tanstack/react-query";
import subscribeServices from "./services";
import notificationService from "@/services/notification.service";
import { AxiosError } from "axios";
import { ApiValidationResponse } from "@/interfaces/api.interface";
import queryClient from "@/configs/react-query.config";
import { subscribeQueries } from "./queries";

export const subscribeCommands = {
  useEmailSubscribe: () => {
    return useMutation({
      mutationFn: (request: TEmailSubscribeRequest) =>
        subscribeServices.emailSubscribe(request),
      onSuccess: (data) => {
        if (data) {
          notificationService.success(data.message);
        }
      },
      onError: (error: AxiosError) => {
        const errors = error.response?.data as ApiValidationResponse;
        notificationService.error(errors.message);
      },
    });
  },
  useCancelSubscripting: () => {
    return useMutation({
      mutationFn: (id: number) => subscribeServices.cancelSubscripting(id),
      onSuccess: (data) => {
        if (data) {
          queryClient.invalidateQueries({
            ...subscribeQueries.list(),
          });
          notificationService.success(data.message);
        }
      },
      onError: (error: AxiosError) => {
        const errors = error.response?.data as ApiValidationResponse;
        notificationService.error(errors.message);
      },
    });
  },
};
