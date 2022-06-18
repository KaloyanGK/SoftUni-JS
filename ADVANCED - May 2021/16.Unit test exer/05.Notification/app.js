function notify(message) {
  let div = document.getElementById(`notification`);
  div.textContent = message;
  div.style.display = `block`;

  // setTimeout(() => {
  //   div.style.display = `none`;
  // },2000)
  div.addEventListener(`click`, (e) => {
    e.currentTarget.style.display = `none`;
  })


}
