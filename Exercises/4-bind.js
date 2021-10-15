'use strict';

/*
  Generalized mean (Hölder mean)
  Given n numbers a₁, a₂, ... an
  Define Hk (for k != 0) as the k-th root of the arithmetic mean
  of the k-th power of a set of numbers
         ____________________________
  Hk = ᵏ√ (a₁ᵏ + a₂ᵏ + ... + anᵏ) / n
*/

const H = (exp, ...args) => {
  const sum = args.reduce((s, a) => (s + Math.pow(a, exp)), 0);
  const avg = sum / args.length;
  return Math.pow(avg, (1 / exp));
};
console.log(H(1,1,2,3,4,5,6));
// Use method bind() to create new functions from function H.
// Create function `average` that returns arithmetic mean (H₁) of the arguments.
// Create function `rootMeanSquare` that returns quadratic mean (H₂).


//const average = (...args) => (args.reduce((s, a) => (s + a), 0))/args.length;     //   мой метод
//const rootMeanSquare=(...args)=>Math.pow((args.reduce((s,a)=>(s+Math.pow(a,2)),0))/args.length,0.5);  // мой метод

const average = (...args) => H(1, ...args);
const rootMeanSquare = (...args) => H(2,...args);


console.log(average(1,2,3,4,5));
console.log(rootMeanSquare(7,1));
console.log(rootMeanSquare(4,4,4,4));


module.exports = { average, rootMeanSquare };
