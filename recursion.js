/*
  Classic recursion exercise
  Notes to self:
    - condition for stopping has to be in call to fn
    - always handle case where it has wound down to 0
    - think about floats, doubles, negs but not important to solve for here
*/
let factorial = (n) => {
  if (n < 0) {
    return('No negative numbers'); // or throw an error if caller expecting an int
  }
  if (n === 0) {
    return 1;
  } else {
    console.log('in else if ', n)
    return n * factorial(n - 1);
  }
}

let result = factorial(-6);
console.log(result);
