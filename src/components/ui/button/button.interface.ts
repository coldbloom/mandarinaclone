import { ButtonHTMLAttributes } from "react";

export interface PropsButton extends  ButtonHTMLAttributes<HTMLButtonElement> {
  children:React.ReactNode,
  classDiv?:string
}