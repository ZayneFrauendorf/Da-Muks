import Action from "../actions/actionTypes";

const initialState = {
  message: ""
};

export const notification = (state = {}, action) => {
  switch (action.type) {
    case Action.ADD_NOTIFICATION:
      return {
        message: action.message
      };
    default:
      return state;
  }
}
