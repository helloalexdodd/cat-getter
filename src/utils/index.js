export const getData = (url) => fetch(url, {
  headers: {
    'x-api-key': process.env.REACT_APP_CAT_API_KEY,
  },
}).then((res) => res.json());

export const filterData = (setFilteredData, catData, userInput) => {
  setFilteredData(catData.filter((breed) => (
    breed.name.toLowerCase().includes(userInput.toLowerCase())
  )));
};

const checker = (array, target) => target.every((item) => array.includes(item));

export const filterByDescription = (setFilteredData, catData, selectedTemperaments) => {
  if (!selectedTemperaments.length) {
    setFilteredData(catData);
  } else {
    const newFilteredBreeds = [];
    catData.forEach((breed) => {
      const breedTemperaments = breed.temperament.split(', ');
      if (checker(breedTemperaments, selectedTemperaments)) {
        newFilteredBreeds.push(breed);
      }
    });
    setFilteredData(newFilteredBreeds);
  }
};
