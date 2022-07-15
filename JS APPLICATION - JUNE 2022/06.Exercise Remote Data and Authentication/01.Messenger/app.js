function attachEvents() {
    let url = `http://localhost:3030/jsonstore/messenger`;
    let refreshBtn = document.getElementById(`refresh`);
    let sendBtn = document.getElementById(`submit`);

    refreshBtn.addEventListener(`click`, (e) => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                let textArea = document.getElementById(`messages`);
                let array = [];
                let info = Object.values(data);
                info.forEach(el => array.push(`${el.author}: ${el.content}`));
                textArea.value = array.join(`\n`)
            })
            .catch(error => alert(error))
    })
    sendBtn.addEventListener(`click`, (e) => {
        let authorInput = document.querySelector(`[name="author"]`);
        let contentInput = document.querySelector(`[name="content"]`);
        let author = authorInput.value
        let content = contentInput.value
        if (!author || !content) {
            return
        }

        let object = {
            author,
            content,
        }
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(object)
        })
            .then(res => res.json())
            .catch(error => alert(error))
        authorInput.value = ``;
        contentInput.value = ``;
    })

}

attachEvents();