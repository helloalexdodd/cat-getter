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
