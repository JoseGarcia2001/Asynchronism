const firstPromise = () => {
  return new Promise((resolve, reject) => {
    if (1) {
      resolve("Solved1");
    } else {
      reject("unsolved");
    }
  });
};

firstPromise()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });

const secondPromise = () => {
  return new Promise((resolve, reject) => {
    if (1) {
      setTimeout(() => {
        resolve("solved2");
      }, 2000);
    } else {
      const error = new Error("unsolved");
      reject(error);
    }
  });
};

secondPromise()
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

Promise.all([firstPromise(), secondPromise()])
  .then((response) => {
    console.log(`array of responses: ${response}`);
  })
  .catch((error) => {
    console.error(error);
  });
