// strict mode (shows the errors in the code)
"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

//functions

function logger() {
  console.log("My name is Jonas");
}

//calling / running / invoking the function
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//functions declarations vs expressions
//function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);
//function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age2);

//arrow function - usado para codigos de uma linha, nao precisa escrever return e nao precisa de {}
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));

//funcitions calling other functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const yearUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has been retired for ${-1 * retirement} years `);
    return -1;
  }
};

console.log(yearUntilRetirement(1991, "Jonas"));
console.log(yearUntilRetirement(1950, "Mike"));

// arrays
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 1984, 2008);
console.log(years);

console.log(friends[0]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "Silva", 2037 - 1991, "teacher", friends];
console.log(jonas);

//exercise
const calcAge4 = function (birthYear) {
  return 2037 - birthYear;
};
const year = [1990, 1967, 2002, 2010, 2018];

const age90 = calcAge4(year[0]);
const age67 = calcAge4(year[1]);
const age18 = calcAge4(year[year.length - 1]);
console.log(age90, age67, age18);

const ages = [
  calcAge4(year[0]),
  calcAge4(year[1]),
  calcAge4(year[year.length - 1]),
];
console.log(ages);

//basic array operations
const friends1 = ["Michael", "Steven", "Peter"];
//add elements
const newLength = friends1.push("Jay");
console.log(friends1);
console.log(newLength);

friends1.unshift("John");
console.log(friends1);
//remove elements
friends1.pop(); //last
const popped = friends1.pop();
console.log(popped);
console.log(friends1);

const shifted = friends1.shift(); //first
console.log(shifted);
console.log(friends1);

console.log(friends1.includes("Steven"));
console.log(friends1.includes("Bob"));

if (friends1.includes("Steven")) {
  console.log("You have a friend called Steven");
}

//objects
const jonasObject = {
  firstName: "Jonas",
  lastName: "Silva",
  birthYear: 1991,
  job: "teacher",
  friendsJ: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  canDrive: function () {
    if (this.hasDriversLicense) {
      return (jonasObject.hasDriversLicense = `a`);
    } else {
      return (jonasObject.hasDriversLicense = `no`);
    }
  },
};
console.log(jonasObject);

console.log(jonasObject.lastName);
console.log(jonasObject["lastName"]);

const nameKey = "Name";
console.log(jonasObject["first" + nameKey]);
console.log(jonasObject["last" + nameKey]);

/*const interestedIn = prompt('What do you want to know bout Joans? Choose firstName,lastName,age,job and friends')


if(jonas[interestedIn]) {
    console.log (jonasObject[interestedIn]);
} else {
    console.log ('please write one of the options available')
} */

jonasObject.location = "Portugal";
jonasObject["twitter"] = "@jonassilva";
console.log(jonasObject);

//challenge
console.log(
  `${jonasObject.firstName} has ${jonasObject.friendsJ.length} friends, and his best friend is called ${jonasObject.friendsJ[0]}`
);

console.log(jonasObject.calcAge());

//challenge
console.log(
  `${jonasObject.firstName} is a ${jonasObject.calcAge()}-year old ${
    jonasObject.job
  }, and he has ${jonasObject.canDrive()} driver's license`
);

//for loop
const types = [];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);

  types[i] = typeof jonas[i];

  types.push(typeof jonas[i]);
}

console.log(types);

const yearsLoop = [1991, 2007, 1969, 2020];
const agesLoop = [];

for (let i = 0; i < yearsLoop.length; i++) {
  agesLoop.push(2037 - yearsLoop[i]);
}
console.log(agesLoop);

//continue and break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;

  console.log(jonas[i], typeof jonas[i]);
}

//looping backwards and loops in loops

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----- starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    if (exercise === 1) {
      console.log(`exercise ${exercise}:lifting weight repetitions ${rep}`);
    } else if (exercise === 2) {
      console.log(`exercise ${exercise}:abs repetitions ${rep}`);
    } else {
      console.log(`exercise ${exercise}:running repetitions ${rep}`);
    }
  }
}

//while loop (bom para quando nao se sabe quantas vezes o loop ira acontecer, ou seja, nao precisa e um contador)

let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`loop is about to end...`);
}

// using google stackoverflow and mdn to solve problems
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
//

const calcTempAmplitudeNew = function (t1, t2) {
  const array1 = ["a", "b", "c"];
  const array2 = ["d", "e", "f"];
  const array3 = array1.concat(array2);

  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

// debugging
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: 10,
  };
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());

//
