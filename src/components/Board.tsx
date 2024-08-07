import React, { useState } from 'react';
import './Board.css';
import List, { ListProps } from './List';
import Modal from './Modal';


export interface BoardProps {
  name: string;
  lists: ListProps[];
  onAddList: (title: string) => void;
}

const Board: React.FC<BoardProps> = ({ name, lists, onAddList }) => {
  const [listTitle, setListTitle] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSaveList = () => {
    if (listTitle.trim()) {
      onAddList(listTitle);
      setListTitle('');
      setShowModal(false);
    }
  };


  return (
    <div className="board">
      <button className="add-list-button" onClick={() => setShowModal(true)}>Add List</button>
      <div className="lists-container">
        {lists.map((list, index) => (
          <List
            key={index}
            title={list.title}
            cards={list.cards}
            onAddCard={(title, description) => list.onAddCard(title, description)}
          />
        ))}
      </div>
      {showModal && (
        <Modal
          show={showModal}
          onClose={() => setShowModal(false)}
          onSave={handleSaveList}
          onTitleChange={setListTitle}
          title="Add List"
        />
      )}
    </div>
  );
};

export default Board;
