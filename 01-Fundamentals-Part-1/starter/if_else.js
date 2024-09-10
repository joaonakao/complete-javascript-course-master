const age = 15;
const isOldEnough = (age >= 18)

if (isOldEnough) {
    console.log ('you can start driving 🚘')
} else {
    const yearsLeft = 18 - age
    console.log (`you can't start driving 🔞. Wait ${yearsLeft} years.`)
}

const birthYear = 2001;
let century;
if (birthYear <= 2000){
    century = 20;
} else {
    century = 21;
}
console.log (century);