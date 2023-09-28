function triangleArea(input){
    let a = Number(input[0]);
    let h = Number(input[1]);

    let s = a * h / 2;
    console.log(s.toFixed(2));
}

triangleArea([1.23456, 4.56789]);