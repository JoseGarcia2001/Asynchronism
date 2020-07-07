const getData = require("../utils/reto_fetch");
const URL_API = "https://swapi.dev/api/";

getData(`${URL_API}people/1/`)
  .then((response) => {
    console.log(`Soy ${response.name} y mido ${response.height}`);
    return getData(`${URL_API}planets/3/`);
  })
  .then((response) => {
    console.log(
      `Soy el planeta ${response.name} y mi diámetro es ${response.diameter}`
    );
    return getData(`${URL_API}starships/2/`);
  })
  .then((response) => {
    console.log(
      `Soy la nave ${response.name} y mi clase es ${response.starship_class}`
    );
  });
