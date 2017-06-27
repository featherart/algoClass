/*
INSERTION SORT

*** Description

Iterate over array and grow a sorted array behind current element.

For each position, compare value of element with previous elements and swap positions if previous element is larger.

example:
[ 3 4 5|1 2 6 ]
 sorted|unsorted
swaps:
[ 3 4 1 5|2 6 ]
[ 3 1 4 5|2 6 ]
[ 1 3 4 5|2 6 ]
now repeat for next unsorted element

*** Exercises

- Implement insertion sort for array of numbers
- Identify time complexity

- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

*** Extra credit
- Implement shell sort, a generalization of insertion sort
(https://en.wikipedia.org/wiki/Shellsort)

*/

// fancy splice way
let insertionSort = function(nums) {
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] < nums[j]) {
         const spliced = nums.splice(i, 1);
         console.log('spliced: ', spliced)
         nums.splice(j, 0, spliced[0]);
      }
    }
  }
  return nums
}

let nums = [4, 1, 6, 3, 7]
console.log(nums)

let sorted = insertionSort(nums)
console.log(sorted)

// my way
let insertionSortAgain = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] < nums[j]) {
        let holder = nums[i];
        nums[i] = nums[j];
        nums[j] = holder;
      }
    }
  }
  return nums;
}

let nums2 = [44, 1, 60, 3, 7, 23, 19]
console.log(nums2)

let sorted2 = insertionSortAgain(nums2)
console.log(sorted2)
