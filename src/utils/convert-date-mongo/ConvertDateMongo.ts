export const ConvertDateMongo = (date?:string)=>{
  const newDate = date?.substring(0,10)
  console.log(newDate);
  
  return newDate
}