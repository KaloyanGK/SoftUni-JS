async function getInfo() {


  let inputElement = document.getElementById(`stopId`);
  let ulElement = document.getElementById(`buses`);
  let divElement = document.getElementById(`stopName`);
  let baseUrl = `http://localhost:3030/jsonstore/bus/businfo`;

  fetch(`${baseUrl}/${inputElement.value}`)
    .then(responce => responce.json())
    .then(data => {
      divElement.textContent = data.name;
      ulElement.innerHTML = ``;
      Object.entries(data.buses).forEach(el => {

        let newLi = document.createElement(`li`);
        newLi.textContent = `Bus ${el[0]} arrives in ${el[1]} minutes`;
        ulElement.appendChild(newLi)
      })
    })
    .catch(error => {
      divElement.textContent = `Error`;
      ulElement.innerHTML = ``;

    });



} 
