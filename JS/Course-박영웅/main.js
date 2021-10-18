//함수 선언
function add(eventName, callback) {
  console.log(eventName);
  callback(`Hello, It's Me! ${eventName}`);
}

add('click', function (event) {
  console.log(event);
});

//함수 표현 : 호이스팅 x
const abc = function () {};
abc();

//화살표 함수 : return 생략 가능, 하지만 그럴려면 중괄호를 없애야함.
const cde = param => {
  console.log(param);
};
cde(1234);

/*
() => {} // 매개변수가 없을 경우
x => {} // 매개변수가 한 개인 경우, 소괄호를 생략.
(x, y) => {} // 매개변수가 여러 개인 경우, 소괄호를 생략 불가.

x => { return x * x; }
x => x * x  // 암묵적 return, 위 표현과 동일.

() => { return { a: 1 }; }
() => ({ a: 1 })  // 위 표현과 동일.

() => {
  const x = 10;
  return x * x;
}
*/

//즉시 실행 함수
(function (win, doc) {
  console.log(123);
})(window, document);

//콜백 함수? 함수의 인수로 사용되는 모든 함수
