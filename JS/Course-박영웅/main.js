//구조 분해 할당
const arr1 = [1, 2, 3];

//[, y, z]도 가능
const [x, y, z] = arr1;
console.log(x, y, z);

//객체 데이터 내부의 순서는 중요하지도 않고, 보장되지도 않는다. -> Key값이란 것이 있기 때문에
const objA = {
  a: 1,
  b: 2,
  c: 3,
  d: 6,
  e: 9,
};
//key값을 그대로 써야 함. 이미 있는 value값은 재할당 x
const { a: heropy, c, d = 4, ...rest } = objA;
// const { c, a } = objA 도 가능
console.log(heropy, c, d, rest);

// 매개변수에 기본값 사용(재할당 x)
function xyz(a = 1) {
  return a * 2;
}
console.log(xyz(3));
console.log(xyz());

//기본값 사용2
function abc(o = { name: 'hello' }) {
  //optional chaining: 조회가 불가한 항목을 undefined처리
  return o?.name?.toUpperCase();
}

console.log(abc({ name: 'HEROPY' }));
console.log(abc());
