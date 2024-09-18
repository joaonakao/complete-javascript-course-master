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

// arrays
const friends = ['Michael','Steven','Peter'];
console.log(friends);

const years = new Array(1991,1984,2008);
console.log(years)

console.log(friends[0]);

console.log (friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log (friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Silva', 2037 - 1991,'teacher', friends];
console.log(jonas);

//exercise
const calcAge4 = function(birthYear){
    return 2037 - birthYear;
}
const year = [1990,1967,2002,2010,2018];

const age90 = calcAge4(year[0]);
const age67 = calcAge4(year[1]);
const age18 = calcAge4(year[year.length - 1]);
console.log(age90,age67,age18)

const ages = [calcAge4(year[0]),calcAge4(year[1]),calcAge4(year[year.length - 1])]
console.log(ages)

//basic array operations
const friends1 = ['Michael','Steven','Peter'];
//add elements
const newLength = friends1.push('Jay');
console.log(friends1);
console.log(newLength);

friends1.unshift('John');
console.log(friends1);
//remove elements
friends1.pop() //last
const popped = friends1.pop() 
console.log(popped)
console.log(friends1)

const shifted = friends1.shift(); //first
console.log(shifted);
console.log(friends1);

console.log(friends1.includes('Steven'));
console.log(friends1.includes('Bob'));

if (friends1.includes('Steven')) {
    console.log('You have a friend called Steven');
}

//objects
const jonasObject = {
    firstName: 'Jonas',
    lastName: 'Silva',
    birthYear: 1991,
    job: 'teacher',
    friendsJ: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    calcAge: function(){
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    canDrive: function(){
        if (this.hasDriversLicense) {
            return jonasObject.hasDriversLicense = `a`
        } else {
            return jonasObject.hasDriversLicense = `no`
        }
    },
};
console.log(jonasObject);

console.log(jonasObject.lastName); 
console.log(jonasObject['lastName']);

const nameKey = 'Name';
console.log(jonasObject['first' + nameKey]);
console.log(jonasObject['last' + nameKey]);

/*const interestedIn = prompt('What do you want to know bout Joans? Choose firstName,lastName,age,job and friends')


if(jonas[interestedIn]) {
    console.log (jonasObject[interestedIn]);
} else {
    console.log ('please write one of the options available')
} */

jonasObject.location = 'Portugal';
jonasObject['twitter'] = '@jonassilva';
console.log(jonasObject)

//challenge
console.log (`${jonasObject.firstName} has ${jonasObject.friendsJ.length} friends, and his best friend is called ${jonasObject.friendsJ[0]}`)

console.log (jonasObject.calcAge());

//challenge
console.log(`${jonasObject.firstName} is a ${jonasObject.calcAge()}-year old ${jonasObject.job}, and he has ${jonasObject.canDrive()} driver's license`);

//loop
const types = []

for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);

    types[i] = typeof jonas[i];

    types.push(typeof jonas[i]);
}

console.log(types);

const yearsLoop = [1991,2007,1969,2020];
const agesLoop = [];

for (let i = 0; i < yearsLoop.length; i++){
   agesLoop.push (2037 - yearsLoop[i]);
}
console.log(agesLoop);

//continue and break
console.log('--- ONLY STRINGS ---');
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string')continue;

    console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number')break;

    console.log(jonas[i], typeof jonas[i]);
}

//looping backwards and loops in loops

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++){
    console.log(`----- starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++){
        if(exercise = 1){
            console.log(`exercise ${exercise}:lifting weight repetitions ${rep}`)
        } else if (exercise = 2){
            console.log(`exercise ${exercise}:abs repetitions ${rep}`)
        } else {
            console.log(`exercise ${exercise}:running repetitions ${rep}`)
        }
    }
}
