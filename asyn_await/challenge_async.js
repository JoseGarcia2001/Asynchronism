const getData = require("../utils/fetchData2");
const API = "https://rickandmortyapi.com/api/character/";

const printData = async (url_api) => {
  try {
    const data = await getData(url_api);
    const name = await getData(`${API}${data.results[1].id}`);
    const dimension = await getData(name.origin.url);
    console.log(data.info.count);
    console.log(name.name);
    console.log(dimension.dimension);
  } catch (error) {
    console.error(error);
  }
};

console.log("before");
printData(API);
console.log("after");
