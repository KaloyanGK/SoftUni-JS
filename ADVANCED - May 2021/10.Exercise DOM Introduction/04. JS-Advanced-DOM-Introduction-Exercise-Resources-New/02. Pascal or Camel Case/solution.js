function solve() {
  let text = document.getElementById('text').value;
  text = text.toLowerCase();
  let casing = document.getElementById('naming-convention').value;
  text = text.split(" ");
  let result = "";
  if (casing == "Camel Case") {
    for (let i = 0; i < text.length; i++) {
      if (i === 0) {
        result += text[i]
      } else {
        result += (text[i][0].toUpperCase() + text[i].slice(1));
      }
    }
  } else if (casing == "Pascal Case") {
    for (let i = 0; i < text.length; i++) {
      result += (text[i][0].toUpperCase() + text[i].slice(1));
    }
  } else {
    return document.getElementById('result').textContent = "Error!";
  }
  document.getElementById('result').textContent = result;
}