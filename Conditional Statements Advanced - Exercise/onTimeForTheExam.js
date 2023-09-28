function onTimeForTheExam(input) {

    let hourExam = Number(input[0]);
    let minExam = Number(input[1]);
    let hourArrival = Number(input[2]);
    let minArrival = Number(input[3]);

    let totalMinExam = hourExam * 60 + minExam;
    let totalMinArrival = hourArrival * 60 + minArrival;

    if (totalMinExam === totalMinArrival) {
        console.log(`On time`);
    } else if (totalMinExam > totalMinArrival) {
        if (totalMinExam - totalMinArrival <= 30) {
            console.log(`On time`);
            console.log(`${totalMinExam - totalMinArrival} minutes before the start`);
        } else if (totalMinExam - totalMinArrival <= 59) {
            console.log(`Early`);
            console.log(`${totalMinExam - totalMinArrival} minutes before the start`);
        } else if (((totalMinExam - totalMinArrival) % 60) <= 9) {
            console.log(`Early`);
            console.log(`${Math.floor((totalMinExam - totalMinArrival) / 60)}:0${(totalMinExam - totalMinArrival) % 60} hours before the start`);
        } else {
            console.log(`Early`);
            console.log(`${Math.floor((totalMinExam - totalMinArrival) / 60)}:${(totalMinExam - totalMinArrival) % 60} hours before the start`);
        }
    } else {
        if (totalMinArrival - totalMinExam <= 59) {
            console.log(`Late`);
            console.log(`${totalMinArrival - totalMinExam} minutes after the start`);
        } else if (((totalMinArrival - totalMinExam) % 60) <= 9) {
            console.log(`Late`);
            console.log(`${Math.floor((totalMinArrival - totalMinExam) / 60)}:0${(totalMinArrival - totalMinExam) % 60} hours after the start`);
        } else {
            console.log(`Late`);
            console.log(`${Math.floor((totalMinArrival - totalMinExam) / 60)}:${(totalMinArrival - totalMinExam) % 60} hours after the start`);
        }
    }
}

onTimeForTheExam(["9",

"30",

"12",

"35"])