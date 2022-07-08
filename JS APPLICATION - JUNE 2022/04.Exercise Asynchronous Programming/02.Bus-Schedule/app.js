// function solve() {

//   let arriveBtn = document.getElementById(`arrive`);
//   let departBtn = document.getElementById(`depart`);
//   let span = document.querySelector(`#info span`);
//   let baseUrl = `http://localhost:3030/jsonstore/bus/schedule`;
//   let stop = {
//     next: `depot`,
//   }
//   function depart() {
//     arriveBtn.disabled = false;
//     departBtn.disabled = true;
//     fetch(`${baseUrl}/${stop.next}`)
//       .then(responce => responce.json())
//       .then(data => {
//         stop = data;
//         span.textContent = `Next stop ${stop.name}`
//       })
//       .catch(error => span.textContent = `Error`)
//   }

//   function arrive() {
//     span.textContent = `Arriving at ${stop.name}`;

//     arriveBtn.disabled = true;
//     departBtn.disabled = false;
//   }

//   return {
//     depart,
//     arrive,
//   };
// }

// let result = solve();
function solve() {
 
  let spanEl = document.querySelector('#info span');
  let baseUrl = 'http://localhost:3030/jsonstore/bus/schedule';
  let nextStop = 'depot';
  let currStop = '';
  let departButton = document.getElementById('depart');
  let arriveButton = document.getElementById('arrive');

  function depart() {
      fetch(`${baseUrl}/${nextStop}`)
      .then(res => res.json())
      .then(data => {
          spanEl.textContent = `Next stop ${data.name}`;
          currStop = data.name;
          nextStop = data.next;
          departButton.disabled = true;
          arriveButton.disabled = false;
      })
      .catch(err => {
          spanEl.textContent = 'Error';
          departButton.disabled = true;
          arriveButton.disabled = true;
      })
  }

  function arrive() {
      spanEl.textContent = `Arriving at ${currStop}`;
      arriveButton.disabled = true;
      departButton.disabled = false;

  }

  return {
      depart,
      arrive
  };
}

let result = solve();
