import React from 'react';
import './List.style.css';

const List = ({ listLabel, children }) => {
  return (
    <div className="list">
      {listLabel && <h3 className="list__label">{listLabel}</h3>}
      {children}
      {/* TODO add a card */}
    </div>
  );
};

export default List;
