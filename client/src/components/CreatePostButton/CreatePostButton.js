import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import './CreatePostButton.css';
import CreatePostModal from '../CreatePostModal/CreatePostModal';

export default function CreatePostButton() {
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div 
        className="create-post-button"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleOpenModal}
      >
        <FaPlus className="plus-icon" />
        {isHovered && <span className="button-text">Gönderi Oluştur</span>}
      </div>

      {showModal && (
        <CreatePostModal onClose={handleCloseModal} />
      )}
    </>
  );
} 