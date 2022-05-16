function addItem() {
    let newText = document.getElementById(`newItemText`);
    let newValue = document.getElementById(`newItemValue`);
    let option = document.createElement(`option`);
    let dropMenu = document.getElementById(`menu`);

    if (newText.value !== `` && newValue.value !== ``) {
        option.textContent = newText.value;
        option.value = newValue.value;
        dropMenu.appendChild(option)

    }
    newText.value = ``;
    newValue.value = ``;

}