/* Zadanie 1 */
function changeButtonBackground(id) {
    let button1 = document.getElementById('button1');
    let button2 = document.getElementById('button2');
    let button3 = document.getElementById('button3');

    if(id === 'button1'){
        button1.style.backgroundColor = "green";
        setBackgroundAsDefault(button2, button3)
    }else if(id === 'button2'){
        button2.style.backgroundColor = "red";
        setBackgroundAsDefault(button1, button3)
    }else if(id === 'button3'){
        button3.style.backgroundColor = "blue";
        setBackgroundAsDefault(button1, button2)
    }
}

function setBackgroundAsDefault(element1, element2){
    element1.style.backgroundColor = "buttonface";
    element2.style.backgroundColor = "buttonface";
}

/* Zadanie 2 */

isSuccessful = true;

function submitForm(event){
    event.preventDefault();

    if(!checkLength(event.target['name'].value, 3))
        setCustomValidity("Name is too short!", 'name')

    if(!checkLength(event.target['surname'].value, 3))
        setCustomValidity("Surname is too short!", 'surname')

    if(!isEmailAddress(event.target['email'].value))
        setCustomValidity('Email address is not valid!', 'email')

    if(!checkLength(event.target['password'].value, 6))
        setCustomValidity('Password is too short!', 'password')

    if(!checkPasswords(event.target['password'].value, event.target['password2'].value))
        setCustomValidity('Password are not the same!', 'password2')
}

function checkLength(value, length){
    if(value.length < length) return false
    return true
}

function checkPasswords(password1, password2){
    if(password1 === password2) return true
    return false
}


function setCustomValidity(message, name_element) {
    spanError(name_element, message)
    isSuccessful = false;
}

function spanError(nameOfElement, message){
    let element = document.querySelector("[name=" + nameOfElement +"] + span.error");
    element.innerHTML = message;
}

function isEmailAddress(text){
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(text)) return true;
    return false;
}
let password2 = document.getElementById('password2');

password2.addEventListener("input", () => {
    console.log('value')
})

function save(){
let name = document.getElementById("name1").value;
let lastname = document.getElementById("lastname").value;
let table = document.getElementById("table");

let newRow = table.insertRow();
//create cells
let nameCell = newRow.insertCell();
let lastnameCell = newRow.insertCell();
nameCell.textContent = name;
lastnameCell.textContent = lastname;
}

