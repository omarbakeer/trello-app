import actionTypes from './actionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case actionTypes.CREATE_NEW_LIST:
      return {
        ...state,
        lists: [...state.lists, payload],
      };
    case actionTypes.CREATE_NEW_CARD: {
      const copyOfAllLists = [...state.lists];
      const copyOfTargetedList = { ...copyOfAllLists[payload.indexOfParentList] };
      copyOfTargetedList.cards.push(payload);
      copyOfAllLists.splice(payload.indexOfParentList, 1, copyOfTargetedList);
      return {
        ...state,
        lists: [...copyOfAllLists],
      };
    }
    case actionTypes.EDIT_CARD: {
      const copyOfAllLists = [...state.lists];
      const oldList = copyOfAllLists.find((list, index) => index === payload.oldCardDetails.indexOfParentList);
      oldList.cards.splice(payload.oldCardDetails.cardIndex, 1, payload.newCardDetails );
      copyOfAllLists.splice(payload.oldCardDetails.indexOfParentList, 1, oldList);

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
