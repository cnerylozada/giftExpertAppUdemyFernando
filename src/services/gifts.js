const axios = require("axios");
const { apiUrl, apiKey } = require("../config");

const getGiftBySearch = (input) => {
  return axios
    .get(`${apiUrl}/search?q=${input}&api_key=${apiKey}`)
    .then(({ data: _ }) => {
      return _.data.map(({ images: item }) => item.original.url);
    });
};

module.exports = {
  getGiftBySearch,
};
