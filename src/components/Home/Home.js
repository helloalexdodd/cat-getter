import React, { useState } from 'react';
import Wrapper from '../Wrapper';
import Form from '../Form';
import Gallery from '../Gallery';
import { H3 } from '../Typography';
import useFetchData from '../../hooks/useFetchData';

import { StyledSection } from './Home.style';

const Home = () => {
  const [catData, setCatData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [userInput, setUserInput] = useState('');

  useFetchData(catData, userInput, setCatData, setFilteredData);

  const handleOnChange = (e) => {
    setUserInput(e.target.value);
    setFilteredData(catData.filter((breed) => breed.name.toLowerCase().includes(userInput.toLowerCase())));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setUserInput('');
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
        <Gallery data={filteredData} />
      </Wrapper>
    </StyledSection>
  );
};
export default Home;
