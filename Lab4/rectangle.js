class Rectangle{

    constructor(a, b){
        this.a = a;
        this.b = b;
    }

    field(){
        return this.a * this.b;

    }

    obwod(){
        return (2 * this.a) + (2 * this.b)
    }

    isSquare(){
        return this.a === this.b
    }

    setA(value){
        this.a = value
    }

    setB(value){
        this.b = value
    }


    print(){
        return "Rectangle(a= " + this.a + ", b=" + this.b + ", pole=" + this.field() + ", obwód=" + this.obwod() + ", czy prostokąt jest kwadratem=" + this.isSquare()  + ")";
    }

}

