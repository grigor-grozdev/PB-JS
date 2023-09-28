function basketballEquipment(input){
    let anualFee = Number(input[0]);
    let shoes = anualFee * 0.60;
    let clothes = shoes * 0.80;
    let ball = clothes / 4;
    let accessories = ball / 5;

    let totalPrice = anualFee + shoes + clothes + ball + accessories;
    console.log(totalPrice);
}

basketballEquipment(["550"]);