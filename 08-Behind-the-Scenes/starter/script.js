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
    year: 1991,
    calcAge: function(){
        console.log(this);
        console.log(2037 - this.year);
    }
};

jonas.calcAge();

const matilda = {
    year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;

f();