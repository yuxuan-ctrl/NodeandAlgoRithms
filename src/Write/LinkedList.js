class Node {
  constructor(data) {
    this.data = data;
    this.next = null
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  append(data) {
    const newNode = new Node(data);
    if (this.length < 1) {
      this.head = newNode;
    }
    else {
      let current = this.head;
      while (current.next) {
        current = current.next
      }
      current.next = newNode;
    }
    this.length += 1
  }
}

let li = new LinkedList();
li.append('aaaa')
console.log(li.length);
li.append('bbbb')
li.append('cccc')
li.append('dddd')
console.log(li);
