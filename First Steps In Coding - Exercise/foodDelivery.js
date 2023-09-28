function foodDelivery(input){
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegetarianMenu = Number(input[2]);

    let chickenMenuPrice = chickenMenu * 10.35;
    let fishMenuPrice = fishMenu * 12.40;
    let vegetarianMenuPrice = vegetarianMenu * 8.15;
    let totalMenuPrice = chickenMenuPrice + fishMenuPrice + vegetarianMenuPrice;
    let desertPrice = totalMenuPrice * 0.20;
    let orderPrice = totalMenuPrice + desertPrice + 2.50;
    console.log(orderPrice);
}

foodDelivery(["9 ",
"2 ",
"6 "])

//Брой пилешки менюта – цяло число в интервала [0 … 99]
//Брой менюта с риба – цяло число в интервала [0 … 99]
//Брой вегетариански менюта – цяло число в интервала [0 … 99]