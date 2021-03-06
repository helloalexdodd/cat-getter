/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Link from '../Link';
import { Li } from '../List';
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
  setOpen,
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
            <Li key={`Modal${temper}${id}`}>
              <TemperamentButton
                name="temperament"
                onClick={() => {
                  handleTemperamentSelect(temper);
                  closeModal();
                  setOpen(true);
                }}
              >
                {temper}
              </TemperamentButton>
            </Li>
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
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object,
  handleTemperamentSelect: PropTypes.func,
  setOpen: PropTypes.func,
};

export default ModalComponent;
