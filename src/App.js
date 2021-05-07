import React, { useEffect, useReducer } from 'react';
import CustomContext from './state/context';
import AddItem from './components/AddItem';
import List from './components/List';
import { reducer, initialState } from './state';
import './App.css';

function App() {
  const [boardState, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem('boardData')) || initialState,
  );

  const providerValue = [boardState, dispatch];

  // add persistency to save data
  useEffect(() => {
    localStorage.setItem('boardData', JSON.stringify(boardState));
  }, [boardState]);

  return (
    <CustomContext.Provider value={providerValue}>
      <div className="App">
        {boardState.lists.map((list, index) => (
          <div className="column" key={index}>
            <List index={index} listLabel={list.listLabel} listContent={list} />
          </div>
        ))}
        <div className="column">
          <AddItem itemType="list" hasAtLeastOneItem={boardState.lists.length > 0} />
        </div>
      </div>
    </CustomContext.Provider>
  );
}

export default App;
