//You never want to mutate an array because it might break something in another 
//part of your code

var cars = [
    {
        car: "honda",
        price: "cheap"
    }, {
        car: "BMW",
        price: "expensive"
    }]

var prices = cars.map(function (car) {
    return car.price
})

console.log(prices)

var images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
];

var heights;

heights = images.map(function (image) {
    return image.height
})

var trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
];

var speeds;

speeds = trips.map(function (trip) {
    return trip.distance / trip.time
})

//Implement a 'pluck' function.  Pluck should accept an array and a string representing a property name and return an  array containing that property from each object. 
var paints = [{ color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
pluck(paints, 'color'); // returns ['red', 'yellow', 'blue'];

function pluck(array, property) {
    return array.map(function (element) {
        return element.color
    })
}