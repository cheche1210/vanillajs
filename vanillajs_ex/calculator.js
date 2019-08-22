const calculator = {
  plus: function(a, b) {
    return a + b;
  },
  minus: function(a, b) {
    return a - b;
  },
  devide: function(a, b) {
    return a / b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  power: function(a, b) {
    return a ** b;
  }
};

const a = 150;
const b = 30;

const plus = calculator.plus(a, b);
const minus = calculator.minus(a, b);
const devide = calculator.devide(a, b);
const multiply = calculator.multiply(a, b);
const power = calculator.power(a, b);

console.log(`${plus},${minus},${devide},${multiply},${power}`);
