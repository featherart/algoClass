/*
Implement a function that will reverse a string recursively.

reverse('abcdefg')
=> 'gfedcba'
*/

// not sure how to do with a reversed string that isn't outside the function
// since it will keep getting rewritten?
let reverse = (input, reversed) => {
  if (input.length > 0) {
    reversed += input.slice(--input.length, input.length)
    return reverse(input.slice(0, input.length-1), reversed)
  }
  return reversed
}

let cba = reverse('abc', '')
console.log(cba)

let palindrome = reverse('imalasagnahog', '')
console.log(palindrome)
