
const add = (a, b) => {
    //console.log(arguments);
    return a + b;
};

console.log(add(55, 1, 111));


const user = {
    name: 'Viktar',
    cities: ['Minsk', 'Grodno', 'Volpa'],
    pringPlacesLived() {

        return this.cities.map((city) => this.name + ' has lieved in ' + city);

    }
};

console.log(user.pringPlacesLived());

const multiplier = {
    numbers: [1,2,3,40],
    multiplyBy: 6,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());
