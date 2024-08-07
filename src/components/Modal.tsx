import React from 'react';
import './Modal.css';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  onSave: () => void;
  onTitleChange: (title: string) => void;
  onDescriptionChange?: (description: string) => void;
  title: string;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, onSave, onTitleChange, onDescriptionChange, title }) => {
  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{title}</h2>
        <input type="text" placeholder="Title" onChange={(e) => onTitleChange(e.target.value)} />
        {onDescriptionChange && (
          <textarea
            placeholder="Description"
            onChange={(e) => onDescriptionChange(e.target.value)}
          />
        )}

        <button onClick={onSave}>Save</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
