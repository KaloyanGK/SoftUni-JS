function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    let input = JSON.parse(document.querySelector(`#inputs textarea`).value);
    let avarageSalary = 0;
    let totalSalary = 0;
    let currAvgSalary = 0;
    let bestName = ``;
    let output = {};

    for (let el of input) {
      let restourantInfo = el.split(` - `);
      let restorantName = restourantInfo.shift();
      let workersData = restourantInfo[0].split(`, `);

      for (let worker of workersData) {
        let [name, salary] = worker.split(` `);
        if (!output.hasOwnProperty(restorantName)) {
          output[restorantName] = {};
        }
        if (output.hasOwnProperty(restorantName)) {
          output[restorantName][name] = Number(salary);
        }
      }
    }
    let entries = Object.entries(output);

    for (let entry of entries) {
      let key = entry[0];
      let values = Object.entries(entry[1]);

      for (let [name, salary] of values) {
        totalSalary += salary;
      }
      avarageSalary = totalSalary / values.length;
      if (avarageSalary > currAvgSalary) {
        currAvgSalary = avarageSalary;
        bestName = key;
        totalSalary = 0;
      }
    }
    let result = Object.entries(output[bestName]).sort((a, b) => b[1] - a[1]);
    let print = ``;
    result.forEach((w) => (print += `Name: ${w[0]} With Salary: ${w[1]} `));
    document.querySelector(
      `#bestRestaurant p`
    ).textContent = `Name: ${bestName} Average Salary: ${currAvgSalary.toFixed(
      2
    )} Best Salary: ${result[0][1].toFixed(2)}`;
    document.querySelector(`#workers p`).textContent = print;
  }
}
