const d1 = 97;
const d2 = 112;
const d3 = 101;

const k1 = 109;
const k2 = 95;
const k3 = 123;

const averageScoreD = (d1 + d2 + d3)/3
const averageScoreK = (k1 + k2 + k3)/3



if (averageScoreD === averageScoreK && averageScoreD >= 100){
    console.log (`you have a draw! The average of both teams were ${averageScoreD} points`)
} else if (averageScoreD > averageScoreK && averageScoreD >= 100) {
    console.log(`The Dolphing team wins with ${averageScoreD} points against ${averageScoreK}`)
} else if (averageScoreK > averageScoreD && averageScoreK >= 100){
    console.log(`The Koalas team wins with ${averageScoreK} points against ${averageScoreD}`)
} else {
    console.log(`No team has reached the minimum 100 points enough for the trophy`)
}


