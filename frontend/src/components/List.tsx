import React from 'react';
import './List.css';
import Card, { CardProps } from './Card';

interface Card {
    title: string;
    description: string;
  }
  
  interface ListProps {
    title: string;
    cards: CardProps[];
  }
  

  const List: React.FC<ListProps> = ({ title, cards }) => {
    return (
    <div className="list">
      <h2 className="list-title">{title}</h2>
      {cards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default List;
