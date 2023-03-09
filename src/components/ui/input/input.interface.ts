import { InputHTMLAttributes } from "react";

export interface PropsInput extends  InputHTMLAttributes<HTMLInputElement> {
  children?:React.ReactNode,
  classDiv?:string
}