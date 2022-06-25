window.addEventListener("load", solution);

function solution() {
  let nameInput = document.getElementById(`fname`);
  let emailInput = document.getElementById(`email`);
  let phoneInput = document.getElementById(`phone`);
  let addressInput = document.getElementById(`address`);
  let postalCodeInput = document.getElementById(`code`);

  let ulList = document.getElementById(`infoPreview`);
  let submitBtn = document.getElementById(`submitBTN`);

  let editBtn = document.getElementById(`editBTN`);
  let continueBtn = document.getElementById(`continueBTN`)
  let mainDiv = document.getElementById(`block`);
  submitBtn.addEventListener(`click`, (e) => {
    e.preventDefault(0)
    let name = nameInput.value;
    let email = emailInput.value;
    let phone = phoneInput.value;
    let address = addressInput.value;
    let postalCode = postalCodeInput.value;
    if (name != `` && email != ``) {

      let nameLi = document.createElement(`li`);
      let emailLi = document.createElement(`li`);
      let phoneLi = document.createElement(`li`);
      let addressLi = document.createElement(`li`);
      let postalCodeLi = document.createElement(`li`);

      nameLi.textContent = `Full name: ${name}`;
      emailLi.textContent = `Email: ${email}`;
      phoneLi.textContent = `Phone Number: ${phone}`;
      addressLi.textContent = `Address: ${address}`;
      postalCodeLi.textContent = `Postal Code: ${postalCode}`;


      ulList.appendChild(nameLi);
      ulList.appendChild(emailLi);
      ulList.appendChild(phoneLi);
      ulList.appendChild(addressLi);
      ulList.appendChild(postalCodeLi);


      editBtn.addEventListener(`click`, (e) => {

        nameInput.value = name
        emailInput.value = email
        phoneInput.value = phone
        addressInput.value = address
        postalCodeInput.value = postalCode

        nameInput.disabled = false;
        emailInput.disabled = false;
        phoneInput.disabled = false;
        addressInput.disabled = false;
        postalCodeInput.disabled = false;

        submitBtn.disabled = false;
        editBtn.disabled = true;
        continueBtn.disabled = true;
         ulList.removeChild(nameLi);
        ulList.removeChild(emailLi);
        ulList.removeChild(phoneLi);
        ulList.removeChild(addressLi);
        ulList.removeChild(postalCodeLi);

      });
      continueBtn.addEventListener(`click`, (e) => {
        mainDiv.innerHTML = ``;
        let h3 = document.createElement(`h3`);
        h3.textContent = `Thank you for your reservation!`;
        mainDiv.appendChild(h3)
      });

      nameInput.value = ``;
      emailInput.value = ``;
      phoneInput.value = ``;
      addressInput.value = ``;
      postalCodeInput.value = ``;

      nameInput.disabled = true;
      emailInput.disabled = true;
      phoneInput.disabled = true;
      addressInput.disabled = true;
      postalCodeInput.disabled = true;

      submitBtn.disabled = true;
      editBtn.disabled = false;
      continueBtn.disabled = false;

    }

  })

}
