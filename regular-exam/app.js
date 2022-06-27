window.addEventListener("load", solve);

function solve() {
  let makeInput = document.getElementById(`make`);
  let modelInput = document.getElementById(`model`);
  let yearInput = document.getElementById(`year`);
  let fuelInput = document.getElementById(`fuel`);
  let originalCostInput = document.getElementById(`original-cost`);
  let sellingPriceInput = document.getElementById(`selling-price`);

  let publishBtn = document.getElementById(`publish`);
  let tBody = document.getElementById(`table-body`);
  let carsList = document.getElementById(`cars-list`);
  let profit = document.getElementById(`profit`);
  let totalProfit = 0;

  publishBtn.addEventListener(`click`, (e) => {
    e.preventDefault()
    let make = makeInput.value;
    let model = modelInput.value;
    let year = yearInput.value;
    let fuel = fuelInput.value;
    let originalPrice = originalCostInput.value;
    let sellPrice = sellingPriceInput.value;
    if (make != `` && model != `` && year != `` && fuel != `` && originalPrice != `` && sellPrice != `` && Number(sellPrice) > Number(originalPrice)) {
      let tr = document.createElement(`tr`);
      tr.classList.add(`row`);
      let tdMake = document.createElement(`td`);
      let tdModel = document.createElement(`td`);
      let tdYear = document.createElement(`td`);
      let tdFuel = document.createElement(`td`);
      let tdOriginalPrice = document.createElement(`td`);
      let tdSellPrice = document.createElement(`td`);
      let tdButtons = document.createElement(`td`);

      let editBtn = document.createElement(`button`);
      editBtn.classList.add(`action-btn`);
      editBtn.classList.add(`edit`);
      editBtn.textContent = `Edit`;

      let sellBtn = document.createElement(`button`);
      sellBtn.classList.add(`action-btn`);
      sellBtn.classList.add(`sell`);
      sellBtn.textContent = `Sell`;

      tdMake.textContent = make;
      tdModel.textContent = model;
      tdYear.textContent = year;
      tdFuel.textContent = fuel;
      tdOriginalPrice.textContent = originalPrice;
      tdSellPrice.textContent = sellPrice;


      tdButtons.appendChild(editBtn);
      tdButtons.appendChild(sellBtn);
      tr.appendChild(tdMake)
      tr.appendChild(tdModel)
      tr.appendChild(tdYear)
      tr.appendChild(tdFuel)
      tr.appendChild(tdOriginalPrice)
      tr.appendChild(tdSellPrice)
      tr.appendChild(tdButtons)

      tBody.appendChild(tr)

      makeInput.value = ``;
      modelInput.value = ``;
      yearInput.value = ``;
      fuelInput.value = ``;
      originalCostInput.value = ``;
      sellingPriceInput.value = ``;

      editBtn.addEventListener(`click`, (e) => {
        let parent = e.currentTarget.parentElement.parentElement;
        makeInput.value = make;
        modelInput.value = model;
        yearInput.value = year;
        fuelInput.value = fuel;
        originalCostInput.value = originalPrice;
        sellingPriceInput.value = sellPrice;
        parent.remove()
      })

      sellBtn.addEventListener(`click`, (e) => {
        let parent = e.currentTarget.parentElement.parentElement;
        let diffInPrice = Number(sellPrice) - Number(originalPrice)
        let li = document.createElement(`li`)
        li.classList.add(`each-list`);
        let firstSpan = document.createElement(`span`);
        let secondSpan = document.createElement(`span`);
        let thirdSpan = document.createElement(`span`);

        firstSpan.textContent = `${make} ${model}`;
        secondSpan.textContent = `${year}`;
        thirdSpan.textContent = `${diffInPrice}`;

        li.appendChild(firstSpan);
        li.appendChild(secondSpan);
        li.appendChild(thirdSpan);
        carsList.appendChild(li);

        totalProfit += diffInPrice;
        parent.remove()
        profit.textContent = `${totalProfit.toFixed(2)}`
      })

    }
  })
}
