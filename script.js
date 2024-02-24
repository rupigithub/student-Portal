studentData = JSON.parse(file.json);

function creatingTable(i){
    const body = document.querySelector("tbody");
    const table = document.querySelector("table");
    let id = document.createElement("td");
    id.innerText = studentData[i].id;
    // body.appendChild(id);
    let name = document.createElement("td");
    let img = document.createElement("img");
    img.src = studentData[i].img_src;
    name.appendChild(img);
    name.innerText = `${studentData[i].first_name + studentData[i].last_name}`;
    // body.appendChild(name);
    let gender = document.createElement("td");
    gender.innerText = studentData[i].gender;
    // body.appendChild(gender);
    let Class = document.createElement("td");
    Class.innerText = studentData[i].class;
    
    let marks = document.createElement("td");
    marks.innerText = studentData[i].marks;
    let passing = document.createElement("td");
    passing.innerText = studentData[i].passing;
    let email = document.createElement("td");
    email.innerText = studentData[i].email;
    body.append(id,name,gender,Class,marks,passing,email);
    table.appendChild(body);
}

studentData.forEach(i => {
    creatingTable(i);
});