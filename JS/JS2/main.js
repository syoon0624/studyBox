// type of - 자료형 출력
import getType from './getType.js';

console.log(getType(123)); // [object Number] -> Number
console.log(getType(false)); // [object Boolean] -> Boolean
console.log(getType({})); //Object
console.log(getType([])); //Array
