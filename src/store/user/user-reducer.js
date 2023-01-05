import { ACTION_TYPES } from "./user.types";

const INITIAL_VALUES = {
    currentUser: null,
  };


  export const userReducer = (state = INITIAL_VALUES, action={}) => {
    const { type, payload } = action;
  
    switch (type) {
      case ACTION_TYPES.SET_CURRENT_USER:
        return { ...state, currentUser: payload };
  
      default:
        return state;
    }
  };