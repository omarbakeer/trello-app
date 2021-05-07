import React, { useReducer } from 'react';
import AddItem from './components/AddItem';
import List from './components/List';
import { reducer, initialState, actions } from './state';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addANewList = (newList) => {
    dispatch(actions.createNewList(newList));
  };

  return (
    <div className="App">
      {state.lists.map((list) => (
        <div className="column">
          <List listLabel={list.listLabel}></List>
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
