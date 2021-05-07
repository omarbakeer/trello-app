import actionTypes from './actionTypes';

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.CREATE_NEW_LIST:
      return {
        ...state,
        lists: [...state.lists, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
