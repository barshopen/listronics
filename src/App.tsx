import React, { useState } from 'react';
import Board from './components/Board';
import { ListProps } from './components/List';
import { CardProps } from './components/Card';
import SideMenu from './components/SideMenu';
import './App.css';

interface BoardData {
  name: string;
  lists: ListProps[];
}

function App() {
  const [boards, setBoards] = useState<BoardData[]>([]);
  const [currentBoardIndex, setCurrentBoardIndex] = useState<number | null>(null);

  const handleAddCard = (boardIndex: number, listIndex: number, title: string, description: string) => {
    const newCard: CardProps = { title, description };

    const updatedBoards = boards.map((board, bIndex) => {
      if (bIndex === boardIndex) {
        const updatedLists = board.lists.map((list, lIndex) => {
          if (lIndex === listIndex) {
            return {
              ...list,
              cards: [...list.cards, newCard],
            };
          }
          return list;
        });

        return {
          ...board,
          lists: updatedLists,
        };
      }
      return board;
    });

    setBoards(updatedBoards);
  };

  const handleAddListClick = (boardIndex: number, title: string) => {
    const newList: ListProps = {
      title: title,
      cards: [],
      onAddCard: (title, description) => handleAddCard(boardIndex, boards[boardIndex].lists.length, title, description),
    };

    const updatedBoards = boards.map((board, bIndex) => {
      if (bIndex === boardIndex) {
        return {
          ...board,
          lists: [...board.lists, newList],
        };
      }
      return board;
    });

    setBoards(updatedBoards);
  };

  const handleCreateBoard = (name: string) => {
    const newBoard: BoardData = {
      name,
      lists: [],
    };
    setBoards([...boards, newBoard]);
    setCurrentBoardIndex(boards.length); // Set to the new board
  };

  return (
    <div className="app">
      <SideMenu
        boards={boards.map((board) => board.name)}
        onSelectBoard={setCurrentBoardIndex}
        onCreateBoard={handleCreateBoard}
      />
      <div className="board-container">
        {currentBoardIndex !== null && (
          <>
            <div className="board-header">
              <h1>{boards[currentBoardIndex].name}</h1>
            </div>
            <Board
              name={boards[currentBoardIndex].name}
              lists={boards[currentBoardIndex].lists.map((list, listIndex) => ({
                ...list,
                onAddCard: (title, description) => handleAddCard(currentBoardIndex, listIndex, title, description),
              }))}
              onAddList={(title) => handleAddListClick(currentBoardIndex, title)}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
