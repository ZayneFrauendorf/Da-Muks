import Action from "../actions/actionTypes";

const initialState = {
  message: "",
  errorType: null
};

export const notification = (state = initialState, action) => {
  switch (action.type) {
    case Action.ADD_NOTIFICATION:
      return {
        ...state,
        message: action.message,
        errorType: action.errorType
      };
    default:
      return state;
  }
}
