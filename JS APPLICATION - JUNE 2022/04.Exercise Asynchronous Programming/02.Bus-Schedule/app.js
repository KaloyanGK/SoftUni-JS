function solve() {
  let departBtn = document.getElementById(`depart`);
  let arriveBtn = document.getElementById(`arrive`);
  let spaneElement = document.querySelector(`#info span`);
  let busStop = {
    next: `depot`,
  };
  function depart() {
    let url = `http://localhost:3030/jsonstore/bus/schedule/${busStop.next}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        busStop = data;
        spaneElement.textContent = `Next stop ${busStop.name}`;
      })
      .catch((error) => (spaneElement.textContent = `Error`));

    departBtn.disabled = true;
    arriveBtn.disabled = false;
  }

  function arrive() {
    spaneElement.textContent = `Arriving at ${busStop.name}`;

    departBtn.disabled = false;
    arriveBtn.disabled = true;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
