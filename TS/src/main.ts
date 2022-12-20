interface User {
  name: string;
  age: number;
  isValid: boolean;
}

const heropy: Partial<User> = {
  name: 'Heropy',
};

const heropy2: Required<User> = {
  name: 'Heropy2',
  age: 85,
  isValid: true,
};

const heropy3: Readonly<User> = {
  name: 'Heropy3',
  age: 86,
  isValid: false,
};

// 에러
heropy3.age = 102;
