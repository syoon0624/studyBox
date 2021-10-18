const user = {
  name: 'HEROPY',
  age: 12345,
  email: 'thesecon@gmail.com',
  getAge: () => {
    console.log(this);
  },
};

const userB = {
  name: 'Neo',
};

console.log(user.getAge());
console.log(user.getAge.call(userB));
// this
// 일반 함수에서는 호출 위치에서 정의됨
// 화살표함수에서는 선언 위치에서 정의됨
