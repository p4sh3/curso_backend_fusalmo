const promesa1 = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(5);
      console.log(`Número ${5}`);
    }, 5000)
  })
}

const promesa2 = (num) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 2);
      console.log(`Multiplicando ${num} * 2`);
    }, 5000);
  });
};


const promesa3 = (num) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num + 2);
      console.log(`Sumando ${num} + 2`);
    }, 5000);
  });
};


promesa1()
.then(promesa2)
.then(promesa3)
.then(response => {
  console.log(`Resultado final: ${response}`);
})