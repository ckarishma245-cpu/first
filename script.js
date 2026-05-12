let students = JSON.parse(localStorage.getItem("students")) || [];

function addStudent(){

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let course = document.getElementById("course").value;

    if(name === "" || roll === "" || course === ""){
        alert("Please fill all fields");
        return;
    }

    let student = {
        name: name,
        roll: roll,
        course: course
    };

    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    showStudents();

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("course").value = "";
}

function showStudents(){

    let table = document.getElementById("studentTable");
    table.innerHTML = "";

    for(let i = 0; i < students.length; i++){

        let row = table.insertRow();

        row.insertCell(0).innerHTML = students[i].name;
        row.insertCell(1).innerHTML = students[i].roll;
        row.insertCell(2).innerHTML = students[i].course;

        row.insertCell(3).innerHTML =
        `<button onclick="deleteStudent(${i})">Delete</button>`;
    }
}

function deleteStudent(index){
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    showStudents();
}

function clearData(){
    students = [];
    localStorage.setItem("students", JSON.stringify(students));
    showStudents();
}

showStudents();