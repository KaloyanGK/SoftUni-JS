function solve() {
 
    // first getting all the html elements to work with
    let firstNameInput = document.getElementById('fname');
    let secondNameInput = document.getElementById('lname');
    let emailInput = document.getElementById('email');
    let birthInput = document.getElementById('birth');
    let positionInput = document.getElementById('position');
    let salaryInput = document.getElementById('salary');
    let addWorkerButton = document.getElementById('add-worker');
    let tableBodyEl = document.getElementById('tbody');
    let spanElForSalary = document.getElementById('sum');
    //
 
    // create a variable wich you can use for calculate the salaries
    let finalSum = 0;
    //
 
    addWorkerButton.addEventListener('click', adding);
 
    function adding(e) {
        if (firstNameInput.value !== '' && secondNameInput.value !== '' && emailInput.value !== '' && birthInput.value !== '' && positionInput.value !== '' && salaryInput.value !== '') {
            e.preventDefault();
            // create html elements by using them later in event listeners
            let tableRow = document.createElement('tr');
            let tdFirstName = document.createElement('td');
            let tdLastName = document.createElement('td');
            let tdEmail = document.createElement('td');
            let tdBirth = document.createElement('td');
            let tdPosition = document.createElement('td');
            let tdSalary = document.createElement('td');
            let firedButton = document.createElement('button');
            firedButton.textContent = 'Fired';
            let editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            let tdForButtons = document.createElement('td');
            //
            tdFirstName.textContent = firstNameInput.value;
            tdLastName.textContent = secondNameInput.value;
            tdEmail.textContent = emailInput.value;
            tdBirth.textContent = birthInput.value;
            tdPosition.textContent = positionInput.value;
            tdSalary.textContent = salaryInput.value;
            firedButton.classList.add('fired');
            editButton.classList.add('edit');
            tdForButtons.appendChild(firedButton);
            tdForButtons.appendChild(editButton);
            tableRow.appendChild(tdFirstName);
            tableRow.appendChild(tdLastName);
            tableRow.appendChild(tdEmail);
            tableRow.appendChild(tdBirth);
            tableRow.appendChild(tdPosition);
            tableRow.appendChild(tdSalary);
            tableRow.appendChild(tdForButtons);
            tableBodyEl.appendChild(tableRow);
            let currSalary = Number(salaryInput.value);
            finalSum += currSalary;
            spanElForSalary.innerHTML = finalSum.toFixed(2);
            firstNameInput.value = '';
            secondNameInput.value = '';
            emailInput.value = '';
            birthInput.value = '';
            positionInput.value = '';
            salaryInput.value = '';
 
            editButton.addEventListener('click', edit);
 
            function edit(e) {
                let childOfTableRow = Array.from(e.target.parentElement.parentElement.children);
                let counter = 0;
                let currWorkerSalary = 0;
                for (let el of childOfTableRow) {
                    counter++;
                    if (counter == 1) {
                        firstNameInput.value = el.textContent;
                    } else if (counter == 2) {
                        secondNameInput.value = el.textContent;
                    } else if (counter == 3) {
                        emailInput.value = el.textContent;
                    }else if (counter == 4) {
                        birthInput.value = el.textContent;
                    }else if (counter == 5) {
                        positionInput.value = el.textContent;
                    }else if (counter == 6) {
                        salaryInput.value = el.textContent;
                        currWorkerSalary = Number(el.textContent);
                    }
                }
                let currSum = Number(spanElForSalary.textContent);
                let result = currSum - currWorkerSalary;
                finalSum = result;
                spanElForSalary.textContent = finalSum.toFixed(2);
                e.target.parentElement.parentElement.remove();
            }
 
            firedButton.addEventListener('click', fired);
 
            function fired(e) {
                let firedWorkerSalary = Number(e.target.parentElement.parentElement.querySelector('td:nth-child(6)').textContent);
                let currSum = Number(spanElForSalary.textContent);
                let result = currSum - firedWorkerSalary;
                finalSum = result;
                spanElForSalary.textContent = finalSum.toFixed(2);
                e.target.parentElement.parentElement.remove();
            }
        }
 
       
    }
 
 
}
solve()