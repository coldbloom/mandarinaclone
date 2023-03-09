import React from 'react'
import { ApiData } from '@/api/apiData/api.data'

const FindTypeInCode = (key:any)=>{
  for(let i = 0;i<ApiData.nutritionType.length;i++){
    
    
    if(ApiData.nutritionType[i].code === key) {
      console.log(key,'wfewef');
     return ApiData.nutritionType[i].name
    } 
  }
}

export const FirstFindMealType = (meal_types: any) => {
  let state = []
  let firstKey = -1
	if (!meal_types) return ''
	for (let i = 0; i < ApiData.nutritionType.length; i++) {
    const key = meal_types.indexOf(ApiData.nutritionType[i].code)
    if(key !== -1){
      console.log(firstKey);
      state.push(ApiData.nutritionType[i].code)
      if(firstKey === -1) firstKey = key
    }

  }
  if(firstKey === -1) return 'Выберите параметры';
  if(state.length>1 ) return `${FindTypeInCode(meal_types[firstKey])} и лучше`;
  if(state.length===1) return `${FindTypeInCode(meal_types[firstKey])}`;
  return 'Выберите параметры'
}
