class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  class Queue {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
    enqueue(value) {
      let node = new Node(value);
      if (this.tail) {
        this.tail.next = node;
      }
      this.tail = node;
      if (!this.head) {
        this.head = node;
      }
      this.size++;
    }
    dequeue() {
      if (!this.head) {
        return null;
      }
      let value = this.head.value;
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
      this.size--;
      return value;
    }
    peek() {
      if (!this.head) {
        return null;
      }
      return this.head.value;
    }
    isEmpty() {
      return this.size === 0;
    }
    getSize() {
      return this.size;
    }
  }