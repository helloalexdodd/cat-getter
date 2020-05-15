import React from 'react';
import Modal from 'react-modal';
import Link from '../Link';
import { H4, H5 } from '../Typography';
import {
  modalStyles, StyledText, StyledButton, Span 
} from './Modal.style'

const ModalComponent = ({
  modalIsOpen, closeModal, data
}) => (
  <Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    style={modalStyles}
    contentLabel={`${data.name} Information`}
  >
    <StyledButton onClick={closeModal}>x</StyledButton>
    <div>
      <H4>{data.name}</H4>
      <H5>Also known as: {data.alt_names || 'N/A'}</H5>
      <StyledText>
        {data.description}
      </StyledText>
      <StyledText>
        <Span>Temperament</Span>: {data.temperament}
      </StyledText>
      <StyledText>
        <Link href={data.cfa_url || data.vetstreet_url}>Click Here</Link>to find out more!
      </StyledText>
    </div>
  </Modal>
);

export default ModalComponent;