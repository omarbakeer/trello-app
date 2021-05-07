import actionTypes from './actionTypes';

export const createNewList = payload => ({
  type: actionTypes.CREATE_NEW_LIST,
  payload,
});
