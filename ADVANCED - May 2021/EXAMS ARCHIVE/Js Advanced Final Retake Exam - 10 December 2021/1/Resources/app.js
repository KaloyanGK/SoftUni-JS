window.addEventListener('load', solve);

function solve() {
    //селектираме инпут полетата
    let productType = document.getElementById(`type-product`);
    let descriptionElement = document.getElementById(`description`);
    let nameInput = document.getElementById(`client-name`);
    let phoneInput = document.getElementById(`client-phone`);
    let sendButton = document.querySelector(`#right button`);
    let receivedSection = document.getElementById(`received-orders`);
    let completedOrders = document.getElementById('completed-orders');
    let clearButton = document.querySelector(`.clear-btn`)
    //създаваме Recived Eventa
    sendButton.addEventListener(`click`, (e) => {
        let product = productType.value;
        let description = descriptionElement.value;
        let name = nameInput.value;
        let phone = phoneInput.value;
        if (product != `` && description != `` && name != `` && phone != ``) {
            e.preventDefault()
            //създаваме нужните елементи    

            let div = document.createElement(`div`);
            div.classList.add(`container`);

            let h2 = document.createElement(`h2`);
            let h3 = document.createElement(`h3`);
            let h4 = document.createElement(`h4`);

            h2.textContent = `Product type for repair: ${product}`;
            h3.textContent = `Client information: ${name}, ${phone}`;
            h4.textContent = `Description of the problem: ${description}`

            let startButton = document.createElement(`button`);
            let finishButton = document.createElement(`button`);

            startButton.classList.add(`start-btn`);
            startButton.textContent = `Start repair`;


            finishButton.classList.add(`finish-btn`);
            finishButton.textContent = `Finish repair`;
            finishButton.disabled = true;

            startButton.addEventListener(`click`, (e) => {
                startButton.disabled = true;
                finishButton.disabled = false;
            });

            finishButton.addEventListener(`click`, (e) => {
                let parent = e.target.parentElement;
                parent.removeChild(parent.lastChild);
                parent.removeChild(parent.lastChild);
                completedOrders.appendChild(parent);

            });

            div.appendChild(h2)
            div.appendChild(h3)
            div.appendChild(h4)
            div.appendChild(startButton)
            div.appendChild(finishButton)
            receivedSection.appendChild(div)

            productType.value = ``;
            descriptionElement.value = ``;
            nameInput.value = ``;
            phoneInput.value = ``;
        }


    });
    clearButton.addEventListener(`click`, (e) => {
        let elements = Array.from(document.querySelectorAll(`#completed-orders .container`));
        for (let el of elements) {
            el.remove()
        }
    })
}
