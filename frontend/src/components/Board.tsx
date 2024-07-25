import React from 'react';
import './Board.css';
import List from './List';
import { CardProps } from './Card';



interface ListData {
  title: string;
  cards: CardProps[];
}

const initialData: ListData[] = [
  {
    title: 'To Do',
    cards: [
      { title: 'Task 1', description: 'This is a task' },
    ],
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
  return (
    <div className="board">
      {initialData.map((list, index) => (
        <List key={index} title={list.title} cards={list.cards} />
      ))}
    </div>
  );
};

export default Board;
