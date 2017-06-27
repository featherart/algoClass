//1. Write a function that loops through the numbers n down to 0.
// If you haven't done so try using a while loop to do this.
let countdown = (n) => {
  while( n > 0 ) {
    //console.log(n)
    n--
  }
}

/*
let date1 = Date.now()
countdown(15)
let date2 = Date.now()
console.log('time for while: ', date2 - date1)
*/
//2. Next, try looping just like above except using recursion
let recursiveCountdown = (n) => {
  //console.log(n)
  if (n > 0) {
    return recursiveCountdown(--n)
  }
}
/*
let date3 = Date.now()
recursiveCountdown(15)
let date4 = Date.now()
console.log('time for recursion: ', date4 - date3)
*/

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the
// exponenet value of the base.

let exponent = (base, expo) => {
  let newBase = base
  while (expo > 1) {
    newBase *= base
    expo--
  }
  return newBase
}

/*
var expo = exponent(2, 2)
console.log('expo: ', expo)

let cube = exponent(2, 3)
console.log('cube: ', cube)

let bigEx = exponent(12, 2)
console.log('bigEx: ', bigEx)

let littleEx = exponent(2, 1)
console.log('littleEx', littleEx)
*/
//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo,
// recursively returns exponent value of the base.

function recursiveExponent(base, expo) {
  // base case
  if ( expo === 0 ) {
    return 1
  }
  // recursive case
  else {
	base *= recursiveExponent(base, --expo);
    return base
  }
}

//let expo = recursiveExponent( 2, 4)
//console.log('recursiveExponent: ', expo)

// another classic
// fibonacci(1) = 1 + 0 = 1, etc.
let fibs = (n) => {
  if ( n === 1 || n === 0 ) {
    return n
  } else {
    return fibs(n-1) + fibs(n-2)
  }
}

for (var i = 1; i < 20; i++) {
  console.log(`${i}. ${fibs(i)}`)
}

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num',
//and multiplies each arr value by num then returns an array of the values.

let recursiveMultiplier = (arr, num) => {
  let multiples = []
  let multiply = (singles, num) => {
    console.log('in here, ', singles, ' ', num)
    if (singles.length > 0) {
      multiples.push(singles[0] * num)
      multiply(singles.slice(1, arr.length), num)
    }
    return
  }
  multiply(arr, num)
  return multiples
}

// Bianca's solution, w/out wrapper function
var recursiveMultiplier2 = function(arr, num) {
  if(arr.length === 0) {
    return arr;
  }
  var last = arr.pop()
  recursiveMultiplier2(arr, num);
  arr.push(last*num);
  return arr;
}

let multiples = recursiveMultiplier([ 2, 3, 4 ], 9)
console.log('multiples: ', multiples)

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse

let reverseArr = (arr) => {
  let reversed = []
  let addItems = (ordered) => { // ordered is arr in the closure
    if (ordered.length > 0) {
      reversed.push(ordered.pop())
      addItems(ordered)
    }
    return
  }
  addItems(arr)
  return reversed
}

let reversedArr = reverseArr([1, 2, 3, 8, 9, 22, 489])
console.log('reversed: ', reversedArr)


// Bianca's solution
// uses a closure to add the accumulator
var recursiveReverse = function(arr) {
  var reversedArr = []
  var addItems = function(orderedArr) {

    if (orderedArr.length > 0) {
      reversedArr.push(orderedArr.pop())
      addItems(orderedArr)
    }
    return
  }
  addItems(arr)
  return reversedArr
}
