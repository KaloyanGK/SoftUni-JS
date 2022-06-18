function validate() {
    document.getElementById(`company`).addEventListener(`change`, (e) => {
        let companyInfo = document.getElementById(`companyInfo`);
        if (document.getElementById(`company`).checked == false) {
            companyInfo.style.display = `none`;
        } else {
            companyInfo.style.display = `block`;
        }
    });

    document.getElementById(`submit`).addEventListener(`click`, onClick)
    function onClick(e) {
        e.preventDefault();
        let invalidFields = [];
        let checkBox = document.querySelector(`#company`);
        let username = document.getElementById(`username`);
        let usernameReggex = /^[A-Za-z0-9]{3,20}$/;
        if (!usernameReggex.test(username.value)) {
            invalidFields.push(username);
        }
        let email = document.getElementById(`email`);
        let emailRegex = /^[^@.]+@[^@]*\.[^@]+$/;
        if (!emailRegex.test(email.value)) {
            invalidFields.push(email)
        }
        let password = document.getElementById(`password`);
        let confirmPassword = document.getElementById(`confirm-password`);
        let passRegex = /^[\w]{5,15}$/;
        if (
            !passRegex.test(password.value) ||
            confirmPassword.value != password.value
        ) {
            invalidFields.push(password);
            invalidFields.push(confirmPassword);
        }
        if (checkBox.checked) {
            let companyId = document.getElementById(`companyNumber`);
            let companyRegex = /^[0-9]{4}$/;
            if (!companyRegex.test(companyId)) {
                invalidFields.push(companyId);
            }
        }
        invalidFields.forEach((el) => (el.style.borderColor = `red`));
        !invalidFields.length
            ? (document.querySelector(`#valid`).style.display = `block`)
            : (document.querySelector(`#valid`).style.display = `none`);
    }

}
