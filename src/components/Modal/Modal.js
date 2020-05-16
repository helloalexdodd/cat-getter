/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Link from '../Link';
import { H4, H5 } from '../Typography';

import {
  modalStyles,
  StyledText,
  CloseButtonContainer,
  CloseButton,
  StyledLabel,
  TemperamentButtonsContainer,
  TemperamentButton,
} from './Modal.style';

const ModalComponent = ({
  modalIsOpen,
  closeModal,
  data,
  handleTemperamentSelect,
}) => {
  const {
    name,
    alt_names,
    description,
    temperament,
    cfa_url,
    vetstreet_url,
    id,
  } = data;
  
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={modalStyles}
      contentLabel={`${name} Information`}
    >
      <CloseButtonContainer>
        <CloseButton onClick={closeModal}>x</CloseButton>
      </CloseButtonContainer>
      <div>
        <H4>{name}</H4>
        <H5>
          {/* eslint-disable-next-line no-trailing-spaces */}
          Also known as: 
          {alt_names || 'N/A'}
        </H5>
        <StyledText>
          {description}
        </StyledText>
        <StyledLabel htmlFor={id}>Select a temperament to filter the cats:</StyledLabel>
        <TemperamentButtonsContainer>
          {temperament && temperament.split(', ').map((temper) => (
            <TemperamentButton
              name="temperament"
              onClick={() => {
                handleTemperamentSelect(temper);
                closeModal();
              }}
            >
              {temper}
            </TemperamentButton>
          ))}
        </TemperamentButtonsContainer>
        <StyledText>
          <Link href={cfa_url || vetstreet_url}>Click Here</Link>
          to find out more!
        </StyledText>
      </div>
    </Modal>
  );
};

ModalComponent.propTypes = {
  modalIsOpen: PropTypes.bool,
  closeModal: PropTypes.func,
  data: PropTypes.objectOf(
    PropTypes.string,
    PropTypes.number,
  ),
  handleTemperamentSelect: PropTypes.func,
};

export default ModalComponent;
