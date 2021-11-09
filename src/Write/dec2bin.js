const { Stack } = require('./Stack')
class Dec2bin {
  constructor() {
  }
  decTobin(dec) {
    const stack = new Stack()
    while (dec > 0) {
      stack.push(dec % 2)
      dec = Math.floor(dec / 2);
    }
    return stack.toString()
  }
}

const test = new Dec2bin();

console.log(test.decTobin(100));