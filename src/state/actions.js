import actionTypes from './actionTypes';

export const createNewList = (payload) => ({
  type: actionTypes.CREATE_NEW_LIST,
  payload,
});

export const createNewCard = (payload) => ({
  type: actionTypes.CREATE_NEW_CARD,
  payload,
});

export const editCard = (payload) => ({
  type: actionTypes.EDIT_CARD,
  payload,
});