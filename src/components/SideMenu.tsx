import React, { useState } from 'react';
import './SideMenu.css';


interface SideMenuProps {
  boards: string[];
  onSelectBoard: (index: number) => void;
  onCreateBoard: (name: string) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ boards, onSelectBoard, onCreateBoard }) => {
  const [newBoardName, setNewBoardName] = useState('');

  const handleCreateBoardClick = () => {
    if (newBoardName.trim()) {
      onCreateBoard(newBoardName);
      setNewBoardName(''); // Clear the input field
    }
  };

  return (
    <div className="side-menu">
      <ul>
        {boards.map((board, index) => (
          <li key={index} onClick={() => onSelectBoard(index)}>
            {board}
          </li>
        ))}
      </ul>
      <div className="side-menu-footer">
        <input
          type="text"
          value={newBoardName}
          onChange={(e) => setNewBoardName(e.target.value)}
          placeholder="New board name"
        />
        <button onClick={handleCreateBoardClick}>+ Add Board</button>
      </div>
    </div>
  );
};

export default SideMenu;
