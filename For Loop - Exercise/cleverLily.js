function cleverLily(input){

    let years = Number(input[0]);
    let laundryPrice = Number(input[1]);
    let toysPrice = Number(input[2]);

    let even = 0;
    let odd = 0;
    let sum =0;

    for (let i = 1; i <= years; i++){
        if (i % 2 === 0) {
            even += 1;
            sum = sum + even * 10;
        } else {
            odd += 1;
        }
    }
let totalSum = sum - even + odd * toysPrice;
    if (totalSum >= laundryPrice){
        console.log(`Yes! ${(totalSum - laundryPrice).toFixed(2)}`);
    } else{
        console.log(`No! ${(laundryPrice - totalSum).toFixed(2)}`);
    }
}

cleverLily(["21",

"1570.98",

"3"])