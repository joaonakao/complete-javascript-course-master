const bill = 40
/*
bill >= 50 && bill <= 300 ? console.log (`The bill was ${bill}, the tip was ${tip = bill * 0.15}, and the total value ${bill + tip}`) : console.log(`The bill was ${bill}, the tip was ${tip = bill * 0.20}, and the total value ${bill + tip}`)
*/

const tip = bill <= 300 && bill >= 50 ? bill *0.15 : bill * 0.2;
console.log (`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)