/*
Implement factorial.

factorial(5) => 5*4*3*2*1 => 120
*/
let factorial = (num) => {
  if (num === 1) {
    return 1
  } if (num < 0) {
    return 'Sorry, only positive numbers here Mister.'
  } else {
    return num * factorial(num - 1)
  }
}


/*

cute little rocket
*/
let rocket = (n) => {
  console.log('#'.repeat(n) + n)
  console.log(''.repeat(n))
  if (n === 0) {
    console.log('BLAST OFF!!')
    return
  } else {
    return rocket(--n);
  }
}

factorial(5)
rocket(10)
