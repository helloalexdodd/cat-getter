import React from 'react';
import PropTypes from 'prop-types';
import Label from '../Label';

import {
  AnimationButton,
  TemperamentButtonsContainer,
  ListItem,
  TemperamentButton,
  StyledLabel,
} from './Temperaments.style';

const Temperaments = ({
  catData, handleTemperamentSelect, selectedTemperaments, open, setOpen,
}) => {
  const generateTemperamentList = () => catData.reduce((acc, cur) => {
    cur.temperament.split(', ').forEach((temp) => {
      acc.push(temp.charAt(0).toUpperCase() + temp.slice(1));
    });
    return [...new Set(acc)];
  }, []);

  const checkSelectedTemperaments = (temperament) => selectedTemperaments.includes(temperament);
    
  return (
    <>
      <StyledLabel htmlFor="temperament">or filter here by temperament:</StyledLabel>
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
                  selected={checkSelectedTemperaments(temperament)}
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
  catData: PropTypes.arrayOf(
    PropTypes.object,
  ),
  handleTemperamentSelect: PropTypes.func,
  selectedTemperaments: PropTypes.arrayOf(
    PropTypes.string,
  ),
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};

export default Temperaments;
