class Stack {
  constructor() {
    this.List = [];
  }
  push(element) {
    return this.List.push(element);
  }
  pop() {
    if (this.isEmpty()) throw Error('栈空了')
    return this.List.pop();
  }
  peek() {
    if (this.isEmpty()) throw Error('栈空了')
    return this.List.peek()
  }
  isEmpty() {
    return (this.List.length === 0)
  }
  toString() {
    return this.List.join('')
  }
}

let s = new Stack();

// s.push(123)
// s.push(321)
// s.push(1234567)
// console.log(s.toString());

module.exports = { Stack }