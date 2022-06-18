window.addEventListener("load", solve);

function solve() {
  let titleInput = document.getElementById(`post-title`);
  let categoryInput = document.getElementById(`post-category`);
  let contentInput = document.getElementById(`post-content`);


  let publishButton = document.getElementById(`publish-btn`);
  let ulReviewList = document.getElementById(`review-list`);
  let publishedListUl = document.getElementById(`published-list`);
  let clearButton = document.getElementById(`clear-btn`);

  publishButton.addEventListener(`click`, (e) => {
    if (titleInput.value.length > 0 && categoryInput.value.length > 0 && contentInput.value.length > 0) {

      let newLI = document.createElement(`li`);
      newLI.classList.add(`rpost`);

      let newArticle = document.createElement(`article`);
      let newH4 = document.createElement(`h4`);
      let newCategoryP = document.createElement(`p`);
      let newContentP = document.createElement(`p`);
      let buttonEdit = document.createElement(`button`);
      let buttonApprove = document.createElement(`button`);

      newH4.textContent = titleInput.value;
      newCategoryP.textContent = `Category: ${categoryInput.value}`;
      newContentP.textContent = `Content: ${contentInput.value}`;

      buttonEdit.classList.add(`action-btn`);
      buttonEdit.classList.add(`edit`);
      buttonEdit.textContent = `Edit`;


      buttonApprove.classList.add(`action-btn`);
      buttonApprove.classList.add(`approve`);
      buttonApprove.textContent = `Approve`;

      newArticle.appendChild(newH4);
      newArticle.appendChild(newCategoryP);
      newArticle.appendChild(newContentP);

      newLI.appendChild(newArticle);
      newLI.appendChild(buttonEdit);
      newLI.appendChild(buttonApprove);

      ulReviewList.appendChild(newLI);


      buttonEdit.addEventListener(`click`, (e) => {
        let parent = e.target.parentElement;
        titleInput.value = newH4.textContent;
        categoryInput.value = newCategoryP.textContent.split(`: `)[1];
        contentInput.value = newContentP.textContent.split(`: `)[1];
        // ulReviewList.removeChild(newLI);
        parent.remove()
      });
      buttonApprove.addEventListener(`click`, (e) => {
        let parent = e.target.parentElement;
        parent.removeChild(parent.lastChild);
        parent.removeChild(parent.lastChild);
        publishedListUl.appendChild(parent);

      });
      titleInput.value = ``;
      categoryInput.value = ``;
      contentInput.value = ``;
    }
    clearButton.addEventListener(`click`, (e) => {
       Array.from(publishedListUl.children).forEach(el => el.remove());
    })
  });

}



