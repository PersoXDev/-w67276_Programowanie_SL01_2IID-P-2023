/* Zadanie 1 */
function silnia(size){
    result = 1

    for (i=1; i<= size; i++){
        result *= i;
    }
    console.log(result)
}
silnia(5)

/*Zadanie 2*/

function changeBackground(id){
    let button1 = document.getElementById("button1")
    let button2 = document.getElementById("button2")
    let button3 = document.getElementById("button3")

    if(id == "button1"){
        button1.style.backgroundColor = "red";
        setBackgroundAsDefault(button2, button3);
    }else if(id == "button2"){
        button2.style.backgroundColor = "blue";
        setBackgroundAsDefault(button1, button3);
    }else if(id == "button3"){
        button3.style.backgroundColor = "yellow";
        setBackgroundAsDefault(button1, button2);
    }
}

function setBackgroundAsDefault(element1, element2){
    element1.style.backgroundColor = "buttonface";
    element2.style.backgroundColor = "buttonface";
}

/* Zadanie 3*/

elementIsHidden = false

function hideElement(){
    let element = document.getElementById("element");
    let button = document.getElementById("hideButton");

    if(elementIsHidden){
        element.style.display = "block";
        button.innerHTML = "Hide element!";
        elementIsHidden = false
    }else{
        button.innerHTML = "Show elemenet!";
        element.style.display = "none";
        elementIsHidden = true
    }
}

/* Zadanie 4 */

function addToList(){
    let list = document.getElementById("list");

    let li1 = document.createElement('li');
    li1.textContent = document.getElementById("newValue").value;

    list.appendChild(li1);
}

/* Zadanie 5 */
