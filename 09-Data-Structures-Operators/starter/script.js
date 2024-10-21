'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

const openingHours ={
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,

  order(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}){
    console.log(`order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta(ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

};
console.log(restaurant);

const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];

//for-of loop
for (const item of menu2) console.log(item);

for (const [i,el] of menu2.entries()) {
  console.log(`${i + 1} : ${el}`);
}


//array Iterator
//console.log([...menu2.entries()]);

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// OR assignment operator ||=

//nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

restaurant.orderPizza('mush', 'onion', 'olive')

//SPREAD, bcs on the right side of =
const arr2 = [1,2,...[3,4]];

//REST bcs on the left side of =
const [f, g, ...others] = [1,2,3,4,5];
console.log(f, g, others);

const [pizza,,Risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, Risotto, otherFood);

restaurant.orderDelivery({
  time:'22:30',
  address: 'duque de caxias 1338',
  mainIndex: 2,
  starterIndex: 2,
})

//const ingredients = [prompt(`Let's make pasta! Ingredient 1?`), prompt(`Let's make pasta! Ingredient 2?`), prompt(`Let's make pasta! Ingredient 3?`)];

//console.log(ingredients);

//restaurant.orderPasta(...ingredients);

// objects
const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Giuseppe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name);
console.log(restaurantCopy.name);

///
const arr1 = [7,8,9];
const badNewArr = [1,2,arr1[0],arr1[1], arr1[2]];
console.log(badNewArr);
// the spread operator '...', only use when you have to write many values separated by virgula
const newArr = [1,2, ...arr1];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(...newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];
//join 2 arrays
const menu1 = [...restaurant.mainMenu,...restaurant.starterMenu];
console.log(menu1);

//iterables: arrays, strings, maps, sets. !objects
const str = 'Jonas';
const letters = [...str];
console.log(letters);


//object destructuring
//const {name, openingHours, categories} = restaurant;

//console.log(name, openingHours, categories);

//const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
//console.log(restaurantName, hours, tags);

const {menu = [], starterMenu: starters = []} = restaurant

console.log(menu, starters);

//mutating variables
let s = 111;
let t = 999;
const obj = {s: 23, t: 7, u: 14};

({s, t} = obj);
console.log(s, t);

//nested objects
const {fri: {open: o, close: d}} = openingHours
console.log(o, d);

//optional chaining (?.)








//descruturing is unpack values of and array into separable variables, breakdown a complex structure into a smaller structure

const arr = [2,3,4];

//without destructuring
const a = arr[0];
const b = arr[1];
const c = arr[2];

//with descruturing; square brackets on the left side
const [x,y,z] = arr;
console.log(x,y,z);
console.log(arr);

let [main, ,secondary] = restaurant.categories
console.log(main, secondary);

//const temp = main;
//main = secondary;
//secondary = temp;

//console.log(main, secondary);

[secondary, main] = restaurant.order(2, 0)
console.log(main, secondary);

//nested destructuring
const nested = [2,4, [5, 6]];

const [i, ,[j,k]] = nested;
console.log(i, j, k);

//default values
const [p = 1,q = 1,r = 1] = [8,9];
console.log(p,q,r);

//logic operators. can use any data type, return any data type, short-circuiting
console.log(3 || 'Jonas');
console.log(''||'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('----- AND -----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'Jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza ('mushrooms', 'spinach')

