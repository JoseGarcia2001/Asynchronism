const getPromise = require("../utils/fetchData2");
const API = "https://rickandmortyapi.com/api/character/";

const challenge = async (url) => {
  try {
    const data = await getPromise(url);
    const data2 = await getPromise(data.results[0].origin.url);
    console.log(data.info.count);
    console.log(data.results[0].name);
    console.log(data2.dimension);
  } catch (error) {
    console.error(error);
  }
};
console.log("before");
challenge(API);
console.log("after");
