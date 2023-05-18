let isSuccessFull = true
function submitForm(event){
    event.preventDefault();

    if(!isNotEmpty(event.target['name'].value))
        setCustomValidity("Name shouldn't be empty!", "name")

    if(!isNotEmpty(event.target['lastname'].value))
        setCustomValidity("Lastname shouldn't be empty!", "lastname")

    if(!isEmailAddress(event.target["email"].value))
        setCustomValidity("Email address is not valid!", "email")

    if(!checkLength(8, event.target['number'].value) && phoneRegex(event.target['number'].value))
        setCustomValidity("Phone number is not valid", "number")

    if(!isNotEmpty(event.target['country'].value))
        setCustomValidity("Country shouldn't be empty!", "country");

    let userBirthDay = event.target['birthday'].value
    if(!isNotEmpty(userBirthDay))
        setCustomValidity("Birthday shouldn't be empty", "birthday")
    else if(checkUserAge(userBirthDay))
        setCustomValidity("Jesteś pełnoletni!", "birthday")
    else
        setCustomValidity("Nie jesteś pełnoletni!", "birthday")

    if(!checkLength(8, event.target['password'].value))
        setCustomValidity("Password min length is 8 characters!", "password")
    console.log(checkPasswordStrength(event.target['password']));

    if(!checkPasswords(event.target['password'].value, event.target['password2'].value)){
        setCustomValidity("Password are not the same!", "password2")
    }

    if(isSuccessFull){
        alert("Everything is correct!");
    }

}

function checkLength(minLength, text){
    if(text.length > minLength) return true;
    return false;
}

function isNotEmpty(text){
    if(text.length > 0) return true;
    return false;
}

function isEmailAddress(text){
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(text)) return true;
    return false;
}

function checkPasswordStrength(password){
    if(password.length > 12)
        return "Silne hasło!";
    else if(password.length > 8)
        return "Hasło o średniej mocy!";
    else
        return "Słabe hasło!";
}

function setCustomValidity(error, nameOfElement){
    /* Zadanie 2 */
    //alert(error)
    spanError(nameOfElement, error)
    isSuccessFull = false;
}

/* Zadanie 3 */
function spanError(nameOfElement, message){
    let element = document.querySelector("[name=" + nameOfElement +"] + span.error");
    element.innerHTML = message;
}

function successfulMessage(){
    //TODO :::
}

function checkUserAge(age){
    const date = new Date(age);
    return (new Date().getYear() - date.getYear()) >= 18;
}

/* Zadanie 5*/
function checkPasswords(password, password2){
    return password === password2;
}

/* Zadanie 6*/
let countryInput = document.getElementById("country");
countryInput.addEventListener('change', () => {
    let state = document.getElementById("state");
    if(countryInput.value.toLowerCase() === "polska" || countryInput.value.toLowerCase() === "poland"){
        let state_div = document.getElementById('state_div');
        state.hidden = true;

        let selectTag = document.createElement('select');
        state_div.appendChild(selectTag);

    }else{
        state.disabled = false;
    }

    document.getElementById("address").disabled = false;
})

let checkbox = document.getElementById("checkbox1");
let address2 = document.getElementById("address2");
let address2_label = document.getElementById("label_address2");
checkbox.addEventListener('change', () => {
    if(!checkbox.checked){
        address2.hidden = false;
        address2_label.hidden = false;
        address2.disabled = false;
        address2_label.disabled = false;
    }else{
        address2.hidden = true;
        address2_label.hidden = true;
        address2.disabled = true;
        address2_label.disabled = true;
    }
})

/* Zadanie 8*/
function phoneRegex(phoneNumber ) {
    if(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phoneNumber)){
        return true;
    }
    return false;
}

