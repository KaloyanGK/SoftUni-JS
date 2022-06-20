window.addEventListener("load", solve);

function solve() {
  let modelInput = document.getElementById(`model`);
  let yearInput = document.getElementById(`year`);
  let descriptionTextArea = document.getElementById(`description`);
  let priceInput = document.getElementById(`price`);

  let addButton = document.getElementById(`add`);
  let tbody = document.getElementById(`furniture-list`);

  let totalPrice = document.querySelector(`.total-price`);

  addButton.addEventListener(`click`, (e) => {
    e.preventDefault();
    let model = modelInput.value;
    let year = yearInput.value;
    let description = descriptionTextArea.value;
    let price = priceInput.value;

    if (
      model != `` &&
      description != `` &&
      Number(price) > 0 &&
      Number(year) > 0
    ) {
      let trInfo = document.createElement(`tr`);
      trInfo.classList.add(`info`);

      let tdModel = document.createElement(`td`);
      tdModel.textContent = model;

      let tdModelPrice = document.createElement(`td`);
      tdModelPrice.textContent = Number(price).toFixed(2);

      let tdForButtons = document.createElement(`td`);

      let infoBtn = document.createElement(`button`);
      infoBtn.classList.add(`moreBtn`);
      infoBtn.textContent = `More Info`;

      let buyBtn = document.createElement(`button`);
      buyBtn.classList.add(`buyBtn`);
      buyBtn.textContent = `Buy it`;

      let trHide = document.createElement(`tr`);
      trHide.classList.add(`hide`);

      let tdYear = document.createElement(`td`);
      tdYear.textContent = `Year: ${year}`;

      let tdDesription = document.createElement(`td`);
      tdDesription.textContent = `Description: ${description}`;
      tdDesription.setAttribute(`colspan`, `3`);

      trInfo.appendChild(tdModel);
      trInfo.appendChild(tdModelPrice);

      tdForButtons.appendChild(infoBtn);
      tdForButtons.appendChild(buyBtn);
      trInfo.appendChild(tdForButtons);

      trHide.appendChild(tdYear);
      trHide.appendChild(tdDesription);

      tbody.appendChild(trInfo);
      tbody.appendChild(trHide);

      infoBtn.addEventListener(`click`, (e) => {
        if (infoBtn.textContent == `More Info`) {
          infoBtn.textContent = `Less Info`;
          trHide.style.display = `contents`;
        } else {
          infoBtn.textContent = `More Info`;
          trHide.style.display = `none`;
        }
      });
      buyBtn.addEventListener(`click`, (e) => {
        let curentPrice = Number(totalPrice.textContent);
        totalPrice.textContent = (curentPrice + Number(tdModelPrice.textContent)).toFixed(2);
        e.currentTarget.parentElement.parentElement.remove();
      });
    }

    modelInput.value = ``;
    yearInput.value = ``;
    descriptionTextArea.value = ``;
    priceInput.value = ``;
  });
}
