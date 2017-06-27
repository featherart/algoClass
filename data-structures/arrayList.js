/*
  object, not an array
  should have push, pop, get(index), delete(index)

*/

class ArrayList {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index]
  }

  pop() {
    let value = this.data[this.length]
    delete this.data[this.length--]
    return value
  }

  push(value) {
    this.data[++length] = value
    return length
  }

  delete(index) {
    let value = this.data[index]
    this._collapseTo(index)
    delete this.data[index]
    this.index--
    return value
  }

  _collapseTo(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i+1]
    }
    // delete this.data[this.length-1]
    //this.length--
  }
}
