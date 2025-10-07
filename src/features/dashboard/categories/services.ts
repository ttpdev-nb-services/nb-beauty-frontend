import { CategoryService } from "@/modules/category/services";
import httpService from "@/services/http.service";

const categoryServices = new CategoryService(httpService);

export default categoryServices;
