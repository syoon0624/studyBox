class Queue {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  enqueue(element) {
    this.items[this.count] = element;
    console.log(`queue[${this.count}]: ${element} enqueued`);
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

const queue = new Queue();
queue.enqueue('one');
queue.enqueue('two');
queue.enqueue('three');

queue.print();

queue.dequeue();
queue.print();

queue.size();
queue.clear();

queue.isEmpty();
queue.print();

queue.enqueue('four');
queue.enqueue('five');
queue.enqueue('six');
queue.front();

queue.print();
