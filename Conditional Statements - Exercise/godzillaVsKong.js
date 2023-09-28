function godzillaVsKong(input){
    let budget = Number(input[0]);
    let extras = Number(input[1]);
    let clothing = Number(input[2]);

    let decorPrice = budget * 0.10;
    let clothingPrice = extras * clothing;
    if(extras > 150){
        clothingPrice *= 0.90;
    }

    let totalExpences = decorPrice + clothingPrice;
    if(totalExpences <= budget){
        console.log('Action!');
        console.log(`Wingard starts filming with ${(budget - totalExpences).toFixed(2)} leva left.`);
            }else{
                console.log('Not enough money!');
                console.log(`Wingard needs ${(totalExpences - budget).toFixed(2)} leva more.`);
            }
}

godzillaVsKong(["9587.88",

"222",

"55.68"])