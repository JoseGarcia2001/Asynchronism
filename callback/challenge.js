let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let API = "https://rickandmortyapi.com/api/character/";

function getData(api_url, callback) {
  let xhttp = new XMLHttpRequest();

  xhttp.open("GET", api_url, true);
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = `${new error()} ${api_url}`;
        return callback(error, null);
      }
    }
  };
  xhttp.send();
}

getData(API, function (error1, data1) {
  if (error1) return console.error(error1);
  getData(data1.results[0].origin.url, function (error2, data2) {
    if (error2) return console.error(error2);

    console.log(data1.info.count);
    console.log(data1.results[0].name);
    console.log(data2.dimension);
  });
});
