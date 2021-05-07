import React from 'react';
import AddItem from '../AddItem';
import Card from '../Card';
import './List.style.css';

const List = ({ index, listLabel, listContent, addNewCardToListReducer }) => {
  const addNewCardToTheList = (cardText) => {
    const newCard = {
      cardText,
      order: listContent.cards.length + 1,
      indexOfParentList: index,
    };
    addNewCardToListReducer(newCard);
  };

  return (
    <div className="list">
      {listLabel && <h3 className="list__label">{listLabel}</h3>}
      {listContent.cards.map((card, index) => (
        <Card key={index} index={index} cardContent={card} />
      ))}
      <AddItem
        itemType="card"
        hasAtLeastOneItem={listContent.cards.length > 0}
        addNewCardToList={addNewCardToTheList}
      />
    </div>
  );
};

export default List;
