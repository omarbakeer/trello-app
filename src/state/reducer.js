import actionTypes from './actionTypes';

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.CREATE_NEW_LIST:
      return {
        ...state,
        lists: [...state.lists, action.payload],
      };
    case actionTypes.CREATE_NEW_CARD: {
      // debugger;
      const copyOfAllLists = [...state.lists];
      const copyOfTargetedList = { ...copyOfAllLists[action.payload.indexOfParentList] };
      copyOfTargetedList.cards.push(action.payload);
      copyOfAllLists.splice(action.payload.indexOfParentList, 1, copyOfTargetedList);
      return {
        ...state,
        lists: [...copyOfAllLists],
      };
    }
    default:
      return state;
  }
};

export default reducer;
