const getData = () => {
  return new Promise((resolve, reject) => {
    true ? setTimeout(() => resolve("solved"), 2000) : reject("error");
  });
};

const printData = async () => {
  const data = await getData();
  console.log(data);
};

console.log("nice");
printData();

const printData2 = async () => {
  try {
    console.log("holi");
    const data = await getData();
    console.log(data);
    console.log("Holi2:v");
  } catch (error) {
    console.log(error);
  }
};

console.log("nice");
printData2();
