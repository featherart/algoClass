/*
Bubble SORT

*** Description

Iterate over array, comparing adjacent items and swap if in incorrect order. Largest elements bubble to the end of the array

*** Exercises

- Implement bubble sort
- Identify time complexity

Optimizations:
- Make algorithm adaptive (if at any point array is already sorted, exit function early). After doing this, what is time complexity for nearly sorted arrays?
- For each pass through the array, are you doing any unnecessary checking of elements? Minimize checking and consider the effect on time complexity.

Variants:
- Implement cocktail sort (for each pass find both min and max values and sort in both directions). How does this impact performance?
(https://en.wikipedia.org/wiki/Cocktail_sort)

*/
//
// function bubbleSort(arr) {
//   let i = 0
//
//   while (i < arr.length - 1) {
//     for (var j = 0; j < arr.length - 1; j++) {
//       if (arr[i] > arr[i+1]) {
//         console.log(arr[i])
//         console.log(arr[i+1])
//         console.log(arr)
//         let holder = arr[i]
//         arr[i] = arr[i+1]
//         arr[i+1] = holder
//         console.log('after sort: ', arr)
//       }
//       i++
//     }
//   }
// }
//
//
// let nums = [3, 4, 2, 7, 32]
// console.log(nums)
//
// let sorted = bubbleSort(nums)
// console.log(sorted)
//

function bubbleSort(nums) {
  let swapped
  do {
    swapped = false
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i+1]) {
        let temp = nums[i]
        nums[i] = nums[i+1]
        nums[i+1] = temp
        swapped = true
      }
    }
  } while (swapped)
  return nums
}

let nums = [6, 32, 5, 4, 2, 7, 3]
console.log(nums)

let sorted = bubbleSort(nums)
console.log(sorted)
