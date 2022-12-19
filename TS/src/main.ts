// 타입 별칭(Type Alias)
interface A {
  name: string;
  age: number;
}

const a: Hello = 1;
const b: Hello = 'Hello world';

type Hello = string | number | A;
