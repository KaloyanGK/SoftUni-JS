function attachEvents() {
  let loadPostsBtn = document.getElementById(`btnLoadPosts`);
  let selectElement = document.getElementById(`posts`);
  let viewBtn = document.getElementById(`btnViewPost`);

  let postsUrl = `http://localhost:3030/jsonstore/blog/posts`;
  let commentsUrl = `http://localhost:3030/jsonstore/blog/comments`;

  loadPostsBtn.addEventListener(`click`, (e) => {
    fetch(postsUrl)
      .then((res) => res.json())
      .then((data) => {
        let info = Object.values(data);
        info.forEach((el) => {
          let title = el.title;
          let id = el.id;
          let optionElement = document.createElement(`option`);
          optionElement.textContent = title;
          optionElement.value = id;
          selectElement.appendChild(optionElement);
        });
      });
  });
}

attachEvents();
