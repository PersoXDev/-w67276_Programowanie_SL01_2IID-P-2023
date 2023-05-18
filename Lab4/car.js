class Car{

    constructor(mark, model, age, color, v_max){
        this.mark = mark;
        this.model = model;
        this.age = age;
        this.color = color;
        this.v_max = v_max;
    }

    setV_max(value){
        this.v_max = value;
    }

    printData(){
        console.log("Car(Marka=" + this.mark  +", Model=" +this.model + ", Rok produkcji=" + this.age + ", Kolor=" + this.color + ", Prędkość=" + this.v_max  + " )");
    }

    getAge(){
        return this.age;
    }
}

let car = new Car("Honda", "Civic", 2016, "niebieski", 240);

car.printData();

car.setV_max(420);

car.printData();

console.log("Wiek auta=" + car.getAge());

