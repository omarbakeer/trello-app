import React, { useEffect, useState } from 'react';
import { actions, useCustomContext } from '../../state';
import Modal from '../Modal';
import './Card.style.css';

const Card = ({ index, cardContent }) => {
  const [cardDetailsEdits, setCardDetailsEdits] = useState(cardContent);
  const [isCardInEditMode, setIsCardInEditMode] = useState(false);
  const [isCardEdited, setIsCardEdited] = useState(false);
  const [, dispatch] = useCustomContext();

  useEffect(() => {
    if (isCardEdited) {
      setCardDetailsEdits(cardContent);
      setIsCardEdited(false);
    }
  }, [isCardInEditMode]);

  useEffect(() => {
    if (!isCardEdited) {
      setIsCardEdited(true);
    }
  }, [cardDetailsEdits]);

  const saveCardChanges = (e) => {
    e.preventDefault();
    if (isCardEdited) {
      dispatch(
        actions.editCard({
          oldCardDetails: { ...cardContent, cardIndex: index },
          newCardDetails: { ...cardDetailsEdits },
        }),
      );
      setIsCardInEditMode(false);
    }
  };
  // TODO add funtionality to move the card between lists
  return (
    <>
      <div className="card" onClick={() => setIsCardInEditMode(true)}>
        {cardContent.cardText}
      </div>
      {isCardInEditMode && (
        <Modal toggleModal={() => setIsCardInEditMode(false)}>
          <form className="edit-form" onSubmit={saveCardChanges}>
            <label>Card Details: </label>
            <input
              value={cardDetailsEdits.cardText}
              onChange={({ target: { value } }) =>
                setCardDetailsEdits({ ...cardDetailsEdits, cardText: value })
              }
            />
            {/* <div>
              <label>Card Order: </label>
              <input
                value={cardDetailsEdits.order}
                onChange={({ target: { value } }) =>
                  setCardDetailsEdits({ ...cardDetailsEdits, order: value })
                }
              />
              <label>Card Parent: </label>
              <input
                value={cardDetailsEdits.indexOfParentList}
                onChange={({ target: { value } }) =>
                  setCardDetailsEdits({ ...cardDetailsEdits, indexOfParentList: value })
                }
              />
            </div> */}
            <button type="submit">Save</button>
          </form>
        </Modal>
      )}
    </>
  );
};

export default Card;
