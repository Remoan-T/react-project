import { CATEORIES_ACTION_TYPES } from "./category.types";
const INITIAL_VALUES= {
categoriesMap:{}
};
export const categoryReducer = (state=INITIAL_VALUES , action={}) => {
const { type ,payload } = action;

switch(type){
    case CATEORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
    return {...state , categoriesMap:payload};
    default:
        return state;
}

}