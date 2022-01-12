function areaTest(input) {
  let figure = Number(input[0]);

  if(figure === `square`){
    let a = Number(input[1]);
    console.log((a * a).toFixed(3));

  }
}
areaTest(["square", "5"]);
