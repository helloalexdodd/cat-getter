import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import { Li } from '../List';

import { List, StyledButton } from './Gallery.style';

const Gallery = ({ data }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedBreed, setSelectedBreed] = useState({});
  
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <List>
        {data.map((breed) => (
          <>
            <Li key={breed.id}>
              <StyledButton onClick={() => {
                openModal();
                setSelectedBreed(breed);
              }}
              >
                {breed.name}
              </StyledButton>
            </Li>
          </>
        ))}
      </List>
      <Modal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        data={selectedBreed}
      />
    </>
  );
};

Gallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default Gallery;
