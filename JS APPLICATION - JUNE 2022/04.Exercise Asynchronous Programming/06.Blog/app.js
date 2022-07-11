function attachEvents() {

  let postUrl = `http://localhost:3030/jsonstore/blog/posts`;
  let commentsUrl = `http://localhost:3030/jsonstore/blog/comments`;

  let loadBtn = document.getElementById(`btnLoadPosts`);
  let selectElement = document.getElementById(`posts`);
  let viewBtn = document.getElementById(`btnViewPost`);

  let h1 = document.getElementById('post-title');
  let p = document.getElementById('post-body');
  let ul = document.getElementById('post-comments');

  let posts = [];

  loadBtn.addEventListener(`click`, (e) => {
    fetch(postUrl)
      .then(res => res.json())
      .then(data => {
        let info = Object.values(data);
        info.forEach(el => {
          let optionElement = document.createElement(`option`);
          optionElement.setAttribute(`value`, el.id);
          optionElement.textContent = el.title;
          posts.push(el);
          selectElement.appendChild(optionElement);
        })
      })
    viewBtn.addEventListener(`click`, (e) => {

      fetch(commentsUrl)
        .then(res => res.json())
        .then(data => {
          let value = selectElement.value;
          let currentPost = posts.find(x => x.id == value);
          h1.textContent = currentPost.title;
          p.textContent = currentPost.body;
          Object.values(data).forEach(el => {
            if (el.postId == value) {
                let li = document.createElement('li');
                li.id = value;
                li.textContent = el.text;
                ul.appendChild(li);
            }
        })
        })
    })
  })


}

attachEvents();



