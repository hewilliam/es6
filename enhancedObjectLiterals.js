const red = '#ff0000';
const blue = '#0000ff';

let COLORS = { red: red, blue: blue };

//if the key and the value is the SAME, you can just condense it to 

let COLORS = { red, blue };

//////////////

const color = 'red';
//if you have a function, you can remove 'function' word and the colons
// const Car = {
//   color: color,
//   drive: function() {
//     return 'Vroom!';
//   },
//   getColor: function() {
//     return this.color;
//   }
// };

const Car = {
    color,
    drive() {
      return 'Vroom!';
    },
    getColor() {
      return this.color;
    }
  };