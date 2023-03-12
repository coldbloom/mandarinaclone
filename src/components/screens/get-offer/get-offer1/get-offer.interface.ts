import { Dispatch } from "react";
import { PropsGetOffer } from "../get-offer.interface";

export interface PropsGetOfferState{
  state: PropsGetOffer,
  setState:Dispatch<React.SetStateAction<PropsGetOffer>>
}