const container = document.getElementById('eq');

function addInput() {
    let input = document.createElement('input');
    input.classList.add("form-control");
    input.classList.add("education");
    input.placeholder = "Enter here";



    container.appendChild(input);


}
const contain = document.getElementById('we');

function addCertificates() {
    let field = document.createElement("input");
    field.classList.add("form-control");
    field.classList.add("certificates");
    field.placeholder = "Enter here ";

    contain.appendChild(field);


}

const card = document.getElementById('aq');

function addSkill() {
    let skill = document.createElement("input");

    skill.classList.add("form-control");
    skill.classList.add("skills");
    skill.placeholder = "Enter here ";

    card.appendChild(skill);


}
const project = document.getElementById('pj');

function addProject() {
    let proj = document.createElement("input");

    proj.classList.add("form-control");
    proj.classList.add("projects");
    proj.placeholder = "Enter here ";

    project.appendChild(proj);


}
function generateCV() {
    let name = document.getElementById("name").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = name;
    document.getElementById("nameT2").innerHTML = name;
    document.getElementById("contactT").innerHTML = document.getElementById("contact").value;
    document.getElementById("emailT").innerHTML = document.getElementById("email").value;
    document.getElementById("addressT").innerHTML = document.getElementById("address").value;
    document.getElementById("linkedinT").innerHTML = document.getElementById("linkedin").value;
    document.getElementById("gitT").innerHTML = document.getElementById("git").value;
    document.getElementById("driveT").innerHTML = document.getElementById("drive").value;
    document.getElementById("objectiveT").innerHTML = document.getElementById("objective").value;


    let edu = document.getElementsByClassName("education");

    let str = "";

    for (let e of edu) {
        str += `<li> ${e.value} </li>`;

    }
    document.getElementById('educationT').innerHTML = str;

    let cer = document.getElementsByClassName("certificates");

    let str1 = "";

    for (let e of cer) {
        str1 += `<li> ${e.value} </li>`;

    }
    document.getElementById('certificateT').innerHTML = str1;

    let skl = document.getElementsByClassName("skills");

    let str2 = "";

    for (let e of skl) {
        str2 += `<li> ${e.value} </li>`;

    }
    document.getElementById('skillT').innerHTML = str2;

    let pro = document.getElementsByClassName("projects");

    let str3 = "";

    for (let e of pro) {
        str3 += `<li> ${e.value} </li>`;

    }
    document.getElementById('projectT').innerHTML = str3;



    document.getElementById('cv-form').style.display="none";
    document.getElementById('cv-template').style.display="block";
}

function printCV()
{
   window.print();
    // document.getElementById('btn').style.display="none";
}