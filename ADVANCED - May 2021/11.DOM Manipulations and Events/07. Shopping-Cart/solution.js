function solve() {
   let buttons = Array.from(document.getElementsByClassName(`add-product`));
   let result = document.querySelector(`textarea`);
   let checkoutButton = document.querySelector(`.checkout`);

   let total = 0;
   let productList = []

   for (let el of buttons) {

      el.addEventListener(`click`, function (e) {
         let currentElement = e.currentTarget.parentElement.parentElement;
         let productName = currentElement.querySelector(`.product-title`).textContent;
         let productPrice = Number(currentElement.querySelector(`.product-line-price`).textContent);

         if (!productList.includes(productName)) {
            productList.push(productName)
         }
         result.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
         total += productPrice;

      });

   }

   checkoutButton.addEventListener(`click`, function () {
      result.textContent += `You bought ${productList.join(`, `)} for ${total.toFixed(2)}.`;
   })


}
