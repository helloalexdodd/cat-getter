import React, { useState } from 'react';
import Wrapper from '../Wrapper';
import Spinner from '../Spinner';
import Form from '../Form';
import Gallery from '../Gallery';
import { Text, H3 } from '../Typography';
import useFetchData from '../../hooks/useFetchData';
import { filterData } from '../../utils';

import { StyledSection } from './Home.style';

const Home = () => {
  const [catData, setCatData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [userInput, setUserInput] = useState('');
  
  useFetchData(catData, userInput, setCatData, setFilteredData);

  const handleOnChange = (e) => {
    setUserInput(e.target.value);
    filterData(setFilteredData, catData, userInput);
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
        {!catData.length && (
          <>
            <Text>Loading Cats...</Text>
            <Spinner />
          </>
        )}
        <Gallery data={filteredData} />
      </Wrapper>
    </StyledSection>
  );
};
export default Home;
