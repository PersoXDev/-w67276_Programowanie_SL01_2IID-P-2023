class Book {
    constructor(title, author, age){
        this.title = title;
        this.author = author;
        this.age = age;
    }

    print(){
        console.log("Tytył: " + this.title + ", Autor: " + this.author + ", Rok wydania: " + this.age)
    }
}

let book = new Book("Maciek", "Tego wariat", 2019);
book.print();
