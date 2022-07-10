function solve() {

  let arriveBtn = document.getElementById(`arrive`);
  let departBtn = document.getElementById(`depart`);
  let span = document.querySelector(`#info span`);
  let baseUrl = `http://localhost:3030/jsonstore/bus/schedule`;
  let stop = {
    next: `depot`,
  }
  function depart() {
    arriveBtn.disabled = false;
    departBtn.disabled = true;
    fetch(`${baseUrl}/${stop.next}`)
      .then(responce => responce.json())
      .then(data => {
        stop = data;
        span.textContent = `Next stop ${stop.name}`
      })
      .catch(error => span.textContent = `Error`)
  }

  function arrive() {
    span.textContent = `Arriving at ${stop.name}`;

    arriveBtn.disabled = true;
    departBtn.disabled = false;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
