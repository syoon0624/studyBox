// 인터페이스(Inerface)

interface User {
  readonly name: string;
  age: number;
  // 선택적으로 있어도 되고, 없어도 되는 프로퍼티
  isValid?: boolean;
}

const heropy: User = {
  name: 'Hercules',
  age: 30,
  isValid: true,
};

const neo: User = {
  name: 'Neo',
  age: 102,
};

// 인덱스 시그니처
interface Fruits {
  [key: number]: string;
}

const fruits: Fruits = ['Apple', 'Orange', 'Banana'];
console.log(fruits);

// 인터페이스 확장 (Extends)
interface UserA {
  name: string;
  age: number;
}
interface UserB extends UserA {
  isValid: boolean;
}

const heropys: UserA = {
  name: 'Hercules',
  age: 30,
  isValid: true, // Error!
};

const neos: UserB = {
  name: 'Neo',
  age: 102,
  isValid: true,
};
