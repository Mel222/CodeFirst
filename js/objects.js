var House = {
    name: 'Big',
    age: 100,
    occupants: ['Susan','Anna','Maggie'],
    address: {
        number: 123,
        street: 'Main St',
        city: 'London',
        population: 3,
    },
    saySold: function() {
        console.log('Sold');
    },
    percentage: function() {
        return this.address.population/this.address.number;
    } 

};

console.log(House["name"]);
console.log(House.age);
console.log(House.occupants[0]);
console.log(House.address.city);
House.saySold();

House.lkj = 78
House['huhu'] = 454675
console.log(House)
console.log(House.percentage())
