/*
MERGE SORT

*** Description

Merge sort employs a divide and conquer strategy - merge two sorted subarrays into one sorted array.

Recursive top-down approach:
Recursively break down array into two subarrays and sort them recursively. Subarrays are broken down until they
have only 1 element (implying they are sorted).

Iterative bottom-up approach:
Split array into sublists of size 1, merge adjacent sublists into sorted lists, repeat until no more sublists.

*** Exercises

- Implement recursive merge sort (you might want to write a helper function to handle the merge step)
- Implement iterative merge sort
- Identify time complexity

- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

Optimization:
- Refactor your iterative solution to be a natural merge sort. This means that the initial subarrays are
naturally occurring sorted sequences. How does this impact time complexity and adaptivity?

ex:
input array: [ 1 2 4 5 9 ]
subarrays for regular merge sort: [ [1], [2], [4], [5], [9] ]
subarrays for natural merge sort: [ [1,2], [4,5], [9] ]

*/

// basic idea:
// cut list in 1/2 recursively until lists have size 1 (base case)
// return sorted list of 1
// stitch sorted lists together using merge/stitch


let mergeSort = function(nums) {
  if (nums.length < 2) {
    return nums;
  }
  const length = nums.length;
  const middle = Math.floor(length/2);
  let leftSide = nums.slice(0, middle)
  let rightSide = nums.slice(middle, length)
  console.log('l', leftSide)
  console.log('r', rightSide)
  return merge(mergeSort(leftSide), mergeSort(rightSide))
}

let merge = function(left, right) {
  console.log('left: ', left)
  console.log('right: ', right)
  const results = [];

  while(left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  // while(left.length) {
  //   results.push(left.shift());
  // }
  // while(right.length) {
  //   results.push(right.shift());
  // }
  // return results;
  // or results.concat(left, right)
  return [...results, ...left, ...right]; // cool way, yeehaw
}

let nums = [3, 42, 4, 6, 9, 8, 7, 93, 72]

let sorted = mergeSort(nums)
console.log('sorted: ', sorted)
