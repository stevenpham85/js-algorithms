function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

class Queue {
  constructor() {
    this.first = new ListNode(0);
    this.last = this.first;
    this.size = 0;
  }

  isEmpty() {
    return this.size == 0;
  }

  enqueue(val) {
    let new_node = new ListNode(val);
    this.last.next = new_node;
    this.last = new_node;
    if (this.size == 0) {
      this.first = new_node;
    }
    this.size += 1;
  }

  dequeue() {
    if (this.size > 0) {
      let value = this.first.val;
      this.first = this.first.next;
      this.size -= 1;
      return value;
    } else {
      throw "The queue is empty";
    }
  }

  first() {
    return this.first.val;
  }

  last() {
    return this.last.val;
  }
}

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.isEmpty());
console.log("Size ", q.size);
console.log(q.dequeue());
console.log("size ", q.size);
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.isEmpty());
