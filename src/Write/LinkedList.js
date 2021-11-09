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
  insert(position,data){
    const newNode = new Node(data);
    if(position<0 || position>this.length) return false;
    if(position ===0){
      newNode.next = this.head;
      this.head = newNode;
    }
    else{
      let currentNode = this.head;
      let previousNode ;
      let index = 0;
      while(index++<position){
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next=newNode;
      newNode.next=currentNode
    }
    this.length+=1;
    return true;
  }
  toString(){
    let listString = '';
    let currentNode = this.head;
    if(this.length==0){
      return ''
    }
    else{
      while(currentNode){
        listString+=currentNode.data
        currentNode=currentNode.next
      }
      return listString
    }
  }
}

let li = new LinkedList();
li.append('aaaa')
li.append('bbbb')
li.insert(0,"333")
console.log(li);
console.log(li.toString());
