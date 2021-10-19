Array.prototype.double = function () {
  return this.map(function (item) {
    return item * 2;
  });
};
Object.prototype.heropy = function () {
  Object.keys(this).forEach(key => {
    this[key] *= 2;
  });
};

const arr = [3, 4, 5, 6];
const doubledArr = arr.double();
console.log(doubledArr);

const obj = {
  a: 3,
  b: 4,
  c: 5,
};

obj.heropy();
console.log(obj);
