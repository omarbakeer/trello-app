import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './AddItem.style.css';

const AddItem = ({ hasAtLeastOneItem, addNewListToReducer }) => {
  const [inputValue, setInputValue] = useState('');
  const [isUserCurrentlyAddingNewItem, setIsUserCurrentlyAddingNewItem] = useState(false);

  const handleSubmitNewList = e => {
    e.preventDefault();
    const { value } = e.target.elements.listLabel;
    const newList = {
      listLabel: value || inputValue,
      cards: [],
    };
    addNewListToReducer(newList);
    setIsUserCurrentlyAddingNewItem(false);
    setInputValue('');
  }

  if (!isUserCurrentlyAddingNewItem)
    return (
      <div className="add-item__placeholder" onClick={() => setIsUserCurrentlyAddingNewItem(true)}>
        + Add {hasAtLeastOneItem ? 'another' : 'a'} list
      </div>
    );
  return (
    <form className="add-item__form" onSubmit={handleSubmitNewList}>
      <input
        autoFocus
        name="listLabel"
        value={inputValue}
        onChange={({ target: { value } }) => setInputValue(value)}
      />
      <div className="add-list__actions-wrapper">
        <button type="submit">Add List</button>
        {/* TODO cancel button */}
      </div>
    </form>
  );
};

AddItem.propTypes = {
  hasAtLeastOneItem: PropTypes.bool,
};

AddItem.defaultProps = {
  hasAtLeastOneItem: false,
};

export default AddItem;
