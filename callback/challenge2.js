const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://rickandmortyapi.com/api/character/";

const getInfo = (url, callback) => {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, true);
  xhttp.onreadystatechange = (event) => {
    if (xhttp.readyState === 4) {
      xhttp.status === 200
        ? callback(null, JSON.parse(xhttp.responseText))
        : callback("error", null);
    }
  };
  xhttp.send();
};

getInfo(API, (error1, data1) => {
  if (error1) {
    console.error(error1);
  }
  getInfo(data1.results[1].origin.url, (error2, data2) => {
    if (error2) {
      console.error(error2);
    }
    console.log(data1.info.pages);
    console.log(data1.results[1].name);
    console.log(data2.dimension);
  });
});
