import { useEffect } from 'react';
import { getData } from '../utils';

const useFetchData = (catData, userInput, setCatData, setFilteredData) => {
  return useEffect(() => {
    if (!catData.length) {
      getData('https://api.thecatapi.com/v1/breeds').then((data) => {
        setCatData(data)
        setFilteredData(data.filter((breed) => breed.name.toLowerCase().includes(userInput.toLowerCase())));
      });
    } else {
      if (userInput.length) {
        setFilteredData(catData.filter((breed) => breed.name.toLowerCase().includes(userInput.toLowerCase())));
      } else {
        setFilteredData(catData);
      }
    }
  }, [userInput, catData, setCatData, setFilteredData]);
};

export default useFetchData;
