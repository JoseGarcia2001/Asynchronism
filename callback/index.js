function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(5, 8, sum));

function date(callback) {
  console.log(new Date());
  setTimeout(() => {
    let date = new Date();
    callback(date);
  }, 3000);
}

function printDate(date) {
  console.log(date);
}

date(printDate);

function person(name, age, country, callback) {
  let person = {
    name,
    age,
    country,
  };
  callback(person);
}

function printPerson(person) {
  let { name, age, country } = person;
  console.log(`Hola!, Soy ${name} vengo de ${country} y tengo ${age} años`);
}

person("Jose", 18, "Colombia", printPerson);
