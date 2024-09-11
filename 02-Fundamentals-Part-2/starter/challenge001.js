const calcAverage = (s1,s2,s3) => (s1+s2+s3) / 3;

let avgDolphins = calcAverage (44,23,71) 
let avgKoalas = calcAverage (65,54,49)


const checkWinner = function (avgDolphins, avgKoalas){

    if (avgDolphins >= 2*avgKoalas){
        console.log (`Dolphins win (${avgDolphins} vs ${avgKoalas})`)

    } else if (avgKoalas >= 2*avgDolphins){
        console.log (`Koalas win (${avgKoalas} vs ${avgDolphins})`)

    } else {
        console.log ('no one wins')
    }
}
console.log(avgDolphins, avgKoalas)
checkWinner(avgDolphins, avgKoalas)

avgDolphins = calcAverage (85,54,41) 
avgKoalas = calcAverage (23,34,27)

console.log(avgDolphins, avgKoalas)
checkWinner(avgDolphins,avgKoalas)




