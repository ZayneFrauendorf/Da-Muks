import Action from './actionTypes';
import actionTypes from './actionTypes';

export const addNotification = (message) => ({
    type: Action.ADD_NOTIFICATION,
    message
})