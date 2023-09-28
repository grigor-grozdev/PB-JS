function depositCalculator (input){
    let depositAmount = Number(input[0]);
    let depositTime = Number(input[1]);
    let persent = Number(input[2]);

    let finalMoney = depositAmount + depositTime * ((depositAmount * persent/100)/12);
    console.log(finalMoney);
}

depositCalculator (["2350",
"6 ",
"7 "])