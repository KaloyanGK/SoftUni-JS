function attachEvents() {

    const url = `http://localhost:3030/jsonstore/phonebook`;
    const loadBtn = document.querySelector(`#btnLoad`);
    const createBtn = document.querySelector(`#btnCreate`);
    const ul = document.querySelector(`#phonebook`);

    loadBtn.addEventListener(`click`, (e) => {
        ul.replaceChildren()
        fetch(url)
            .then(res => res.json())
            .then(data => {

                let personDetails = Object.values(data);
                personDetails.forEach(p => {
                    let li = document.createElement(`li`);
                    let deleteBtn = document.createElement(`button`);

                    deleteBtn.textContent = `Delete`;
                    li.textContent = `${p.person}: ${p.phone}`;
                    li.appendChild(deleteBtn)
                    ul.appendChild(li)


                    deleteBtn.addEventListener(`click`, (e) => {
                        let object = {
                            [p._id]: {
                                person: p.person,
                                phone: p.phone,
                            }

                        }
                        let key = Object.keys(object).join();
                        console.log(key);
                        fetch(`http://localhost:3030/jsonstore/phonebook/${key}`, {
                            method: 'DELETE',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(object)
                        })
                            .then(res => res.json())
                            .catch(error => alert(error))
                    })
                })
            })

    })
    createBtn.addEventListener(`click`, (e) => {
        let personElement = document.querySelector(`#person`);
        let phoneElement = document.querySelector(`#phone`);
        let person = personElement.value;
        let phone = phoneElement.value;
        if (!person || !phone) {
            return
        }
        let object = {
            person,
            phone,
        }
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(object)
        })
            .then(res => res.json())
            .catch(error => alert(error))
        personElement.value = ``;
        phoneElement.value = ``;

    })
}

attachEvents();