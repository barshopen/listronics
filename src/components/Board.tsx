import React, { useState } from 'react';
import './Board.css';
import List from './List';
import Modal from './Modal';
import { CardProps } from './Card';



interface ListData {
  title: string;
  cards: CardProps[];
}

const initialData: ListData[] = [
  {
    title: 'To Do',
    cards: [],
  },
  {
    title: 'In Progress',
    cards: [],
  },
  {
    title: 'Done',
    cards: [],
  },
];

const Board: React.FC = () => {
  const [lists, setLists] = useState<ListData[]>(initialData);
  const [showModal, setShowModal] = useState(false);
  const [currentListIndex, setCurrentListIndex] = useState<number | null>(null);

  const addCardToList = (listIndex: number, title: string, description: string) => {
    const newLists = lists.map((list, index) => {
      if (index === listIndex) {
        return {
          ...list,
          cards: [...list.cards, { title, description }]
        };
      }
      return list;
    });
    setLists(newLists);
  };

  const handleAddCardClick = (index: number) => {
    setCurrentListIndex(index);
    setShowModal(true);
  };

  const handleSaveCard = (title: string, description: string) => {
    if (currentListIndex !== null) {
      addCardToList(currentListIndex, title, description);
    }
  };

  return (
    <div className="board">
      {lists.map((list, index) => (
        <List
          key={index}
          title={list.title}
          cards={list.cards}
          onAddCard={() => handleAddCardClick(index)}
        />
      ))}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSaveCard}
      />
    </div>
  );
};

export default Board;
