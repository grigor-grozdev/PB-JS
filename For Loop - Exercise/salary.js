function salary(input) {

    let num = Number(input[0]);
    let salary = Number(input[1]);

    for (let i = 2; i <= (num + 1); i++) {

        let text = input[i];

        switch (text) {
            case "Facebook": salary = salary - 150; break;
            case "Instagram": salary = salary - 100; break;
            case "Reddit": salary = salary - 50; break;
        }
        if (salary <= 0){
            break;
        }
    }
    if (salary <= 0){
        console.log(`You have lost your salary.`);
    } else {
        console.log(salary);
    }
}

salary(["10",

"7500",

"Facebook",

"Dev.bg",

"Instagram",

"Facebook",

"Reddit",

"Facebook",

"Facebook"])