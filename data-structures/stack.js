/*

STACK

Abstract data type
LIFO - Last in, first out
Collection of elements with push and pop operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/pop method in your implementation. That's too easy, yeah? =P
Use an object as the underlying data structure.


*** Operations:

myStack.push(value)
=> count of stack
add value to collection

myStack.pop()
=> most recent element added collection
Remove item so that it is no longer in collection

myStack.peek()
=> most recent element added collection
Similiar to pop, but do not remove element from collection

myStack.count()
=> number of elements in stack

 */

function Stack(capacity) {
  // constructor function
  // underlying structure is an object, aka "storage"
  // the this is very important, ties it to the context
  this.capacity = capacity
  this.storage = {}
  this.counter = 0 // where we at in the stack
}

Stack.prototype.push = function(value) {
  // if there is room add element to end
  // LIFO
  if (this.counter < this.capacity) {
    this.storage[this.counter++] = value
    return this.counter
  } else {
    console.log('Sorry, max capacity has been reached!')
    return false
  }
}
// Time complexity: O(1)

Stack.prototype.pop = function() {
  if (this.counter > 0) {
    let elem = this.storage[--this.counter]
    delete this.storage[this.counter]
    return elem
  } else {
    console.log('Sorry, nothing left to delete')
    return false
  }
}
// Time complexity: O(1)

Stack.prototype.peek = function() {
  // implement me...
  return this.storage[this.counter - 1]

}
// Time complexity: O(1)

Stack.prototype.count = function() {
  // implement me...
  return this.counter
}
// Time complexity: O(1)

let stacky = new Stack(5)
stacky.push('hi')
console.log(stacky)
stacky.push('there')
console.log(stacky)
stacky.push('thing')

stacky.push([1, 3, 2])

stacky.push([1, 6, 0])
console.log(stacky)
stacky.pop()
console.log('after pop: ', stacky)
stacky.pop()
stacky.pop()
stacky.pop()
stacky.pop()
console.log(stacky)
stacky.pop()
console.log(stacky)
stacky.pop()
stacky.push([1, 3, 2])
stacky.push('hi')
stacky.push('there')
stacky.push('thing')
console.log(stacky)
console.log(stacky.peek())
console.log(stacky.count())
/*
*** Additional Exercises:

Modify your stack to take a max capacity and return a string if you try to add an element when there's no more room:
myStack.push(value)
DONE=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the stack:
myStack.contains('findme')
=> true/false
What's the time complexity? O(N)
*/
Stack.prototype.contains = function(value) {
  for ( var key in this.storage ) {
    if (this.storage[key] === value) {
      return true
    }
  }
  return false
}

console.log(stacky.contains('hi'))
console.log(stacky.contains('hihi'))

/*
Create an until method to get the number of pops until you get to a certain value:
stack values - (first)2-5-7-3-6-9(last)
myStack.until(7)
=> 4
What's the time complexity?
*/
Stack.prototype.until = function(value) {
  let num = 0
  let found = false
  while (!found && num <= this.counter) {
    let elem = this.pop()
    num++
    if (elem === value) {
      found = true
      return num
    }
  }
  return 'sorry, not found!'
}
console.log(stacky.until('hi'))
console.log(stacky.until('frank'))

/*
1. Implement a stack with a min method which returns the minimum element currently in the stack.
This method should have O(1) time complexity. Make sure your implementation handles duplicates.
*/

function MinStack() {
  this.storage = {}
  this.minIndex = 0
}

MinStack.prototype.pushMin = function(element) {
  if (this.minIndex === 0 || element < this.storage[this.minIndex]) {
    this.storage[this.minIndex++] = element
    return this.minIndex
  }
}

MinStack.prototype.min = function() {
  return this.storage[this.minIndex]
}

let minny = new MinStack()
console.log(minny)
minny.pushMin(4)
console.log(minny)
console.log(minny.min())
console.log(minny.pushMin(2))
console.log(minny.min())

/*
2. Sort a stack so that its elements are in ascending order.
*/

/*
3. Given a string, determine if the parenthesis in the string are balanced.
Ex: balancedParens( 'sqrt(5*(3+8)/(4-2))' ) => true
Ex: balancedParens( 'Math.min(5,(6-3))(' ) => false

4. Towers of Hanoi - https://en.wikipedia.org/wiki/Tower_of_Hanoi
You are given three towers (stacks) and N disks, each of different size. You can move the disks
according to three constraints:
   1. only one disk can be moved at a time
   2. when moving a disk, you can only use pop (remove the top element) and push (add to the top of a stack)
   3. no disk can be placed on top of a disk that is smaller than it
The disks begin on tower#1. Write a function that will move the disks from tower#1 to tower#3 in
such a way that none of the constraints are violated.
 */
