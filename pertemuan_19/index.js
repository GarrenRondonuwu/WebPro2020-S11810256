//Class & Constructor



//const person = {

//    firstName: "Garren",

//    lastName: "Rondonuwu",

//    displayFullName: function () {

//        console.log(`${this.firstName} ${this.lastName}`);

//    },

//};



//person.displayFullName();

class Person {

    constructor(firstName, lastName){

        this.firstName = firstName;

        this.lastName = lastName;

    }


    displayFullName(){

        console.log(`${this.firstName} ${this.lastName}`);

    }

}

const person1 = new Person("Garren", "Rondonuwu");

console.log(person1);

person1.displayFullName();

const person2 = new Person("John", "Doe");

person2.displayFullName();



//Inheritance

class Student extends Person {

    constructor (firstName, lastName, NIM, age){

        super(firstName, lastName);

        this.NIM = NIM; 

        this.age = age

    }

    //Static member

    static sayHello() {

        console.log(`Hello World`);

    }

    displayNIM(){

        console.log(`Your NIM is ${this.NIM}`);

    }

    //Setter dari Getter

    set studentScore(score) {

        this.score = score;

    }

    get studentScore(){

        return this.score;

    }



}

const john = new Student("John", "Doe", "112233");

john.displayFullName();

john.displayNIM();

Student.sayHello();

john.studentScore = 90;

console.log(john.studentScore);