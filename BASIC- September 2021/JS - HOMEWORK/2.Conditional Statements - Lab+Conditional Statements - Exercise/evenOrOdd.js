function evenOrOdd(input) {
  let a = Number(input[0]);
  let b = a % 2;
  if(b === 0){
      console.log(`even`);
  }else {
      console.log(`odd`)
  }
}
evenOrOdd(["2"]);
