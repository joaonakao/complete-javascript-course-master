const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBmi = markMass / (markHeight ** 2)

const johnBmi = johnMass / (johnHeight ** 2)

console.log (markBmi);
console.log (johnBmi);

const markHigherBMI = (markBmi > johnBmi)

if (markHigherBMI) {
    console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})`)
} else {
    console.log(`John's (${johnBmi}) BMI is higher than Mark's (${markBmi})`)
}