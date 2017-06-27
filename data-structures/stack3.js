let Stack = (capacity) => {
  this.capacity = capacity
  this.storage = {}
  this.counter = 0
}

Stack.prototype.push = function(value) {
  console.log(this.capacity)
  console.log(this.storage)
  //console.log(this.prototype.storage)
}

let stacky = new Stack(2)
console.log('herees stacky! ', stacky)
stacky.push('bla')
console.log(stacky)
