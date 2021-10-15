'use strict';

// Check 4 digit pin.
const EXPECTED_PIN = '4967';
const checkPin = (...code) => code.join('') === EXPECTED_PIN;

// Impement function press
// that allows to enter pin code by one character,
// e.g. press('3').press('4').press('5').press('6')
//
// For hint use https://github.com/HowProgrammingWorks/Cheatsheet

const press2 = (value) => ({
   pin: [value],
   press(value) {
     this.pin.push(value);
     if (this.pin.length >= EXPECTED_PIN.split('').length) {
       return checkPin(...this.pin);
     }
     return this;
   }
 });


 const press = (pin) => {
   return {
    press: function(chr) {
    const EXPECTED_PIN = '4967';
    pin += chr;
    return (pin.length == EXPECTED_PIN.length) ? (pin == EXPECTED_PIN) : this;
    } 
   }
  }
  
  console.log(press('4').press('9').press('6').press('7'));
  console.log(press('3').press('4').press('5').press('6'));
module.exports = { press };
