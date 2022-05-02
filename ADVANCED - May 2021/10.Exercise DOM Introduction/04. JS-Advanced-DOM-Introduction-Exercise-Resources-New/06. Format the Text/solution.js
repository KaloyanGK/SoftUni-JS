function solve() {
  let text = document.getElementById(`input`).value;
  let textArr = text.split(`.`).filter(s => s !== ``);
  let resultDiv = document.getElementById(`output`);

  while (textArr.length > 0) {
    let text = textArr.splice(0, 3).join(`. `) + `.`;
    let p = document.createElement(`p`);
    p.textContent = text;
    resultDiv.appendChild(p)
  }
}