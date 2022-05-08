function deleteByEmail() {
  let emailInputElement = document.querySelector(`input[name="email"]`);
  let emailCellElements = document.querySelectorAll(`tr td:nth-of-type(2)`);
  let result = document.getElementById(`result`);
  let emailElements = Array.from(emailCellElements);
  for (let el of emailElements) {
    if (
      el.textContent.includes(emailInputElement.value) &&
      emailInputElement.value !== ``
    ) {
      let parent = el.parentNode;

      //Първи начин
      parent.parentNode.removeChild(parent);

      //Втори начин
      // parent.remove()

      result.textContent = `Deleted.`;
    } else {
      result.textContent = `Not found.`;
    }
  }
  emailInputElement.value = ``;
}
//ако един <sector> има 2 или повече <p> и искаме да изтрием конкретен от тях(примерно втория), как програмата ще разбере кой точно искаме? задаваме му ID?ако да, къде го подаваме като инфо?
