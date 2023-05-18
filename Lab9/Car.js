class Car {

    mark;
    model;
    age;
    color;
    v_max;


    constructor(mark, model, age, color, v_max) {
        this.mark = mark;
        this.model = model;
        this.age = age;
        this.color = color;
        this.v_max = v_max;
    }

    print() {
        console.log("Car(Mark = " + this.mark + " Model = " +
        this.model + " Production year " +  this.age + " Color = " + this.color + " V-max = " + this.v_max + ")")
    }

    upSpeed(speed){
        this.v_max += parseInt(speed)
    }

    downSpeed(speed) {
        this.v_max -= parseInt(speed)
    }

}