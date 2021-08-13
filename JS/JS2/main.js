// type of - 자료형 출력
import getType from './getType.js';
import { random, scope } from './getType.js';

console.log(getType(123)); // [object Number] -> Number
console.log(getType(false)); // [object Boolean] -> Boolean
console.log(getType({})); //Object
console.log(getType([])); //Array

// 산술 연산자(arithmetic operator)
const a = random();

console.log(a);

console.log(scope());
