import React, { useEffect } from 'react';
import './Modal.style.css';

const Modal = ({ children, toggleModal }) => {
  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  const handleEscapeKey = (e) => {
    if (e.key === 'Escape') {
      toggleModal(false);
    }
  };

  const handleModalClose = (e) => {
    if (e.target.className === 'modal-container') toggleModal();
  };
  
  return (
    <div className="modal-container" onClick={handleModalClose}>
      <div className="modal-container__content">{children}</div>
    </div>
  );
};
export default Modal;
