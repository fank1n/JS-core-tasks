const makeObjectDeepCopy = (copiedObj) => {
  let object, value, key;

  if (typeof copiedObj !== "object" || copiedObj === null) {
    return copiedObj;
  }

  object = {};

  for (key in copiedObj) {
    value = copiedObj[key];

    object[key] = makeObjectDeepCopy(value);
  }

  return object;
};





function selectFromInterval(arr, startRange, endRange) {
  const res = [];
  if (startRange < endRange) {
    for (let elem of arr) {
      if (elem >= startRange && elem <= endRange) {
        res.push(elem);
      } else if (elem !== +elem) {
        throw new Error("Some element of the array is not a number");
      } else if (startRange !== +startRange || endRange !== +endRange) {
        throw new Error("One or both of the interval values are not a number");
      }
    }
    return console.log(res.sort((a, b) => a - b));
  } else {
      for (let elem of arr) {
        if (elem <= startRange && elem >= endRange) {
          res.push(elem);
        } else if (elem !== +elem) {
          throw new Error("Some element of the array is not a number");
        } else if (startRange !== +startRange || endRange !== +endRange) {
          throw new Error("One or both of the interval values are not a number");
        }
      }
    return console.log(res.sort((a, b) => a - b));
  }
};





const myIterable = {
  from: 3,
  to: 7,
  *[Symbol.iterator]() {
    for (let value = this.from; value <= this.to; value++) {
      yield value;
      if (myIterable.from !== +myIterable.from || myIterable.to !== +myIterable.to) {
        throw new Error("Object parameters must contain numbers");
      } else if (myIterable.from > myIterable.to) {
        throw new Error('"from" cannot be greater then "to"');
      }
    }
  }
}