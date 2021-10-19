import { arr } from './sub.js';

// 1, 2, 3, 4, 19, 18, 61, 27;
arr.sort((a, b) => {
  return b - a;
});
console.log(arr);
//1.filter 2.foreach 3.map 4.push 5.reduce 6.sum 7.splice
