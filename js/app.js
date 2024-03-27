

class Cars {
    model;
    price;
    date_of_manufacture;
    color;
    
    constructor(options) {
        this.model = options.models,
        this.price = options.price_of_cars,
        this.date_of_manufacture = options.date_of,
        this.color = options.colors
    }
}

class SUV extends Cars {
    constructor(options) {
        super(options)
        this.airbag = options.airbag
    }

} 

class Sedan extends Cars {
    constructor(options) {
        super(options)
        this.ABS = options.ABS
    }

} 

class Hatchback extends Cars {
    constructor(options) {
        super(options)
        this.Led = options.Led
    }

} 

class Sedan2 extends Cars {
    constructor(options) {
        super(options)
        this.N2O = options.N2O  // N2 O Azot oksidi (Nitro)
    }

} 

class Crossover extends Cars {
    constructor(options) {
        super(options)
        this.spare_tire = options.spare_tire
    }

} 




const Toyota = new SUV ({
    models: "Toyota Highlander",
    price_of_cars: "73300$",
    date_of: 2023,
    colors: "White",
    airbag: true
}) ;


const Mercedes = new Sedan ({
    models: "Mercedes-Benz W210",
    price_of_cars: "18.000$",
    date_of: 2000,
    colors: "silver color",
    ABS: true
}) ;


const BMW = new Hatchback ({
    models: "BMW E39",
    price_of_cars: "19.000$",
    date_of: 2004, 
    colors: "black",
    Led: true

}) ;


const Lexus = new Sedan2 ({
    models: "Lexus IS 300",
    price_of_cars: "20.000$",
    date_of: 2007, 
    colors: "black",
    N2O: false
}) ;

const KIA = new Crossover ({
    models: "KIA Sorento",
    price_of_cars: "50.200$",
    date_of: 2024,
    colors: "whita",
    spare_tire: false
}) ;


console.log(Toyota);
console.log(Mercedes);
console.log(BMW);
console.log(Lexus);
console.log(KIA);







// const Toyota = new Cars ({
//     models: "Toyota Highlander",
//     price_of_cars: "73300$",
//     date_of: 2023,
//     colors: "White"
    
// }) ;

// const Mercedes = new Cars ({
//     models: "Mercedes-Benz W210",
//     price_of_cars: "18.000$",
//     date_of: 2000,
//     colors: "silver color"
// }) ;



// const BMW = new Cars ({
//     models: "BMW E39",
//     price_of_cars: "19.000$",
//     date_of: 2004, 
//     colors: "black"

// }) ;

// const Lexus = new Cars ({
//     models: "Lexus IS 300",
//     price_of_cars: "20.000$",
//     date_of: 2007, 
//     colors: "black"
// }) ;

// const KIA = new Cars ({
//     models: "KIA Sorento",
//     price_of_cars: "50.200$",
//     date_of: 2024,
//     colors: "whita"
// }) ;


