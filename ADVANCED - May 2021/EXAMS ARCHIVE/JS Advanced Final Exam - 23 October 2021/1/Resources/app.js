window.addEventListener('load', solve);

function solve() {
    let genreInput = document.getElementById(`genre`);
    let nameInput = document.getElementById(`name`);
    let authorInput = document.getElementById(`author`);
    let dateInput = document.getElementById(`date`);
    let addBtn = document.getElementById(`add-btn`);
    let collectionDiv = document.querySelector(`.all-hits-container`);
    let totalLikesElem = document.querySelector('.likes > p');
    let savedContainer = document.querySelector(`.saved-container`);



    addBtn.addEventListener(`click`, (e) => {
        e.preventDefault();

        let genre = genreInput.value;
        let name = nameInput.value;
        let author = authorInput.value;
        let date = dateInput.value;
        if (genre != `` && name != `` && author != `` && date != ``) {

            let div = document.createElement(`div`);
            div.classList.add(`hits-info`);

            let img = document.createElement(`img`);
            let h2Genre = document.createElement(`h2`);
            let h2Name = document.createElement(`h2`);
            let h2Author = document.createElement(`h2`);
            let h3Date = document.createElement(`h3`);


            let saveBtn = document.createElement(`button`);
            let likeBtn = document.createElement(`button`);
            let deleteBtn = document.createElement(`button`);


            img.setAttribute('src', './static/img/img.png');


            h2Genre.textContent = `Genre: ${genre}`;

            h2Name.textContent = `Name: ${name}`;


            h2Author.textContent = `Author: ${author}`;
            h3Date.textContent = `Date: ${date}`;



            saveBtn.classList.add(`save-btn`);
            saveBtn.textContent = `Save song`;

            likeBtn.classList.add(`like-btn`);
            likeBtn.textContent = `Like song`;

            deleteBtn.classList.add(`delete-btn`);
            deleteBtn.textContent = `Delete`;



            likeBtn.addEventListener(`click`, (e) => {

                let currLikes = Number(totalLikesElem.textContent.split(': ')[1]);
                currLikes += 1;
                totalLikesElem.textContent = `Total Likes: ${currLikes}`;
                e.currentTarget.disabled = true;
            });

            saveBtn.addEventListener(`click`, (e) => {
                let currentSong = e.target.parentElement;
                currentSong.removeChild(saveBtn);
                currentSong.removeChild(likeBtn);
                savedContainer.appendChild(currentSong);

            });
            deleteBtn.addEventListener(`click`, (e) => {
                e.target.parentElement.remove();
            });


            div.appendChild(img);
            div.appendChild(h2Genre);
            div.appendChild(h2Name);
            div.appendChild(h2Author);
            div.appendChild(h3Date);
            div.appendChild(saveBtn);
            div.appendChild(likeBtn);
            div.appendChild(deleteBtn);

            collectionDiv.appendChild(div)

            genreInput.value = ``;
            nameInput.value = ``;
            authorInput.value = ``;
            dateInput.value = ``;
        }

    });
}