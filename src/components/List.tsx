import React, { useState } from 'react';
import './List.css';
import Card, { CardProps } from './Card';
import Modal from './Modal'; // Import Modal component if you have one

export interface ListProps {
  title: string;
  cards: CardProps[];
  onAddCard: (title: string, description: string) => void; // Change the type to accept card details
}

const List: React.FC<ListProps> = ({ title, cards, onAddCard }) => {
  const [showModal, setShowModal] = useState(false);
  const [cardTitle, setCardTitle] = useState('');
  const [cardDescription, setCardDescription] = useState('');

  const handleSaveCard = () => {
    if (cardTitle.trim() && cardDescription.trim()) {
      onAddCard(cardTitle, cardDescription);
      setCardTitle('');
      setCardDescription('');
      setShowModal(false);
    }
  };

  return (
    <div className="list">
      <h2 className="list-title">
        {title}
        <button className="add-card-button" onClick={() => setShowModal(true)}>+</button>
      </h2>
      {cards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
      {showModal && (
        <Modal
          show={showModal}
          onClose={() => setShowModal(false)}
          onSave={handleSaveCard}
          onTitleChange={setCardTitle}
          onDescriptionChange={setCardDescription}
          title="Add Card"
        />
      )}
    </div>
  );
};

export default List;
