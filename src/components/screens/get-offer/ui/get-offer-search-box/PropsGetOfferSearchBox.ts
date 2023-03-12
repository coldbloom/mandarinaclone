import { PropsGetOfferState } from "../../get-offer1/get-offer.interface";

export interface PropsGetOfferSearchBox extends PropsGetOfferState{
  handleClick:(code:string)=>void,
  setError:React.Dispatch<React.SetStateAction<boolean>>
}