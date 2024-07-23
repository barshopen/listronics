import React from 'react';
import './List.css';
import Card, { CardProps } from './Card';

  
  interface ListProps {
    title: string;
    cards: CardProps[];
    onAddCard: () => void;
  }
  

  const List: React.FC<ListProps> = ({ title, cards, onAddCard }) => {
    return (
    <div className="list">
      <h2 className="list-title">
        {title}
        <button className="add-card-button" onClick={onAddCard}>+</button>
      </h2>
      {cards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default List;
