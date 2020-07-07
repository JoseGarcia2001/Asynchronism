const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const URL_API = "https://swapi.dev/api/";

const getData = (url, callback) => {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, true);
  xhttp.onreadystatechange = (event) => {
    if (xhttp.readyState === 4) {
      xhttp.status === 200
        ? callback(null, JSON.parse(xhttp.responseText))
        : callback("Error", null);
    }
  };
  xhttp.send();
};

getData(`${URL_API}people/1/`, (error, data) => {
  if (error) {
    console.log(error);
  }
  getData(`${URL_API}planets/3/`, (error1, data1) => {
    if (error1) {
      console.log(error);
    }
    getData(`${URL_API}starships/2/`, (error2, data2) => {
      if (error2) {
        console.log(error);
      }
      console.log(`Soy ${data.name} y mido ${data.height}`);
      console.log(
        `Soy el planeta ${data1.name} y mi diámetro es ${data1.diameter}`
      );
      console.log(
        `Soy la nave ${data2.name} y mi clase es ${data2.starship_class}`
      );
    });
  });
});
