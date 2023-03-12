
export const CheckRating = (rating?:string) => {
  if(!rating) return []
  console.log(rating);
  
  const rate = rating?.split('')
 
  const array = []
  for(let i = 0;rate.length;i++){
    if(i+1 === Number(rate[i])){
      array[i] = true
    }else{
      array[i]=false
    }
  }
  return array
}

export default CheckRating