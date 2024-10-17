'use strict';

function calcAge(birthYear){
    const age = 2037 - birthYear;

    function printAge(){
        const output = `${firstName}, you are ${age}, born in ${birthYear}`
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996){
            var millenial = true;
            const string = `Oh, and you're a millenial, ${firstName};`
            console.log(string);
        }
        console.log(millenial);

    }

    printAge();

    return age;
}

const firstName = 'Jonas';
calcAge(1991);

const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function(){
        console.log(this);
        console.log(2037 - this.year);

        const isMillenial = () => {
        console.log(this.year >= 1981 && this.year <= 1996);
        }
        isMillenial();
    }

};

jonas.calcAge();

const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
}

addExpr(2, 5);
addExpr(2, 5, 8, 12);

let age = 30;
let oldAge = age;

age = 31;
console.log(age);
console.log(oldAge);

const me = {
    name: 'Jonas',
    age: 30,
}

const friend = me;
friend.age = 27;

console.log('friend', friend);
console.log('me', me);

// pimitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName);
console.log(oldLastName);

//reference types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

//copying objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice']
};

//object.assign only work in the first level.
const jessicaCopy = Object.assign({}, jessica2)
jessicaCopy.lastName = 'Davis';
console.log(jessica2);
console.log(jessicaCopy);

jessicaCopy.family.push('Mary','John');




