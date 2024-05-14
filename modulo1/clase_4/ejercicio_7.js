const dividir = (a, b, callback) =>  {
  if (b === 0) {
    callback("Error, el divisor es 0");
  } else {
    callback(null, a/b);
  }
}



dividir(10,5, (error, resultado) => {
  if(error){
    console.log(error);
  }else {
    console.log(`El resultado es: ${resultado}`);
  }
})