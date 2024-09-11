let js = 'amazing';

console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log (23);

let firstName = 'Bob';
console.log(firstName);
console.log(firstName);
console.log(firstName);

// type conversion (to string, to number and boolean manually)
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear)+18);

console.log(Number('Jonas')); //"Not a Number", invalid number
console.log(typeof NaN);

console.log(String(23));

// type coercion (convert automatically)
console.log ('I am ' + 23 + ' years old') //string + numero, o js converte para string automaicamente
console.log ('23' - '10' - 3); // o operador 'menos' engatilha a conversao de string para numero
console.log('23' * '2');

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('Jonas'))
console.log(Boolean({}))
console.log(Boolean(''))

const money = 0;
if (money) {
    console.log('Dont spend it all')
} else {
    console.log ('You should get a job')
}

let height = 0;
if (height) {
    console.log('height is defined')
} else {
    console.log ('height is UNDEFINED')
}

//equality operators
/* 
const age = 18;
if(age === 18 ) console.log('You just became an adult (strict equality)')
if(age == 18 ) console.log('You just became an adult (loose equality)')

const favourite = Number(prompt ('Whats your favourite number?'));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log ('Cool! 23 is an amazing number!')
} else if (favourite === 7) {
    console.log('7 is also a cool number')
} else if (favourite === 9){
    console.log ('9 is also a cool number')
} else {
    console.log('Number is not a 23 or 7')
}

if(favourite !== 23) console.log ('why not 23?')*/

// logical operators (and, or, not)
const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

/*
 if (hasDriversLicense && hasGoodVision){
    console.log(`Sarah is able to drive`)
} else {
    console.log(`Someone else should drive`)
} 
*/

const isTired = true;
console.log(hasDriversLicense || hasGoodVision ||isTired);
console.log(hasDriversLicense && hasGoodVision &&isTired);

if (hasDriversLicense && hasGoodVision && !isTired){
    console.log(`Sarah is able to drive`)
} else {
    console.log(`Someone else should drive`)
}

// switch statement

const day = 'monday';
switch (day){
    case 'monday': // day === 'monday' 
        console.log ('Plan course structure');
        console.log ('go to coding meetup');
        break;
    case 'tuesday':
        console.log ('Prepara theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write code example');
        break;
    case 'friday':
        console.log ('record videos');
        break
    case 'saturday':
    case 'sunday':
        console.log('enjoy the weekend');
        break;
    default:
        console.log('not a valid day!')
}

if (day === 'monday') { 
    console.log ('Plan course structure');
    console.log ('go to coding meetup');
} else if (day === 'tuesday'){
    console.log ('Prepara theory videos');
} else if (day === 'wedsnesay' || day ==='thursday'){
    console.log('write code example');
} else if (day === 'friday') {
    console.log ('record videos');
} else if (day ==='saturday' || day === 'sunday'){
    console.log('enjoy the weekend');
} else {
    console.log('not a valid day!')
}

// condicional operator '?' (ternary)

const age = 15;
age >= 18 ? console.log('I like to drink wine') :
console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age>=18){
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)
