import Action from "./actionTypes";

export const addNotification = (message, errorType) => ({
  type: Action.ADD_NOTIFICATION,
  message,
  errorType
});
