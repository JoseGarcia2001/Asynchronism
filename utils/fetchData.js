let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const fetchData = (api_url) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", api_url, true);
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        xhttp.status === 200
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error("Error ", api_url));
      }
    };
    xhttp.send();
  });
};

module.exports = fetchData;
