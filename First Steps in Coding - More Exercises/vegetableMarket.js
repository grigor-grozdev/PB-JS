function vegetableMarket(input){
    let priceVegetables = Number(input[0]);
    let priceFruits = Number(input[1]);
    let kgVegetables = Number(input[2]);
    let kgFruits = Number(input[3]);

    let profitBGN = priceVegetables * kgVegetables + priceFruits * kgFruits;
    let profitEUR = profitBGN / 1.94;
    console.log(profitEUR.toFixed(2));
}

vegetableMarket([1.5, 2.5, 10, 10])