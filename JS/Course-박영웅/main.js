import { arr } from './sub.js';

//assign
const userA = {
  name: 'HEROPY',
  age: 85,
  email: 'thesecon@hmail.com',
};
const userB = {
  name: 'Leon',
  age: 22,
  isValid: false,
};

//Object.assign(userA, userB); // userA = userB 만약, assign(userA,userB,C,D...) 면 BCD의 데이터가 A로 병합
/*console.log(userA);
console.log(userB);
console.log(userA === userB); //false
*/
const userAB = Object.assign({}, userA, userB);
console.log(userAB);

//entries 배열화 한다.
const user = {
  name: 'HEROPY',
  age: 85,
  isValid: false,
};

console.log(Object.entries(user));

for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}

//freeze 객체 데이터를 더이상 할당하지 않도록 함.
//확인방법 : Object.isFrozen(객체)

//keys: key값만 배열로 변환(많이 쓰인다고 함)
//values: value값만 배열로 변환
