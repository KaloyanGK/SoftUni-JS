function focused() {
    Array.from(document.querySelectorAll(`div div input`)).forEach((el) => {
        el.addEventListener(`focus`, onFocus);
        el.addEventListener(`blur`, onBlur)
    });

    function onFocus(e) {
        e.currentTarget.parentElement.classList.add(`focused`)
    }
    function onBlur(e) {
        e.currentTarget.parentElement.classList.remove(`focused`)

    }
}


