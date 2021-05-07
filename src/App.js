import React, { useReducer } from 'react';
import AddItem from './components/AddItem';
import List from './components/List';
import { reducer, initialState, actions} from './state'
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const addANewList = newList => {
    dispatch(actions.createNewList(newList));
  }

  return (
    <div className="App">
      {state.lists.map(list => (
        <List listLabel={list.listLabel}></List>
      ))}
      <AddItem addNewListToReducer={addANewList} />
    </div>
  );
}

export default App;
