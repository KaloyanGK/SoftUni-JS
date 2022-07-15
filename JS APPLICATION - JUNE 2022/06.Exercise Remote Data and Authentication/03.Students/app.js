function solve() {
    const button = document.getElementById(`submit`);
    const url = `http://localhost:3030/jsonstore/collections/students`;
    const tableBody = document.querySelector(`#results tbody`)


    fetch(url)
        .then(res => res.json())
        .then(data => {

            let studentInfo = Object.values(data);
            studentInfo.forEach(student => {
                let firstName = student.firstName;
                let lastName = student.lastName;
                let facultyNumber = student.facultyNumber;
                let grade = student.grade;

                let tr = document.createElement(`tr`);

                let tdFirstName = document.createElement(`td`);
                tdFirstName.textContent = firstName;

                let tdlastName = document.createElement(`td`);
                tdlastName.textContent = lastName;

                let tdfacultyNumber = document.createElement(`td`);
                tdfacultyNumber.textContent = facultyNumber;

                let tdGrade = document.createElement(`td`);
                tdGrade.textContent = grade;

                tr.appendChild(tdFirstName)
                tr.appendChild(tdlastName)
                tr.appendChild(tdfacultyNumber)
                tr.appendChild(tdGrade)
                tableBody.appendChild(tr)


            })
        })
    button.addEventListener(`click`, (e) => {
        e.preventDefault()
        const firstNameInput = document.querySelector(`[name='firstName']`);
        const lastNameInput = document.querySelector(`[name='lastName']`);
        const facultyNumberInput = document.querySelector(`[name='facultyNumber']`);
        const gradeInput = document.querySelector(`[name='grade']`);
        let firstName = firstNameInput.value;
        let lastName = lastNameInput.value;
        let facultyNumber = facultyNumberInput.value;
        let grade = gradeInput.value;
        if (!firstName || !lastName || !facultyNumber || !grade) {
            return
        }
        let object = {
            firstName,
            lastName,
            facultyNumber,
            grade,
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
        firstNameInput.value = ``;
        lastNameInput.value = ``;
        facultyNumberInput.value = ``;
        gradeInput.value = ``;
    })




}
