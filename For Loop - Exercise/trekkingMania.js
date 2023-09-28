function trekkingMania(input){
    let num = Number(input[0]);
    let musala = 0;
    let montBlan = 0;
    let kilimanjaro =0;
    let k2 = 0;
    let everest = 0;
    let total = 0;

    for (let i = 1; i <= num; i++){
        let count = Number(input[i]);
        total = total + count;

        if (count <= 5){
            musala = musala + count;
        } else if (count <= 12){
            montBlan = montBlan + count;
        } else if (count <= 25){
            kilimanjaro = kilimanjaro + count;
        } else if (count <= 40){
            k2 = k2 + count;
        } else {
            everest = everest + count;
        }
    }
    console.log(`${(musala / total * 100).toFixed(2)}%`);
    console.log(`${(montBlan / total * 100).toFixed(2)}%`);
    console.log(`${(kilimanjaro / total * 100).toFixed(2)}%`);
    console.log(`${(k2 / total * 100).toFixed(2)}%`);
    console.log(`${(everest / total * 100).toFixed(2)}%`);
}

trekkingMania(["5","25","41","31","250","6"])