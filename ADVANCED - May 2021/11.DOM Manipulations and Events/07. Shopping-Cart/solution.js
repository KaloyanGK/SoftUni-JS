function solve() {
  let totalPrice = 0;
  let buttons = document.querySelectorAll(`.add-product`);
  let productsList = [];
  let textArea = document.querySelector(`textarea`);
  let allButtons = document.querySelectorAll(`button`);
  for (let el of buttons) {
    el.addEventListener(`click`, function (e) {
      let parentDiv = el.parentElement.parentElement;
      let productName = parentDiv.querySelector(`.product-title`).textContent;
      let productPrice =
        parentDiv.querySelector(`.product-line-price`).textContent;
      if (!productsList.includes(productName)) {
        productsList.push(productName);
      }
      totalPrice += Number(productPrice);
      textArea.textContent += `Added ${productName} for ${productPrice} to the cart.\n`;
    });
  }
  document.querySelector(`.checkout`).addEventListener(`click`, function (e) {
    textArea.textContent += `You bought ${productsList.join(
      `, `
    )} for ${totalPrice.toFixed(2)}.`;
    for (let el of allButtons) {
      el.disabled = true;
    }
  });
}
