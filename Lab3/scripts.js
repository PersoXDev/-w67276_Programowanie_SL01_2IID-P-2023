function zmienTekst() {
    document.getElementById("tekst").innerHTML = "Czeee bratku!";
    alert("Czeee bratku!")
}

function printNumbers() {
    for (i = 0; i <= 100; i++){
        console.log(i);
    }
}

function addNumbers(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    let result = num1 + num2;

    document.getElementById("result").innerHTML = "Wynik dodawania to " + result;
}

function timer(){
    setInterval(() => {
        let date = new Date();
        document.getElementById("timer").innerHTML = "Time = " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    }, 1000)
}


let attempts = 0;
let randomValue = parseInt(Math.random() * 100);

function check(){
    console.log(randomValue)

    let typedNumber = parseInt(document.getElementById("liczba").value);
    let resultLabel = document.getElementById("wynik");

    attempts++;
    if(typedNumber > randomValue){
        resultLabel.innerHTML = "Podana liczba jest zbyt duza";
    }else if( typedNumber < randomValue){
        resultLabel.innerHTML = "Podana liczba jest zbyt mala";
    }else if(typedNumber === randomValue){
        resultLabel.innerHTML = "Brawo zgadles liczbe w probie nr " + attempts ;
        alert("Brawo zgadles liczbe w probie nr " + attempts);

        setTimeout(() => location.reload(), 3000);
    }
}