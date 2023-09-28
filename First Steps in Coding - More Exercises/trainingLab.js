function trainingLab(input){
    let length = Number(input[0]);
    let width = Number(input[1]);

    let placesWidth = Math.trunc((width * 100 - 100) / 70);
    let placesLength = Math.trunc((length * 100) / 120);
    let count = placesLength * placesWidth - 3;
    console.log(count);
}

trainingLab([8.4, 5.2])