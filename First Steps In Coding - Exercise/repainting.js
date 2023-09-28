function repainting(input){
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let work = Number(input[3]);

    let priceNylon = (nylon + 2) * 1.50;
    let pricePaint = (paint * 1.10) * 14.50;
    let priceThinner = thinner * 5.00;
    let priceMaterials = priceNylon + pricePaint + priceThinner + 0.40;
    let priceWork = (priceMaterials * 0.30) * work;
    let totalPrice = priceMaterials + priceWork;

    console.log(totalPrice);
}

repainting(["5 ",
"10 ",
"10 ",
"1 "])