import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Label from '../Label';

import {
  AnimationButton,
  TemperamentButtonsContainer,
  ListItem,
  TemperamentButton,
} from './Temperaments.style';

const Temperaments = ({ catData, handleTemperamentSelect }) => {
  const [open, setOpen] = useState(false);
  
  const generateTemperamentList = () => catData.reduce((acc, cur) => {
    const temperamentArray = cur.temperament.split(', ');
    temperamentArray.forEach((temp) => {
      if (!acc.includes(temp)) {
        acc.push(temp.charAt(0).toUpperCase() + temp.slice(1));
      }
    });
    return acc;
  }, []);
    
  return (
    <>
      <Label htmlFor="temperament">or filter here by temperament:</Label>
      <Label
        htmlFor="downArrow"
        className="sr-only"
      >
        click here to see list of temperaments
      </Label>
      <AnimationButton
        name="downArrow"
        id="downArrow"
        onClick={() => setOpen(!open)}
      >
        {open ? '⬆' : '⬇'}
      </AnimationButton>
      <div className="outerContainer">
        <TemperamentButtonsContainer open={open}>
          {open
            ? generateTemperamentList().map((temperament, i) => (
              <ListItem key={`temperament${i + 1}`}>
                <TemperamentButton
                  name="temperament"
                  id="temperament"
                  onClick={() => {
                    handleTemperamentSelect(temperament);
                  }}
                >
                  {temperament}
                </TemperamentButton>
              </ListItem>
            )) : null}
        </TemperamentButtonsContainer>
      </div>
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
