const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// 전개 연산자(spread operator)
const arr3 = [...arr1, ...arr2];
console.log(arr3);

arr1.push(...arr2);
console.log(arr1);

const objA = { a: 1, b: 2 };
const objB = { b: 3, d: 4 };

//const objAB = Object.assign({}, objA, objB);
const objAB = {
  ...objA,
  ...objB,
};
console.log(objAB);

function arg(...rest) {
  console.log(rest);
}
arg(...arr1);
