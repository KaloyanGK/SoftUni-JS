function lockedProfile() {

    let button = document.querySelector(`button`);
    let url = `http://localhost:3030/jsonstore/advanced/profiles`
    button.addEventListener(`click`, (e) => {
        fetch(url)
            .then(responce => responce.json())
            .then(data=>{
                for(let el in data){
                    console.log(data[el]);
                }
            })
    })

}