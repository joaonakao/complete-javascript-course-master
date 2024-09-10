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

if(favourite !== 23) console.log ('why not 23?')