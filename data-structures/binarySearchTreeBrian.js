/*

Binary Search Tree!

Name your class Tree.

I'd suggest making another class called Node. You don't have to; you can make them all plain JS objects

Here you'll make a BST. Your Tree class will have keep track of a root which will be the first item added
to your tree. From there, if the item is less than the value of that node, it will go into its left subtree
and if greater it will go to the right subtree.

There is a tree visualization helper. It will tell show you how your tree looks as you create it. In order
for this to work and for the unit tests to pass you, you must implement a Tree .toObject function that returns
your tree as a series of nested objects. Those nested objects must use the following names for their properties

value - integer     - value being contained in the node
left  - Node/object - the left node which itself may be another tree
right - Node/object - the right node which itself may be another tree

*/

class Tree {
  constructor() {
    this.root = null
  }

  toObject() {
    return this.root
  }

  add(value) {

    if (!this.root) {
      this.root = new Node(value)
      return
    }
    let current = this.root

    while(true) {
      if (current.value > value) {
        // go left
        if (current.left) {
          current = current.left
        } else {
          current.left = new Node(value)
          return
        }
      } else {
        // go right
        if (current.right) {
          current = current.right
        } else {
          current.right = new Node(value)
          return
        }
      }
    }
  }
}

class Node {
  constructor(value, left=null, right=null) {
    this.value = value
    this.left = left
    this.right = right
  }
}
