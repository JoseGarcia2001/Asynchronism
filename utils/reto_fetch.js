const fetchData = require("./fetchData");

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const getData = (url) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        xhttp.status === 200
          ? resolve(JSON.parse(xhttp.responseText))
          : reject("error");
      }
    };
    xhttp.send();
  });
};

module.exports = getData;
