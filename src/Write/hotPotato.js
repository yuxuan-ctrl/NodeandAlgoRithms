const { Queue } = require('./PriorityQueue.js')
let items = ['111', '222', '333', '444', '555'];

const queue = new Queue(items);

function hotPotato(num) {
  while (items.length > 1) {
    for (let i = 0; i < num - 1; i++) {
      queue.enQueue(queue.outQueue())
    }
    queue.outQueue()
  }
  return queue.front()
}

console.log(hotPotato(5))