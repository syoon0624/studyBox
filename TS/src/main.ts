const a: string = 'Hello world!';
const b: number = 123;
const c: boolean = true;
const d: number[] = [1, 2, 3];
const e: Obj = {
  name: 'Lee',
  age: 85,
  isValid: true,
};

interface Obj {
  name: string;
  age: number;
  isValid: boolean;
}

// 튜플 지정
const g: [number, number][] = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const h: unknown = 123;

interface Objec {
  [key: string]: unknown;
}

const Lee: Objec = {
  a: 1,
  b: 'Helowe',
  c: true,
};

function log(a: number, b: number): number {
  return a + b;
}

log(1, 2);

// 유니온 타입
let name: number | string = 1;
name = 'hello';

interface A {
  a: string;
}
interface B {
  b: string;
}

// 인터섹션 타입
const Lees: A & B = {
  a: 'a',
  b: 'b',
};

export {};
