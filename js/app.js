

class Cars {
    model;
    price;
    date_of_manufacture;
    color;

    constructor(models,  date_of, price_of_cars, colors) {
        this.model = models,
        this.price = price_of_cars,
        this.date_of_manufacture = date_of,
        this.color = colors
    }
}

const Toyota = new Cars ("TOYOTA Highlander", 2023, "73300$", "White") ;
const Mercedes = new Cars ("Mercedes-Benz W210", 2000, "18.000$", "silver color") ;
const BMW = new Cars ("BMW E39", 2004, "19.000$", "black") ;
const Lexus = new Cars ("Lexus IS 300", 2007, "20.000$", "black") ;
const KIA = new Cars ("KIA Sorento", 2024, "50.200$", "whita") ;


console.log(Toyota);
console.log(Mercedes);
console.log(BMW);
console.log(Lexus);
console.log(KIA);