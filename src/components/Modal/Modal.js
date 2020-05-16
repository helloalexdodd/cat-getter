/* eslint-disable react/forbid-prop-types */
/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Link from '../Link';
import { H4, H5 } from '../Typography';
import {
  modalStyles,
  StyledText,
  StyledButton,
  Span,
} from './Modal.style';

const ModalComponent = ({
  modalIsOpen,
  closeModal,
  data,
}) => {
  const {
    name,
    alt_names,
    description,
    temperament,
    cfa_url,
    vetstreet_url,
  } = data;
  
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={modalStyles}
      contentLabel={`${name} Information`}
    >
      <StyledButton onClick={closeModal}>x</StyledButton>
      <div>
        <H4>{name}</H4>
        <H5>
          Also known as:
          {alt_names || 'N/A'}
        </H5>
        <StyledText>
          {description}
        </StyledText>
        <StyledText>
          <Span>Temperament</Span>
          :
          {temperament}
        </StyledText>
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
};

export default ModalComponent;
