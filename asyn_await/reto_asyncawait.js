const getData = require("../utils/reto_fetch");

const URL_API = "https://swapi.dev/api/";

const printData = async (url) => {
  try {
    const luke = await getData(`${URL_API}people/1/`);
    const planet = await getData(`${URL_API}planets/3/`);
    const starship = await getData(`${URL_API}starships/2/`);

    console.log(`Soy ${luke.name} y mido ${luke.height}`);
    console.log(
      `Soy el planeta ${planet.name} y mi diámetro es ${planet.diameter}`
    );
    console.log(
      `Soy la nave ${starship.name} y mi clase es ${starship.starship_class}`
    );
  } catch (error) {
    console.error(error);
  }
};

printData(URL_API);
