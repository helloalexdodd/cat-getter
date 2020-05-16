import { useEffect } from 'react';
import { getData, filterData } from '../utils';

const useFetchData = (catData, userInput, setCatData, setFilteredData) => {
  useEffect(() => {
    if (!catData.length) {
      getData('https://api.thecatapi.com/v1/breeds').then((data) => {
        setCatData(data);
        filterData(setFilteredData, catData, userInput);
      });
    } else if (userInput.length) {
      filterData(setFilteredData, catData, userInput);
    } else {
      setFilteredData(catData);
    }
  }, [userInput, catData, setCatData, setFilteredData]);
};

export default useFetchData;
