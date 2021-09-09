Array.prototype.myFilter = function (func, thisArg) {
  const filtered = [];
  for (let i = 0; i < this.length; i++) {
    if (func.call(thisArg, this[i], i, this)) filtered.push(this[i]);
  }
  return filtered;
};

function createDebounceFunction(callback, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => callback.apply(this, arguments), delay);
  };
}
