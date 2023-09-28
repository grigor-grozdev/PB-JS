function accountBalance(input){
    let index = 0;
    let currentAmount = input[index];
    index++
    let total = 0;

    while(currentAmount !== "NoMoreMoney"){
        let money = Number(currentAmount);
        if (money < 0){
            console.log(`Invalid operation!`);
            break;
        }
        total += money;
        console.log(`Increase: ${(money).toFixed(2)}`);
        currentAmount = input[index];
        index++
    }
    console.log(`Total: ${(total).toFixed(2)}`);
}

accountBalance(["120", "45.55", "-150"])