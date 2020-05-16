import React, { useState } from 'react';
import Wrapper from '../Wrapper';
import Spinner from '../Spinner';
import Form from '../Form';
import Gallery from '../Gallery';
import Temperaments from '../Temperaments';
import { Text, H3 } from '../Typography';
import useFetchData from '../../hooks/useFetchData';
import { filterData, filterByDescription } from '../../utils';

import { StyledSection } from './Home.style';

const Home = () => {
  const [catData, setCatData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [selectedTemperament, setSelectedTemperament] = useState('');
  const [open, setOpen] = useState(false);
  
  useFetchData(catData, userInput, setCatData, setFilteredData);

  const handleOnChange = (e) => {
    setUserInput(e.target.value);
    filterData(setFilteredData, catData, userInput);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setFilteredData(catData);
    setUserInput('');
  };

  const handleTemperamentSelect = (temperament) => {
    filterByDescription(setFilteredData, catData, temperament, setSelectedTemperament);
  };

  return (
    <StyledSection>
      <Wrapper>
        <H3>Click a breed for more information!</H3>
        <Form
          data={catData}
          userInput={userInput}
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
        />
        <Temperaments
          catData={catData}
          handleTemperamentSelect={handleTemperamentSelect}
          selectedTemperament={selectedTemperament}
          open={open}
          setOpen={setOpen}
        />
        {!catData.length && (
          <>
            <Text>Loading Cats...</Text>
            <Spinner catData={catData} />
          </>
        )}
        <Gallery
          data={filteredData}
          handleTemperamentSelect={handleTemperamentSelect}
          setOpen={setOpen}
        />
      </Wrapper>
    </StyledSection>
  );
};
export default Home;
