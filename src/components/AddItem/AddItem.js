import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './AddItem.style.css';

const AddItem = ({ itemType, hasAtLeastOneItem, addNewListToReducer }) => {
  const [inputValue, setInputValue] = useState('');
  const [isUserCurrentlyAddingNewItem, setIsUserCurrentlyAddingNewItem] = useState(false);

  const handleSubmitNewList = (e) => {
    e.preventDefault();
    const { value } = e.target.elements.listLabel;
    if (!value || !inputValue) return;

    const newList = {
      listLabel: value || inputValue,
      cards: [],
    };
    addNewListToReducer(newList);
    setIsUserCurrentlyAddingNewItem(false);
    setInputValue('');
  };

  if (!isUserCurrentlyAddingNewItem)
    return (
      <div className="add-item__placeholder" onClick={() => setIsUserCurrentlyAddingNewItem(true)}>
        + Add {hasAtLeastOneItem ? 'another' : 'a'} {itemType}
      </div>
    );
  return (
    <form id="add-item__form" onSubmit={handleSubmitNewList}>
      <input
        autoFocus
        autocomplete="off"
        className="add-item__input"
        name="listLabel"
        value={inputValue}
        onChange={({ target: { value } }) => setInputValue(value)}
      />
      <div className="add-list__actions-wrapper">
        <button type="submit" className="add-item__submit-button">
          Add List
        </button>
        <span
          onClick={() => setIsUserCurrentlyAddingNewItem(false)}
          className="add-item__cancel-button"
        >
          X
        </span>
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
