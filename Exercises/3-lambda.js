'use strict';

const tagged = (pref, str) => `[${pref}] ${str}`;

const tagDate = (str) => {
  const fullDate = new Date();
  const year = '' + fullDate.getFullYear();
  let day = '' + fullDate.getDate();
  let month = '' + (fullDate.getMonth() + 1);
  day = day.length !== 2 ? '0' + day : day;
  month = month.length !== 2 ? '0' + month : month;
  const date = [year, month, day].join('-');
  return tagged(date, str);
};

// Компактный вариант, но он не проходит через тест:

// const tagDate = (str) => {
//   const dateFull = (new Date()).toISOString();
//   const date = dateFull.slice(0, 10);
//   return tagged(date, str);
// };
console.log("test =   " + tagDate("hello   "));
module.exports = { tagDate };
