function focused() {
    let divElements = document.querySelectorAll(`div div input`);
    let arrayDivElements = Array.from(divElements);

    for (let el of arrayDivElements) {

        el.addEventListener(`focus`, onFocus);
        el.addEventListener(`blur`, onBlur)
    }
    function onFocus(e) {
        e.currentTarget.parentElement.classList.add(`focused`)
    }
    function onBlur(e) {
        e.currentTarget.parentElement.classList.remove(`focused`)

    }
}


