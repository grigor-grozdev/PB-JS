function computerFirm(input) {
    let num = Number(input[0]);
    let totalSales = 0;
    let averageRating = 0;


    for (let index = 1; index <= num; index++) {
        let command = input[index];
        let rating = command[2];
        let sales = Number(Math.floor(command / 10));

        switch (rating) {
            case "2":
                break;
            case "3":
                sales = sales * 0.50;
                totalSales += sales;
                break;
            case "4":
                sales = sales * 0.70;
                totalSales += sales;
                break;
            case "5":
                sales = sales * 0.85;
                totalSales += sales;
                break;
            case "6":
                totalSales += sales;
                break;
        }
        rating = Number(rating);
        averageRating += rating;
    }

    console.log(totalSales.toFixed(2));
    console.log((averageRating / num).toFixed(2));

}

computerFirm(["5",
    "122",
    "156",
    "202",
    "214",
    "185"])
