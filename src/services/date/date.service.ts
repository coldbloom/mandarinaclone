import { axiosClassic } from "@/api/interceptors"
import { PropsDateService } from "./dateService.interface"


export const DateService = {
  async getDate ({townFrom,countryCode,adults,childs,childs_age,price_range_min=10,price_range_max=1000,meal_types=['AL','BB']}:PropsDateService) {
    const response = await axiosClassic.get('/date',{
      params:{
        townFrom,
        countryCode,
        adults,
        childs,
        childs_age,
        price_range_min,
        price_range_max,
        meal_types
      }
    })
    return response
  }
 
}