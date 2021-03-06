import React, { useEffect, useState } from 'react';
import { useCustomContext, actions } from '../../state';
import PropTypes from 'prop-types';
import './AddItem.style.css';

const AddItem = ({ itemType, hasAtLeastOneItem, addNewCardToList }) => {
  const [inputValue, setInputValue] = useState('');
  const [isUserCurrentlyAddingNewItem, setIsUserCurrentlyAddingNewItem] = useState(false);
  const [, dispatch] = useCustomContext();

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  const resetInputFieldAfterTogglingEditMode = () => {
    if (inputValue) setInputValue('');
  };

  useEffect(resetInputFieldAfterTogglingEditMode, [isUserCurrentlyAddingNewItem]);

  const handleEscapeKey = (e) => {
    if (e.key === 'Escape') {
      setIsUserCurrentlyAddingNewItem(false);
    }
  };

  const handleSubmitNewList = (e) => {
    e.preventDefault();
    const { value } = e.target.elements.listInput;
    if (!value || !inputValue) return;

    const newList = {
      listLabel: value || inputValue,
      cards: [],
    };
    dispatch(actions.createNewList(newList));
    setInputValue('');
  };

  const handleSubmitNewCard = (e) => {
    e.preventDefault();
    const { value } = e.target.elements.cardInput;
    if (!value || !inputValue) return;
    addNewCardToList(value || inputValue);
    setInputValue('');
  };

  if (!isUserCurrentlyAddingNewItem)
    return (
      <div className="add-item__placeholder" onClick={() => setIsUserCurrentlyAddingNewItem(true)}>
        + Add {hasAtLeastOneItem ? 'another' : 'a'} {itemType}
      </div>
    );

  return (
    <form
      id="add-item__form"
      onSubmit={itemType === 'list' ? handleSubmitNewList : handleSubmitNewCard}
    >
      {itemType === 'list' ? (
        <input
          autoFocus
          autocomplete="off"
          className="add-item__input"
          name="listInput"
          value={inputValue}
          onChange={({ target: { value } }) => setInputValue(value)}
        />
      ) : (
        <textarea
          autoFocus
          autocomplete="off"
          className="add-item__textarea"
          name="cardInput"
          value={inputValue}
          onChange={({ target: { value } }) => setInputValue(value)}
        />
      )}
      <div className="add-list__actions-wrapper">
        <button type="submit" className="add-item__submit-button">
          Add {itemType}
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
