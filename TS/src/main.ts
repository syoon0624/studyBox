// 함수 오버로딩(OverLoading)
function add1(a: string, b: string) {
  return a + b;
}
function add2(a: number, b: number) {
  return a + b;
}
add1('hello ', 'world~');
add2(1, 2);
// add1('hello ', 2)
// add2('hello ', 2)

// 를 이렇게 바꾼다.
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any) {
  return a + b;
}
add('hello ', 'world~');
add(1, 2);

// 제네릭(Generic)
/// 함수

interface Obj {
  x: number;
}
type Arr = [number, number];

// function toArray(a: string, b: string): string[]
// function toArray(a: number, b: number): number[]
// function toArray(a: boolean, b: boolean): boolean[]
// function toArray(a: Obj, b: Obj): Obj[]
// function toArray(a: Arr, b: Arr): Arr[]
// function toArray(a: any, b: any) {
//   return [a ,b]
// }

// 요 구조를 제네릭 구조로 바꿀 수 있다.
/// 타입 변수(T)
function toArray<T>(a: T, b: T) {
  return [a, b];
}

console.log(
  toArray('Neo', 'Anderson'),
  toArray(1, 2),
  toArray(true, false),
  toArray({ x: 1 }, { x: 2 }),
  toArray([1, 2], [3, 4])
);
