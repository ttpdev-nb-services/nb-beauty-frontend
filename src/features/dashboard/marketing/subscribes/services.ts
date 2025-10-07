import { SubscribeService } from "@/modules/subscribe/services";
import httpService from "@/services/http.service";

const subscribeServices = new SubscribeService(httpService);

export default subscribeServices;
