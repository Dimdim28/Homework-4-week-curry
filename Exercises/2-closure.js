'use strict';

const coffee = (volume, strength) =>
  `Coffee volume: ${volume}ml, strength: ${strength}`;

const defineCoffeeType = volume => strength => coffee(volume, strength);

// Use function defineCoffeeType to define new coffee types.
// Define coffee type espresso which volume should equal 50ml.
// Define coffee type americano which volume should equal 150ml.
const americano = (strength) => defineCoffeeType(150)(strength);
const espresso  = (strength) => defineCoffeeType(50)(strength);
console.log(espresso("medium"));
console.log(americano("strong"));

module.exports = { espresso, americano };
