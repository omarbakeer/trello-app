import React, { useEffect, useReducer } from 'react';
import AddItem from './components/AddItem';
import List from './components/List';
import { reducer, initialState, actions } from './state';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem('boardData')) || initialState,
  );

  const addANewList = (newList) => {
    dispatch(actions.createNewList(newList));
  };

  const addANewCard = (newCard) => {
    dispatch(actions.createNewCard(newCard));
  };

  // add persistency to save data
  useEffect(() => {
    localStorage.setItem('boardData', JSON.stringify(state));
  }, [state]);

  return (
    <div className="App">
      {state.lists.map((list, index) => (
        <div className="column" key={index}>
          <List
            index={index}
            listLabel={list.listLabel}
            listContent={list}
            addNewCardToListReducer={addANewCard}
          />
        </div>
      ))}
      <div className="column">
        <AddItem
          itemType="list"
          hasAtLeastOneItem={state.lists.length > 0}
          addNewListToReducer={addANewList}
        />
      </div>
    </div>
  );
}

export default App;
