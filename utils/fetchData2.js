const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const getDataWithAPromise = (url) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        xhttp.status === 200
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error("error", url));
      }
    };
    xhttp.send();
  });
};

module.exports = getDataWithAPromise;
