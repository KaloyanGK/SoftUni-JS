function solve() {
    // First step is to take all the html elements
    let userNameInputElement = document.getElementById("recipientName");
    let titleInputElement = document.getElementById("title");
    let messageInputElement = document.getElementById("message");
    let addButtonElement = document.getElementById("add");
    let resetButtonElement = document.getElementById("reset");
    let listUlElement = document.getElementById("list");
    let sendUlElement = document.querySelector(".sent-list");
    let deleteUlElement = document.querySelector(".delete-list");
    let title = "";
    let userName = "";
    // pattern for spaces
    let patternForSpaces = / +/g;
    // event listener for addButton
    addButtonElement.addEventListener("click", (e) => {
        e.preventDefault();
        if (userNameInputElement.value.length > 0 && userNameInputElement.value !=
            (result = patternForSpaces.exec(userNameInputElement.value)) &&
            titleInputElement.value.length > 0 &&
            titleInputElement.value !=
            (result = patternForSpaces.exec(titleInputElement.value)) &&
            messageInputElement.value.length > 0 &&
            messageInputElement.value !=
            (result = patternForSpaces.exec(messageInputElement.value))
        ) {
            let liElementToAppend = document.createElement("li");
            let headingElToApp = document.createElement("h4");
            let secHeadingToApp = headingElToApp.cloneNode();
            let spanToApp = document.createElement("span");
            let divToApp = document.createElement("div");
            let sendButton = document.createElement("button");
            let deleteButton = sendButton.cloneNode();
            headingElToApp.textContent = `Title: ${titleInputElement.value}`;
            title = titleInputElement.value;
            secHeadingToApp.textContent = `Recipient Name: ${userNameInputElement.value}`;
            userName = userNameInputElement.value;
            spanToApp.textContent = messageInputElement.value;
            divToApp.id = "list-action";
            sendButton.id = "send";
            sendButton.type = "submit";
            sendButton.textContent = "Send";
            deleteButton.id = "delete";
            deleteButton.type = "submit";
            deleteButton.textContent = "Delete";
            divToApp.appendChild(sendButton);
            divToApp.appendChild(deleteButton);
            liElementToAppend.appendChild(headingElToApp);
            liElementToAppend.appendChild(secHeadingToApp);
            liElementToAppend.appendChild(spanToApp);
            liElementToAppend.appendChild(divToApp);
            listUlElement.appendChild(liElementToAppend);
            userNameInputElement.value = "";
            titleInputElement.value = "";
            messageInputElement.value = "";
            // event listener for sendButton
            sendButton.addEventListener("click", (e) => {
                e.preventDefault();
                let liEl = document.createElement("li");
                let spanName = document.createElement("span");
                spanName.textContent = `To: ${userName}`;
                let spanTitle = document.createElement("span");
                spanTitle.textContent = `Title: ${title}`;
                let div = document.createElement("div");
                div.className = "btn";
                let secongDeletebutton = document.createElement("button");
                secongDeletebutton.type = "submit";
                secongDeletebutton.className = "delete";
                secongDeletebutton.textContent = "Delete";
                div.appendChild(secongDeletebutton);
                liEl.appendChild(spanName);
                liEl.appendChild(spanTitle);
                liEl.appendChild(div);
                sendUlElement.appendChild(liEl);

                secongDeletebutton.addEventListener("click", (e) => {
                    e.preventDefault();
                    let liEl = document.createElement("li");
                    let firstSpan = document.createElement("span");
                    firstSpan.textContent = `To: ${userName}`;
                    let secSpan = firstSpan.cloneNode();
                    secSpan.textContent = `Title: ${title}`;
                    liEl.appendChild(firstSpan);
                    liEl.appendChild(secSpan);
                    deleteUlElement.appendChild(liEl);
                });

                secongDeletebutton.addEventListener("click", (e) => {
                    e.preventDefault();
                    e.target.parentElement.parentElement.remove();
                });
            });
            // second event for sendButton for removing li item
            sendButton.addEventListener("click", (e) => {
                e.preventDefault();
                e.target.parentElement.parentElement.remove();
            });

            /// event listener for deleteButton in list of mails
            deleteButton.addEventListener("click", (e) => {
                e.preventDefault();
                let liEl = document.createElement("li");
                let firstSpan = document.createElement("span");
                firstSpan.textContent = `To: ${userName}`;
                let secSpan = firstSpan.cloneNode();
                secSpan.textContent = `Title: ${title}`;
                liEl.appendChild(firstSpan);
                liEl.appendChild(secSpan);
                deleteUlElement.appendChild(liEl);
            });

            // second event listener for same deleteButton but with the purpose to delete li item
            deleteButton.addEventListener("click", (e) => {
                e.preventDefault();
                e.target.parentElement.parentElement.remove();
            });
        }
    });

    // event listener for resetButton
    resetButtonElement.addEventListener("click", (e) => {
        e.preventDefault();
        userNameInputElement.value = "";
        titleInputElement.value = "";
        messageInputElement.value = "";
    });
}
solve()