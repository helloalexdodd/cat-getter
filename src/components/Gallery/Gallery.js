import React, { useState } from 'react';
import Modal from '../Modal';

import { List, ListItem, StyledButton }from './Gallery.style';

const Gallery = ({ data }) => {
  const [modalIsOpen,setIsOpen] = useState(false);
  const [selectedBreed, setSelectedBreed] = useState({})
  
  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () =>{
    setIsOpen(false);
  }

  return (
    <>
      <List>
        {data.map((breed, i) => (
          <>
          <ListItem key={breed.id} >
            <StyledButton onClick={() => {
              openModal();
              setSelectedBreed(breed);
            }}>
              {breed.name}
            </StyledButton>
          </ListItem>
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

export default Gallery;
