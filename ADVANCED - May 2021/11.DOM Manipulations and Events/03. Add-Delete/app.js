function addItem() {
    let newLi = document.createElement(`li`);
    let parent = document.getElementById(`items`);
    let text = document.getElementById(`newItemText`).value;
    newLi.textContent = text;
    let deleteElement = document.createElement(`a`);
    deleteElement.href = `#`;
    deleteElement.textContent = `[Delete]`;
    newLi.appendChild(deleteElement)
    parent.appendChild(newLi)
    deleteElement.addEventListener(`click`, function (e) {
        e.currentTarget.parentElement.remove()
    })
}