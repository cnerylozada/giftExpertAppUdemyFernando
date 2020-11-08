const axios = require("axios");
const { apiUrl, apiKey } = require("../config");

const getGiftBySearch = (input) => {
  return axios
    .get(`${apiUrl}/search?q=${input}&api_key=${apiKey}&limit=6`)
    .then(({ data: _ }) => {
      return _.data.map(({ id, title, images }) => {
        return {
          id: id,
          title: title,
          url: images.original.url,
        };
      });
    });
};

module.exports = {
  getGiftBySearch,
};
