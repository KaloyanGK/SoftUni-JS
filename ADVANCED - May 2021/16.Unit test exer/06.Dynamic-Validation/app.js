function validate() {
    let element = document.getElementById(`email`);
    let regex = /^[a-z]+@[a-z]+\.[a-z]+/;
    element.addEventListener(`change`, () => {
        if (regex.test(element.value)) {
            element.classList.remove(`error`)
        } else {
            element.classList.add(`error`)

        }
    })

}