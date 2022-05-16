function create(input) {
  let mainDiv = document.getElementById(`content`);

  for (el of input) {
    let div = document.createElement(`div`);
    mainDiv.appendChild(div);
    let p = document.createElement(`p`);
    p.textContent = el;
    div.appendChild(p);
    p.style.display = `none`;

    div.addEventListener(`click`, function () {
      if (p.style.display == `block`) {
        p.style.display = `none`;
      } else {
        p.style.display = `block`;
      }
    });
  }
}
