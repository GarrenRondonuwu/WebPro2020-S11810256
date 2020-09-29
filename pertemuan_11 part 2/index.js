// Arrow Function

//Single Argument
// const calcAge = (year) => {
//   return 2020 - year;
// }

// console.log(calcAge(1991));

//Multiple Argument
// const calcAge = (birthYear, currentYear) => {
//   return currentYear - birthYear;
// };

//No Argument with implicit return value
// const calcAge = () => 2020 - 1992;
// console.log(calcAge());

// const years = [1990, 1992, 2001, 2005];

// const calcAge5 = years.map(function (el)
// {
//   return 2020 - el;
// });

// const calcAge6 = years.map((el)) => 2020 - el);
// console.log(calcAge6)

//default parameter
const calcAge = (birthYear, currentYear) => currentYear - birthYear;
console.log(calcAge(1991, 2021));

//Exercise
//Convert to ES6 Syntax
const yearUntilRetirement = (year, firstName) => {
  let age = 28;
  let retirement = 65 - age;
  if (retirement > 0) {
      console.log(firstName + " retired in " + retirement + " years ");
  } else {
      console.log(firstName + " is already retired.");
  }
  yearUntilRetirement(2001, Garren);
}