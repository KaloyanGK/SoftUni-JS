function addItem() {
    let newElement = document.createElement(`li`);
    let newTextArea = document.getElementById(`newItemText`)
    let itemsList = document.getElementById(`items`);
    newElement.textContent = newTextArea.value;
    itemsList.appendChild(newElement)
    newTextArea.value=` `;

}