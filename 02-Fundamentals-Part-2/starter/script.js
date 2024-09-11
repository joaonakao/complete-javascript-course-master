// strict mode (shows the errors in the code)
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log ('I can drive');

//functions

function logger(){
    console.log('My name is Jonas');
}

//calling / running / invoking the function
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor (5,0);
console.log (appleJuice);

const appleOrangeJuice = fruitProcessor(2,4);
console.log (appleOrangeJuice);

//functions declarations vs expressions
//function declaration
function calcAge1 (birthYear){
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);
//function expression
const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age2);

//arrow function - usado para codigos de uma linha, nao precisa escrever return e nao precisa de {}
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));

//funcitions calling other functions
function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2,3));


const calcAge = function(birthYear){
    return 2037 - birthYear;
}
const yearUntilRetirement = function(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has been retired for ${-1 * retirement} years `)
        return -1;
    }
}

console.log (yearUntilRetirement(1991, 'Jonas'));
console.log (yearUntilRetirement(1950, 'Mike'));

