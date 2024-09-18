
const forecast = [12, 5, -5, 0, 4]

const printForecast = function(arr){
    let string = '';
    for(let i = 0; i < arr.length; i++){
        string = string + `${arr[i]}C in ${(i+1)} days ... `
    }
    console.log('... ' + string)
}

printForecast(forecast)