const dividir = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject("Error, el divisor es 0");
    } else {
      resolve(a / b);
    }
  })
};

dividir(10, 5)
.then(response => {
  console.log(`El resultado es: ${response}`);
})
.catch(error => {
  console.log(error);
})