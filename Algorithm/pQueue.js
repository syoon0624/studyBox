class QueueElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  enqueue(element, priority) {
    const queueElement = new QueueElement(element, priority);
    let isEnqueued = false;

    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > queueElement.priority) {
        this.items.splice(i, 0, queueElement);
        isEnqueued = true;
        console.log(
          `pQueue[${i}]: ${element} enqueued in front of ${
            this.items[i + 1].element
          }`
        );
        break;
      }
    }
    if (!isEnqueued) {
      this.items[this.count] = queueElement;
      console.log(`queue[${this.count}]: ${element} is enqueued`);
    }
    /*
    this.items[this.count] = queueElement;
    
    this.items.sort((a, b) => {
      if (a.priority > b.priority) {
        return 1;
      }
      if (a.priority < b.priority) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });

    console.log(
      `queue[${this.count}]: element: ${element}, priority: ${priority} enqueued`
    );
    */
    this.count++;
    return this.count - 1;
  }

  dequeue() {
    if (this.count === 0) return undefined;
    let toDequeue = this.items[0];
    this.count--;
    //this.items.shift();
    for (let i = 0; i < this.count; i++) {
      this.items[i] = this.items[i + 1];
    }
    console.log(`queue[0]: ${toDequeue} has dequeued`);
    return toDequeue;
  }
  front() {
    console.log(`queue[front]: ${this.items[0]}`);
    return this.items[0];
  }
  isEmpty() {
    console.log(this.count === 0);
    return this.count === 0;
  }
  size() {
    console.log(`Queue size: ${this.count}`);
    return this.count;
  }
  print() {
    let printArr = [];
    for (let i = 0; i < this.count; i++) {
      printArr[i] = this.items[i];
    }
    this.count === 0 ? console.log('[]') : console.log(printArr);
    return printArr;
  }
  clear() {
    this.count = 0;
    console.log('Queue clear.');
    return this.count;
  }
}

queue = new PriorityQueue();

queue.enqueue('two', 2);
queue.enqueue('four', 3);
queue.enqueue('three', 3);
queue.enqueue('one', 1);

queue.print();

queue.dequeue();

queue.print();
