const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */



module.exports = class Queue {
  constructor() {
    this.list = null
  }

  getUnderlyingList() {
    return this.list
  }

  enqueue(value) {
    if(this.list === null) {
      this.list =  new ListNode(value)
    } else {
      this.addValue(this.list, value)
    }
  }

  dequeue() {
    let _delValue = NaN
    if(this.list === null) {
      return null
    }
    _delValue = this.list.value
    this.list = this.list.next
    return _delValue
  }

  addValue(storage, value) {
    if(storage.next === null) {
      return storage.next = new ListNode(value)
    }
    return this.addValue(storage.next, value)
  }
}


