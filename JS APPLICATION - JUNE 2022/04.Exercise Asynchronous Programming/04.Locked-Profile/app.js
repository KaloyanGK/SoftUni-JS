function lockedProfile() {
    let mainDiv = document.getElementById(`main`);
    mainDiv.removeChild(mainDiv.firstElementChild);




    let url = `http://localhost:3030/jsonstore/advanced/profiles`;
    fetch(url)
        .then(responce => responce.json())
        .then(data => {
            let info = Object.values(data)
            //profile Div with class

            info.forEach((el, i) => {
                let username = el.username;
                let email = el.email;
                let age = el.age;

                let profileDiv = document.createElement(`div`);
                profileDiv.classList.add(`profile`);

                let imgElement = document.createElement(`img`);
                imgElement.src = `./iconProfile2.png`;

                imgElement.classList.add(`userIcon`);

                let lockLabel = document.createElement(`label`);
                lockLabel.textContent = `Lock`;

                let lockInput = document.createElement(`input`);
                lockInput.type = `radio`;
                lockInput.name = `user${i + 1}Locked`;
                lockInput.value = `lock`;
                lockInput.checked = true;

                let unlockLabel = document.createElement(`label`);
                unlockLabel.textContent = `Unlock`;

                let unlockInput = document.createElement(`input`);
                unlockInput.type = `radio`;
                unlockInput.name = `user${i + 1}Locked`;
                unlockInput.value = `unlock`;

                let hrElement = document.createElement(`hr`);

                let usernameLabel = document.createElement(`label`);
                usernameLabel.textContent = `Username`

                let usernameInput = document.createElement(`input`);
                usernameInput.type = `text`;
                usernameInput.name = `user${i + 1}Username`;
                usernameInput.value = username;
                usernameInput.disabled = true;
                usernameInput.readOnly = true;

                //HIDDEN DIV
                let hiddenDiv = document.createElement(`div`);
                hiddenDiv.setAttribute(`id`, `user${i + 1}HiddenFields`);
                hiddenDiv.style.display = `none`;

                let secondHrElement = document.createElement(`hr`);

                let emailLabel = document.createElement(`label`);
                emailLabel.textContent = `Email`;

                let emailInput = document.createElement(`input`);
                emailInput.type = `email`;
                emailInput.name = `user${i + 1}Email`;
                emailInput.value = email;
                emailInput.disabled = true;
                emailInput.readOnly = true;

                let ageLabel = document.createElement(`label`);
                ageLabel.textContent = `Age`;

                let ageInput = document.createElement(`input`);
                ageInput.type = `email`;
                ageInput.name = `user${i + 1}Age`;
                ageInput.value = age;
                ageInput.disabled = true;
                ageInput.readOnly = true;

                let buttonElement = document.createElement(`button`);
                buttonElement.textContent = `Show more`;


                //ЗАКАЧАМ ЕЛЕМЕНТИТЕ В ДИВА - "PROFILE";
                profileDiv.appendChild(imgElement)
                profileDiv.appendChild(lockLabel)
                profileDiv.appendChild(lockInput)
                profileDiv.appendChild(unlockLabel)
                profileDiv.appendChild(unlockInput)
                profileDiv.appendChild(hrElement)
                profileDiv.appendChild(usernameLabel)
                profileDiv.appendChild(usernameInput)
                //ЗАКАЧАМ ЕЛЕМЕНТИТЕ В СКРИТИЯ ДИВ
                hiddenDiv.appendChild(secondHrElement);
                hiddenDiv.appendChild(emailLabel);
                hiddenDiv.appendChild(emailInput);
                hiddenDiv.appendChild(ageLabel);
                hiddenDiv.appendChild(ageInput);

                profileDiv.appendChild(hiddenDiv)
                profileDiv.appendChild(buttonElement)

                //ЗАКАЧАМ ДВАТА ДИВА И БУТОНА КЪМ "MAIN" ДИВА 
                mainDiv.appendChild(profileDiv)
                buttonElement.addEventListener(`click`, (e) => {
                    if (e.target.parentElement.querySelector('input[value="unlock"]').checked && e.target.textContent == 'Show more') {
                        e.target.textContent = 'Hide it';
                        e.target.parentElement.querySelector('div').style.display = 'block';
                    } else if (e.target.parentElement.querySelector('input[value="unlock"]').checked && e.target.textContent == 'Hide it') {
                        e.target.textContent = 'Show more'
                        e.target.parentElement.querySelector('div').style.display = 'none';

                    }
                })
            })

        })
}