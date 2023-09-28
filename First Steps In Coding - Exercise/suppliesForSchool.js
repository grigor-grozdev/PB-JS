function suppliesForSchool(input){
    let pckgsPens = Number(input[0]);
    let pckgsMarkers = Number(input[1]);
    let boardCleaner = Number(input[2]);
    let percent = Number(input[3]);

    let pricePens = pckgsPens * 5.80;
    let priceMarkers = pckgsMarkers * 7.20;
    let priceCleaner = boardCleaner * 1.20;

    let price = pricePens + priceMarkers + priceCleaner;
    let discount = price * percent/100;
    let finalPrice = price - discount;
    console.log(finalPrice);
}

suppliesForSchool(["4 ",
"2 ",
"5 ",
"13 "])