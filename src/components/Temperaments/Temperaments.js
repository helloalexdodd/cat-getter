import React from 'react';
import PropTypes from 'prop-types';
import Label from '../Label';

import { TemperamentButton, TemperamentButtonsContainer } from './Temperaments.style';

const Temperaments = ({ catData, handleTemperamentSelect }) => {
  const generateTemperamentList = () => {
    const temperaments = catData.reduce((acc, cur) => {
      const temperamentArray = cur.temperament.split(', ');
      temperamentArray.forEach((temp) => {
        if (!acc.includes(temp)) {
          acc.push(temp.charAt(0).toUpperCase() + temp.slice(1));
        }
      });
      return acc;
    }, []);
  
    return temperaments.map((temperament) => (
      <TemperamentButton
        name="temperament"
        onClick={() => {
          handleTemperamentSelect(temperament);
        }}
      >
        {temperament}
      </TemperamentButton>
    ));
  };
    
  return (
    <>
      <Label>or filter here by temperament:</Label>
      <TemperamentButtonsContainer>
        {generateTemperamentList()}
      </TemperamentButtonsContainer>
    </>
  );
};

Temperaments.propTypes = {
  catData: PropTypes.objectOf(
    PropTypes.string,
    PropTypes.number,
  ),
  handleTemperamentSelect: PropTypes.func,
};

export default Temperaments;
