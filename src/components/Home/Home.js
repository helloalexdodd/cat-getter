import React, { useState, useEffect } from 'react';
import Wrapper from '../Wrapper';
import Form from '../Form';
import Gallery from '../Gallery';
import { H3 } from '../Typography';
import { StyledSection } from './Home.style';

const Home = ({ data, setData }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    // fetch('https://api.thecatapi.com/v1/breeds', {
    //   headers: {
    //     'x-api-key': process.env.REACT_APP_CAT_API_KEY, 
    //   }
    // }).then((res) => res.json()).then((data) => {
    //   setData(data);
    //   setFilteredData(data);
      // console.log(data)
    // });
  });

  useEffect(() => {
    setFilteredData(data.filter((breed) => breed.name.toLowerCase().includes(userInput.toLowerCase())));
    console.log(data)
  }, [userInput, data]);

  const handleOnChange = (e) => {
    setUserInput(e.target.value);
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
          data={data}
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
