class Student{

    constructor(name, lastname, album_number, number1, number2, number3){
        this.name = name;
        this.lastname = lastname;
        this.album_number = album_number;
        this.number1 = number1;
        this.number2 = number2;
        this.number3 = number3;
    }

    countAverage(){
        return (this.number1 + this.number2 + this.number3)/3;
    }

    printData(){
        console.log("Student(Imię=" + this.name + ", nazwisko=" + this.lastname  + ", numer albumu="+  this.album_number + ", średnia ocen=" + this.countAverage() + ")");
    }
}

let student = new Student("Anthony", "Davis", "w67276", 3, 4, 5);
student.printData();