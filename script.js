class stackData {
  constructor(value, nextElem) {
    this.value = value;
    this.next = nextElem;
  }
}

class Stack {
  constructor(maxSize) {
    this.currentSize = 0;
    this.maxSize = maxSize;

    if (maxSize === undefined) this.maxSize = 10;
    else if (Number.isInteger(maxSize) === false) {
      throw new Error("Parameter is invalid");
    }
  }

  push(value) {
    if (this.currentSize < this.maxSize) {
      this.next = this.first;
      this.first = new stackData(value, this.next);
      this.currentSize++;
    } else throw new Error("Stack is full");
  }

  pop() {
    if (this.first !== undefined) {
      var popa = this.first.value;
      this.first = this.first.next;
      this.currentSize--;

      return popa;
    } else throw new Error("Stack is empty");
  }

  peek() {
    if (this.first !== undefined) return this.first;
    else return null;
  }

  isEmpty() {
    return this.first === undefined;
  }

  toArray() {
    let newArray = [];

    if (this.isEmpty()) return arr;
    let elem = this.first;

    while (elem) {
      newArray.push(elem.value);
      elem = elem.next;
    }
    return newArray;
  }

  static fromIterable(iterable) {
    if (typeof iterable[Symbol.iterator] !== "function")
      throw new Error("Entity is not iterable!");

    const newStack = new Stack(iterable.length);
    for (const el of iterable) {
      newStack.push(el);
    }
    return newStack;
  }
}

module.exports = {Stack};