//화살표 함수
const add = (a, b) => {
  return a + b;
};
//템플릿 리터럴
const hello = name => {
  console.log(`Hello, ${name}!`);
};

const sum = add(1, 2);
console.log(sum);

//객체 활용법
const dog = {
  name: '멍멍이',
  age: 2,
  sample: {
    race: '리트리버',
    race2: 'hello',
  },
};

console.log(dog);
console.log(dog.sample.race2);

//비구조화 할당(객체 구조분해)
function print(dog) {
  const { name, age } = dog;
  const text = `우리 강아지는 ${name}(${age})에요!`;
  console.log(text);
}

//객체 안 함수
const act = {
  name: '배우',
  sound: '테너',
  say: function () {
    console.log(this.sound);
  },
};

//getter, setter 함수
const numbers = {
  a: 1,
  b: 2,
  get sum() {
    console.log('sum 함수가 실행됩니다!');
    return this.a + this.b;
  },
  set setA(value) {
    this.a = value;
  },
  set setB(value) {
    this.b = value;
  },
};

numbers.a = 5;
numbers.setA = 7;
numbers.setB = 8;

//배열
const a = [0, 'me', 2, true];
const object = [
  {
    name: '멍멍이',
  },
  {
    name: '야옹이',
  },
];

object.push({ name: '킁킁이' });
console.log(a);
console.log(a[0]);
console.log(object[2].name);

//values와 keys
console.log(Object.entries(object)); // 구조를 배열화
console.log(Object.keys(object)); // [{"name"}, {"name"}]
console.log(Object.values(object)); // [{'멍멍이'},{'야옹이'}]

//반복문
/* for 문 */
for (let i = 0; i < 10; i++) {
  console.log(i);
}

const num_array = [1, 2, 3, 4, 5];
for (let number of num_array) {
  console.log(number);
}

/*객체에 대한 반복적인 작업을 할때 사용 */
for (let key in num_array) {
  console.log(`${key}: ${num_array[key]}`); // key와 value 동시에 출력
}

/* while 문 */
let k = 0;
while (true) {
  k++;
  if (k === 10) {
    k = 0;
    break;
  } else if (k != 0) {
    continue; // 바로 다음 루프로 넘어감. 해당 루프 스킵.
  }
}

//퀴즈 1
function biggerThanThree(numbers) {
  let k = [];
  for (let i of numbers) {
    if (i > 3) {
      k.push(i);
    }
  }
  return k;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbeers));

//배열 내장함수
/* forEach */
const superheros = ['아이언맨', '캡틴 아매리카', '블랙 위도우', '토르'];

superheros.forEach(hero => {
  console.log(hero);
});

/* map */
const array = [1, 2, 3, 4, 5, 6, 7, 8];

const square = n => n * n;
const squared = array.map(square);
//혹은
const squared_2 = array.map(n => n * n);

const items = [
  {
    id: 1,
    text: 'hello',
  },
  {
    id: 2,
    text: 'bye',
  },
];

const texts = items.map(item => item.text);
console.log(texts); //['hello','bye']

/* indexOf */
const index = array.indexOf(2);
console.log(index); // 1

/* findIndex */
const store = [
  {
    id: 1,
    text: 'me',
    done: true,
  },
  {
    id: 2,
    text: 'you',
    done: false,
  },
  {
    id: 3,
    text: 'our',
    done: true,
  },
];

const index = store.findIndex(st => st.id === 3); //find의 경우, 해당 객체를 반환
console.log(index); // 2
/* filter */
//조건에 맞는 원소들을 찾아 원소들을 가지고 새로운 배열을 만듬
const tasksNotDone = store.filter(st => st.done === false);
console.log(tasksNotDone); // id:2인 객체만 반환

/* splice */
const numberss = [10, 20, 30, 40];
const index = numberss.indexOf(30);
numberss.splice(index, 2); //인덱스부터 시작해서 2개 지우겠다.
const spliced = numberss.splice(index, 2);
console.log(spliced); // 30, 40
console.log(numberss); // 10, 20

/* slice */
//기존의 배열을 건드리지 않는다.
const sliced = numbers.slice(0, 2);
console.log(sliced); // [10, 20]
console.log(numberss); //[10,20,30,40]

/* shift */
//첫번째 원소를 추출
const value = numberss.shift();
console.log(value); //10
console.log(numbers); // [20, 30, 40]

/* pop */
const value = numberss.pop();
console.log(value); //40

/* unshift */
numbers.unshift(5); // 맨 앞부분에 5 추가

/* push */
//는 알고있음

/* concat */
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concated = arr1.concat(arr2);
console.log(concated); // [1, 2, 3, 4, 5, 6]

/* join */
console.log(arr1.join()); // 1,2,3(문자열 화 해줌)
console.log(arr1.join(' ')); // 1 2 3

/* reduce(중요) */
//
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, current) => accumulator + current, 0); // 0 : accumulator초기값
console.log(sum); // 15(1+2+3+4+5)

//응용
const alphabets = ['a', 'a', 'a', 'b', 'c', 'c', 'd', 'e'];
const counts = alphabets.reduce((acc, current) => {
  if (acc[current]) {
    acc[current] += 1;
  } else {
    acc[current] = 1;
  }
  return acc;
}, {});

console.log(counts); // a:3 b:1 c:2 d:1 e:1
