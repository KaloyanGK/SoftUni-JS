function solution() {
    let url = `http://localhost:3030/jsonstore/advanced/articles/list`;
    let section = document.getElementById(`main`);



    fetch(url)
        .then(res => res.json())
        .then(data => {
            let info = Object.values(data);
            info.forEach((el, i) => {

                let title = el.title;
                let idElement = el["_id"]
                let mainDiv = document.createElement('div');
                mainDiv.setAttribute('class', 'accordion');

                let firstNestedDiv = document.createElement('div');
                firstNestedDiv.setAttribute('class', 'head');

                let nestedSpanInDiv = document.createElement('span');
                nestedSpanInDiv.textContent = title;

                let nestedButton = document.createElement('button');
                nestedButton.textContent = `More`;
                nestedButton.setAttribute(`id`, idElement)
                nestedButton.setAttribute(`class`, `button`)

                let secondNestedDiv = document.createElement('div');

                secondNestedDiv.setAttribute('class', 'extra');

                let nestedP = document.createElement('p');

                firstNestedDiv.appendChild(nestedSpanInDiv);
                firstNestedDiv.appendChild(nestedButton);

                secondNestedDiv.appendChild(nestedP);

                mainDiv.appendChild(firstNestedDiv);
                mainDiv.appendChild(secondNestedDiv);
                section.appendChild(mainDiv);

                nestedButton.addEventListener(`click`, (e) => {
                    let currentId = e.target.id;
                    let url = `http://localhost:3030/jsonstore/advanced/articles/details/`
                    fetch(`${url}${currentId}`)
                        .then(res => res.json())
                        .then(data => {
                            let content = data.content;
                            if (e.target.textContent == `More`) {
                                e.target.parentElement.parentElement.querySelector('.extra p').textContent = content;
                                e.target.parentElement.parentElement.querySelector('.extra').style.display = `block`;
                                e.target.textContent = 'Less'
                            }else{
                                e.target.parentElement.parentElement.querySelector('.extra').style.display = `none`;
                                e.target.textContent = 'More'
                            }


                        })
                })
            })
        })
}   