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

var prices = cars.map(function(car) {
    return car.price
})

console.log(prices)

var images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
  ];
  
  var heights;
  
  heights = images.map(function(image){
      return image.height
  })

  var trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
  ];
  
  var speeds;
  
  speeds = trips.map(function(trip) {
      return trip.distance/trip.time
  })