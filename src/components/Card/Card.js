import React from 'react';
import './Card.style.css';

const Card = ({ index, cardContent }) => {
  return <div className="card">{cardContent.cardText}</div>;
};

export default Card;
