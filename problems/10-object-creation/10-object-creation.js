/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/
let person = {
    name : 'Aizen',
   age : 35 
};

console.log(person);

function Person(name, age){
    this.name = name;
    this. age = age;
}

let obj = new Person(
    'Ichimaru',
    29
);

console.log(obj);


class SomeClass{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getName(){
        return this.name;
    }
}

let obj1 = new SomeClass('Some Guy', 33);
console.log(obj1);