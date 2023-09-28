function toyShop(input){

    let tripPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let puzzlesTotalPrice = puzzles * 2.60;
    let dollsTotalPrice = dolls * 3;
    let bearsTotalPrice = bears * 4.10;
    let minionsTotalPrice = minions * 8.20;
    let trucksTotalPrice = trucks * 2;

    let allProductsTotalPrice = puzzlesTotalPrice + dollsTotalPrice + bearsTotalPrice + minionsTotalPrice + trucksTotalPrice;

    let allProductsTotalCount = puzzles + dolls + bears + minions + trucks;

    if(allProductsTotalCount >= 50){
        allProductsTotalPrice *= 0.75;
    }
    let totalPriceAfterRent = allProductsTotalPrice * 0.90;

    if(totalPriceAfterRent >= tripPrice){
        console.log(`Yes! ${(totalPriceAfterRent - tripPrice).toFixed(2)} lv left.`);
    } else{
        console.log(`Not enough money! ${(tripPrice - totalPriceAfterRent).toFixed(2)} lv needed.`)
    }
}

toyShop (["320", "8", "2", "5", "5", "1"])