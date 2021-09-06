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





const res = [];
function selectFromInterval(arr, startRange, endRange) {
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
    res.sort((a, b) => a - b);
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
    res.sort((a, b) => a - b);
  }
};





let myiterable = {
  from: 3,
  to: 7,
  *[Symbol.iterator]() {
    for (let value = this.from; value <= this.to; value++) {
      yield value;
    }
  }
};
if (myiterable.from !== +myiterable.from || myiterable.to !== +myiterable.to) {
  throw new Error("Object parameters must contain numbers");
} else if (myiterable.from > myiterable.to) {
  throw new Error('"from" cannot be greater then "to"');
} else {
  for (let item of myiterable) {
    console.log(item);
  }
}
