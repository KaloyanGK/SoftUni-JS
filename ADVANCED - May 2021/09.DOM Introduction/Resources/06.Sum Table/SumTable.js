function sumTable() {
    let items = document.querySelectorAll('tr td:nth-of-type(2)')
    let itemsArray = Array.from(items)
    itemsArray.pop();
    let sum = 0;
    for (el of itemsArray) {
        sum += Number(el.textContent);
    }

    let result = document.getElementById(`sum`);
    result.textContent = sum;

}