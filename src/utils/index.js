export const getData = (url, q) => {
  return fetch(url, {
    headers: {
      'x-api-key': process.env.REACT_APP_CAT_API_KEY, 
    },
  }).then((res) => res.json());
};
