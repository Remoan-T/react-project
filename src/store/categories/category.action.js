import { createAction } from "../../utils/reducer/reducer.utils"
import { CATEORIES_ACTION_TYPES } from "./category.types"

export const setcategories= (category) =>{
createAction(CATEORIES_ACTION_TYPES.SET_CATEGORIES_MAP , category)

}

