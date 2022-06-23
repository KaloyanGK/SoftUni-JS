function solve() {

  let authorInput = document.getElementById(`creator`);
  let titleInput = document.getElementById(`title`);
  let categoryInput = document.getElementById(`category`);
  let contentTextArea = document.getElementById(`content`);

  let createBtn = document.querySelector(`.btn.create`);

  let mainDiv = document.querySelector(`.site-content section`)

  let archive = document.querySelector(`.archive-section`);
  let array = []

  createBtn.addEventListener(`click`, (e) => {
    e.preventDefault()
    let article = document.createElement(`article`);

    let h1 = document.createElement(`h1`);
    h1.textContent = titleInput.value;
    array.push(h1.textContent)
    let pCategory = document.createElement(`p`);
    pCategory.textContent = `Category:`

    let strongCategory = document.createElement(`strong`);
    strongCategory.textContent = categoryInput.value;
    pCategory.appendChild(strongCategory)

    let pCreator = document.createElement(`p`);
    pCreator.textContent = `Creator:`

    let creatorStrong = document.createElement(`strong`);
    creatorStrong.textContent = authorInput.value;
    pCreator.appendChild(creatorStrong)

    let pText = document.createElement(`p`);
    pText.textContent = contentTextArea.value;

    let divBtns = document.createElement(`div`);
    divBtns.classList.add(`buttons`);

    let deleteBtn = document.createElement(`buttons`);
    deleteBtn.classList.add(`btn`)
    deleteBtn.classList.add(`delete`)
    deleteBtn.textContent = `Delete`;



    let archiveBtn = document.createElement(`buttons`);
    archiveBtn.classList.add(`btn`)
    archiveBtn.classList.add(`archive`)
    archiveBtn.textContent = `Archive`;

    divBtns.appendChild(deleteBtn)
    divBtns.appendChild(archiveBtn)

    article.appendChild(h1);
    article.appendChild(pCategory);
    article.appendChild(pCreator);
    article.appendChild(pText);
    article.appendChild(divBtns);


    mainDiv.appendChild(article)
    archiveBtn.addEventListener(`click`, (e) => {
      let liCollection = document.querySelector(`.archive-section ol`);
      array.sort((a, b) => {
        return a.localeCompare(b);
      })
      for (let el of array) {
        let li = document.createElement(`li`);
        li.textContent = el;
        liCollection.appendChild(li)
      }
      

    })


  })
}
