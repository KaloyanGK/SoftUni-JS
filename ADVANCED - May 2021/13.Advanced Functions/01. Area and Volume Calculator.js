function solve(areaFunc, volFunc, input) {

  let data = JSON.parse(input);
  let result = [];
  for (let el of data) {
    let areaResult = areaFunc.apply(el);
    let volumeResult = volFunc.apply(el);

    result.push({
      area: areaResult,
      volume: volumeResult,
    })
  }
  return result;
}
solve(area, vol, `[
  {"x":"1","y":"2","z":"10"},
  {"x":"7","y":"7","z":"10"},
  {"x":"5","y":"2","z":"10"}
  ]`
)

function vol() {

  return Math.abs(this.x * this.y * this.z);
};


function area() {
  return Math.abs(this.x * this.y);
};

