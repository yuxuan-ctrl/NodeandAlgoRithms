class QueueItem {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }
  enQueue(element, priority) {
    const queueItem = new QueueItem(element, priority)
    let added = false;
    if (this.isEmpty()) {
      this.items.push(queueItem)
    }
    else {
      for (let i = 0; i < this.items.length; i++) {
        added++;
        if (priority <= this.items[i].priority) {
          this.items.splice(i, 0, queueItem)
          added = true
          break;
        }
      }
      if (!added) {
        this.items.push(queueItem)
      }
    }
  }
  outQueue() {
    return this.items.shift()
  }
  front() {
    return this.items[0]
  }
  isEmpty() {
    return this.items.length === 0
  }
}
class Queue {
  constructor(items) {
    this.items = items;
  }
  enQueue(element) {

    this.items.push(element)

  }
  outQueue() {
    return this.items.shift()
  }
  front() {
    return this.items[0]
  }
  isEmpty() {
    return this.items.length === 0
  }
}

// const priorityQueue = new PriorityQueue();
// priorityQueue.enQueue('eee', 5);
// priorityQueue.enQueue('aaa', 1);
// priorityQueue.enQueue('bbb', 2);
// priorityQueue.enQueue('ccc', 3);
// priorityQueue.enQueue('fff', 4);
// priorityQueue.enQueue('ddd', 4);
// priorityQueue.outQueue();
// priorityQueue.outQueue();

// console.log(priorityQueue);

module.exports = { QueueItem, PriorityQueue, Queue }