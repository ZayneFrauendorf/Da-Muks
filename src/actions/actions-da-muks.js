import Action from './actionTypes';
import actionTypes from './actionTypes';

console.log(Action);


export const addNotification = (message, errorType) => ({
    type: Action.ADD_NOTIFICATION,
    message,
    errorType
})
