function focused() {
  
    let divElements = document.querySelectorAll(`div div input`);
    let arrayDivElements = Array.from(divElements);

    for (let el of arrayDivElements) {
        el.addEventListener(`focus`, function (e) {
            e.currentTarget.parentElement.classList.add(`focused`)
        })
    }
    for (let el of arrayDivElements) {
        el.addEventListener(`blur`, function (e) {
            e.currentTarget.parentElement.classList.remove(`focused`)
        })
    }


}