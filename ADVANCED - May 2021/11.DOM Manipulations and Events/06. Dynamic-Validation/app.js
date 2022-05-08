function validate() {
    document.getElementById(`email`).addEventListener(`change`, onChange);

    function onChange(e) {
        let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
        let email = e.target.value;
        if (pattern.test(email)) {
            e.target.classList.remove(`error`);
        } else {
            e.target.classList.add(`error`);
        }
    }
}
