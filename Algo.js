// Title:
// Count by X
// Description:
// Create a function with two arguments that will return a list of length (n) with multiples of (x).
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// Return the results as an array (or list in Python, Haskell or Elixir).
// Examples:
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]


function countBy(x, n) {
    var z = [];
    var y = x * n;
    for(let i = 1; i <= y ; i++){
      if(i % x === 0) z.push(i)
    }
    return z;
  }


  // A Narcissistic Number is a positive number which is the sum of its own digits, 
  // each raised to the power of the number of digits in a given base. 
  // In this Kata, we will restrict ourselves to decimal (base 10).
  // example:   1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
  // The Challenge:
  // Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.
  // Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

  function narcissistic( value ) {
    // we are turning the value to a string in order to split the string into array of string digits
    var getPow = value.toString().split('').map(function(x) {
      // for each value iterated over the array it will be powered to the length of the array
      return Math.pow(x, value.toString().length);
    });
    // this function will reduce the array to single value(adds all the values together)
    var getAccumValue = getPow.reduce(function(a, c) {
      return a + c;
    });
  
    // Passing result if getAccumValue is equal to input value than it is narcisitic number
    return getAccumValue === value;
  }
 
 