function zoomarket (input){
    let countFoodDogs = Number(input[0]);
    let countFoodCats = Number(input[1]);
    let priceDogs = countFoodDogs * 2.50;
    let priceCats = countFoodCats * 4;
    let totalPrice = priceDogs + priceCats;
    console.log(`${totalPrice} lv.`)
}

zoomarket (["13", "9"]);