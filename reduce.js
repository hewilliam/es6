function balancedParens(string) {
    return !string.split('').reduce(function(acc, element){
        if(acc < 0) { return acc}
        if(element === "(") {  ++acc }
        if(element === ")") {  --acc }

        return acc
    }, 0)
}

console.log(balancedParens(")("))

var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance;

totalDistance = trips.reduce(function(acc, trip) {
    acc+= trip.distance
    return acc
},0)

//////////////////////////

var desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
  ];
  
  var deskTypes = desks.reduce(function(acc, desk) {
      if(desk.type === 'sitting') { ++acc.sitting }
      if(desk.type === 'standing') { ++ acc.standing }
      return acc
  }, { sitting: 0, standing: 0 });


  ///////////

  function unique(array) {
    return array.reduce(function(acc, number){
      if(acc.indexOf(number)===-1){
          acc.push(number)
      }
      return acc
    }, [])
  }