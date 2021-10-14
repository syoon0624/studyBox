class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  push(element) {
    this.items[this.count] = element;
    console.log(`stack[${this.count}]: ${element} Added`);
    this.count++;
    return this.count - 1;
  } // someStack.push('element')
  pop() {
    if (this.count == 0) return undefined;

    let toRemove = this.items[this.count - 1];
    this.count--;
    console.log(`stack[${this.count}]: ${toRemove} removed`);
    return toRemove;
  } // someStack.pop()

  peek() {
    console.log(`stack[peek]: ${this.items[this.count - 1]}`);
    return this.items[this.count - 1];
  }

  isEmpty() {
    console.log(this.count === 0);
    return this.count === 0;
  }
  size() {
    console.log(`Stack size: ${this.count}`);
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
    console.log('stack clear.');
    return this.count;
  }
  /*
  
  
  */
}

const stack = new Stack();

stack.push('apple');
stack.push('banana');

stack.pop();
stack.print();
stack.clear();

stack.print();
stack.push('one');
stack.push('two');
stack.push('three');
stack.print();
