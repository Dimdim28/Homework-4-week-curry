/*
const curry2 = (funct) =>{
return function(a){
return function(b){
  return function(c){                        
    return function(d){
      return funct(a,b,c,d);
    }
  }
  }
}
}
*/


'use strict';

// Check 4 digit pin.
const EXPECTED_PIN = '4967';
const checkPin = (...code) => code.join('') === EXPECTED_PIN;
// Define function curry that accepts the length of the function
// (amount of function arguments) and the function.

const curry = (length, fn) => {
  let result = (...args) => (args.length == length) ? fn(...args) : (...args2) => result(...args.concat(args2));    //рабочий способ через конкатинацию массивов и рекурсию для ен аргументов
return result   
};

const curry2 = (length, fn) => (...args) => {
  if(length > args.length) {
    const press = fn.bind(null, ...args);
    return curry(length - args.length, press);        //рабочий способ 2 через bind для ен аргументов
  } else {
    return fn(...args);
  }
};


// Allows to enter pin code by one character,
// Usage: press('3')('4')('5')('6')
const press = curry(4, checkPin);
console.log('1' + press('4','9','6','7'));
console.log('2' + press('4')('9','6','7'));
console.log('3' + press('4')('9')('6','7'));


module.exports = { press };