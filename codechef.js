let coins = '1 2 3 4 5 1 2 3 4 5'
let arrayofCoins = coins.split(' ').map(Number);
let stealtheCoin = [];
let min = 1324342343144

let total = arrayofCoins.reduce((a, b) => a + b, 0);
let mean = total / arrayofCoins.length;
console.log(mean)

function steal(arrayofCoins, mean) {

    for (let j = 0; j < arrayofCoins.length - 1; j++) {
        let coinTotal = 0;
        for (let i = 0; i < arrayofCoins.length; i++) {
            if (j == i) {
                i++;
            }
            coinTotal += arrayofCoins[i];

        }
        console.log(coinTotal)


        let coinMean = coinTotal / (arrayofCoins.length - 1);
        console.log(coinMean);
        if (coinMean == mean) {
            stealtheCoin.push(j);

        }
    }


    console.log(stealtheCoin);
    if (stealtheCoin == '') {
        console.log("impossible");
    } else {
        for (let i = 0; i < stealtheCoin.length; i++) {

            if (arrayofCoins[stealtheCoin[i]] < min) {
                min = arrayofCoins[stealtheCoin[i]]
            }

        }
        console.log(min);
        console.log("steal " + (arrayofCoins.indexOf(min) + 1) + "th coin whose value is " + min);

    }
}
steal(arrayofCoins, mean);
