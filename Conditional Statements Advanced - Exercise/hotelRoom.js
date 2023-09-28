function hotelRoom(input){

    let month = input[0];
    let nights = Number(input[1]);

    let priceStudio = 0;
    let priceApp = 0;

    switch(month){
        case "May":
        case "October":
            if(nights <= 7){
                priceStudio = (nights * 50);
                priceApp = (nights * 65);
            } else if(nights <= 14){
                priceStudio = (nights * 50) * 0.95;
                priceApp = (nights * 65);
            } else {
                priceStudio = (nights * 50) * 0.70;
                priceApp = (nights * 65) * 0.90;
            }
            break;
        case "June":
        case "September":
            if(nights <= 14){
                priceStudio = (nights * 75.20);
                priceApp = (nights * 68.70);
            } else {
                priceStudio = (nights * 75.20) * 0.80;
                priceApp = (nights * 68.70) * 0.90;
            }
            break;
        case "July":
        case "August":
            if(nights <= 14){
                priceStudio = (nights * 76);
                priceApp = (nights * 77);
            } else {
                priceStudio = (nights * 76);
                priceApp = (nights * 77) * 0.90;
            }
            break;
    }
console.log(`Apartment: ${priceApp.toFixed(2)} lv.`);
console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
}

hotelRoom(["June",

"14"])