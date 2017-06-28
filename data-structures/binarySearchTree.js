/*
BINARY SEARCH TREES

Abstract data type
A binary search tree is a tree with the additional constraints:
- each node has only two child nodes (node.left and node.right)
- all the values in the left subtree of a node are less than or equal to the value of the node
- all the values in the right subtree of a node are greater than the value of the node

*** Operations:

bsTree.insert(value)
=> bsTree (return for chaining purposes)
Insert value into correct position within tree

bsTree.contains(value)
=> true/false
Return true if value is in tree, false if not

bsTree.traverseDepthFirst_inOrder(callback)
=> undefined
Invoke the callback for every node in a depth-first in-order (visit left branch, then current node, than right branch)
Note: In-Order traversal is most common type for binary trees. For binary search tree, this visits the nodes in ascending order
(hence the name).

bsTree.traverseDepthFirst_preOrder(callback)
=> undefined
Invoke the callback for every node in a depth-first pre-order (visits current node before its child nodes)

bsTree.traverseDepthFirst_postOrder(callback)
=> undefined
Invoke the callback for every node in a depth-first post-order (visit the current node after its child nodes)

bsTree.isValid()
=> returns true if BST is a valid BST otherwise returns false. This method is useful for checking your other methods.

bsTree.removeNode(value)
=> node
Remove node from tree.

bsTree.checkIfFull()
=> true/false
A binary tree is full if every node has either zero or two children (no nodes have only one child)

bsTree.checkIfBalanced()
=> true/false
For this exercise, let's say that a tree is balanced if the minimum height and the maximum height differ by no more than 1. The height for a branch is the number of levels below the root.


*** Additional Exercises:
A binary search tree was created by iterating over an array and inserting each element into the tree. Given a binary search tree with no duplicates, how many different arrays would result in the creation of this tree.

*/

function BinarySearchTree (value) {
  this.value = value; // aka root
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function(value) {
  // implement me...recursively
  // if (!this.value) {  // no root yet, should not happen
  //   this.value = value
  //   return
  // }
  if (value <= this.value) {
    if (this.left) this.left.insert(value)
    else this.left = new BinarySearchTree(value)
  } else {
    if (this.right) this.right.insert(value)
    else this.right = new BinarySearchTree(value)
  }
};
// Time complexity:

BinarySearchTree.prototype.contains = function(value) { // returns true if tree has value
  // implement me...
  // first if root is value return that
  if (value === this.value) {
    return true
  }
  if (value > this.value && this.right) {
    // look right
    return this.right.contains(value)
  } else if (value <= this.value && this.left) {
    // look left
    return this.left.contains(value)
  }
  return false

  // Bianca solution - mine works the same but less fancy
  // if (this.value === value) return true
  // if (value < this.value) {
  //   return !!this.left && this.left.contains(value)
  // } if (value > this.value) {
  //   return !!this.right && this.right.contains(value)
  // }
  // return false
};
// Time complexity:

BinarySearchTree.prototype.traverseDepthFirst_inOrder = function(fn) {
  // implement me...
  // first go all the way to the left
  // then the parent
  // then the right
  // then the parent parent (?)
  // base case: traverse when you are a leaf
  if (!this.left && !this.right) {
    return fn(this)
  }
  if (this.left) this.left.traverseDepthFirst_inOrder(fn)
  fn(this)
  if (this.right) this.right.traverseDepthFirst_inOrder(fn)

};
// Time complexity:

BinarySearchTree.prototype.traverseDepthFirst_preOrder = function(fn) {
  // implement me...
  // first look at parent, then left then right
  fn(this)
  if (this.left) this.left.traverseDepthFirst_preOrder(fn)
  if (this.right) this.right.traverseDepthFirst_preOrder(fn)
};
// Time complexity:

BinarySearchTree.prototype.traverseDepthFirst_postOrder = function(fn) {
  // implement me...
  // children first
  if (this.left) this.left.traverseDepthFirst_postOrder(fn)
  if (this.right) this.right.traverseDepthFirst_postOrder(fn)
  fn(this)
};
// Time complexity:


BinarySearchTree.prototype.checkIfFull = function() {
  // implement me...
};
// Time complexity:

BinarySearchTree.prototype.checkIfBalanced = function() {
  // implement me...
};
// Time complexity:


let treedle = new BinarySearchTree(5)
console.log(treedle)
console.log(treedle.contains(5))
console.log(treedle.contains(3))
console.log('----------------------------------')
treedle.insert(3)
console.log(treedle)
console.log('tree has 3? ', treedle.contains(3))
console.log('tree has 2? ', treedle.contains(2))
console.log('----------------------------------')
treedle.insert(2)
console.log(treedle)

treedle.insert(8)
console.log(treedle)
console.log('---------------in Order-------------------')
let transform = function(arg) {
  console.log(`${arg.value}!!!`)
}
treedle.traverseDepthFirst_inOrder(transform)
console.log('----------------pre Order------------------')
treedle.traverseDepthFirst_preOrder(transform)
console.log('---------------post Order-------------------')
treedle.traverseDepthFirst_postOrder(transform)
