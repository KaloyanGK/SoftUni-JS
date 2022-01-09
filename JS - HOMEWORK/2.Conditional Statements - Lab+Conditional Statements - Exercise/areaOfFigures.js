function demo(input) {
  let figure = input[0];
  if (figure === `square`) {
    let a = Number(input[1]);
    console.log((a * a).toFixed(3));
  } else if (figure === `rectangle`) {
    let a = Number(input[1]);
    let b = Number(input[2]);
    console.log((a * b).toFixed(3));
  } else if (figure === `circle`) {
    let a = Number(input[1]);
    console.log(( Math.PI * Math.pow(a,2)).toFixed(3));
  } else if (figure === `triangle`) {
    let a = Number(input[1]);
    let ha = Number(input[2]);
    console.log(((a * ha) / 2).toFixed(3));
  }
}
demo(["square", "5"])


