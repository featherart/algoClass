let factorial = (n) => {
  if (n === 1) {
    return n
  } if (n < 0 ) {
    return 'sorry, no negatives'
  } else {
    return n * factorial(n - 1)
  }
}

console.log(factorial(5))

/* such cutes */
let rocket = (n) => {
  console.log('#'.repeat(n) + n)
  console.log(''.repeat(n))
  if (n === 0) {
    return 'blastoff!'
  } else {
    return rocket(--n);
  }
}

console.log(rocket(10))
