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

export const filterByDescription = (setFilteredData, catData, selectedTemperaments) => {
  const newFilteredBreeds = [];
  catData.forEach((breed) => {
    // eslint-disable-next-line array-callback-return
    breed.temperament.split(', ').some((temperament) => {
      selectedTemperaments.forEach((selectedTemperament) => {
        if (selectedTemperament === temperament) {
          newFilteredBreeds.push(breed);
        }
      });
    });
  });
  setFilteredData(newFilteredBreeds);
};
