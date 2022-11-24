const REDUCERS_TYPES = {
    SET_CURRENT_USER: "SET_CURRENT_USER",
  };

const INITIAL_VALUES = {
    currentUser: null,
  };


  export const userReducer = (state = INITIAL_VALUES, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case REDUCERS_TYPES.SET_CURRENT_USER:
        return { ...state, currentUser: payload };
  
      default:
        return state;
    }
  };