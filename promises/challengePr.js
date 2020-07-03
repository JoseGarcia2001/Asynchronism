const getDataWithAPromise = require("../utils/fetchData2");
const API = "https://rickandmortyapi.com/api/character/";

getDataWithAPromise(API)
  .then((data) => {
    console.log(data.info.pages);
    console.log(data.results[1].name);
    return getDataWithAPromise(data.results[1].origin.url);
  })
  .then((data) => {
    console.log(data.dimension);
  })
  .catch((error) => {
    console.error(error);
  });
