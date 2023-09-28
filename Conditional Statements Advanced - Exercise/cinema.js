function cinema(input){
let type = input[0];
let r = Number(input[1]);
let c = Number(input[2]);
let count = r * c;
let price = 0;

switch(type){
    case "Premiere": price = count * 12; console.log(`${price.toFixed(2)} leva`); break;
    case "Normal": price = count * 7.50; console.log(`${price.toFixed(2)} leva`); break;
    case "Discount": price = count * 5; console.log(`${price.toFixed(2)} leva`); break;
}
}

cinema(["Discount", "12", "30"])