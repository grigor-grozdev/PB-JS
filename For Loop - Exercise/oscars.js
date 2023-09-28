function oscars(input){
    let name = input[0];
    let academyPoints = Number(input[1]);
    let judgeNumber = Number(input[2]);

for( let i = 3; i < (judgeNumber * 2 + 3); i+= 2){
    let judgeName = input[i];
    let points = Number(input[i+1]);
    academyPoints = academyPoints + ((judgeName.length * points)/2);
    if (academyPoints > 1250.5){
        break;
    }
}
if (academyPoints <= 1250.5){
    console.log(`Sorry, ${name} you need ${(1250.5-academyPoints).toFixed(1)} more!`);
} else{
    console.log(`Congratulations, ${name} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
}
}

oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])