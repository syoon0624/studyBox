// 구조분해 할당

const array = [1, 2, 3]
const [, a, b] = array

console.log(a)
console.log(b)

//객체 구조분해

const obj = {a: 1, b: 2, c: 3}
const {a: x, b: y, c: z} = obj

console.log(x, y, z)
// 1 2 3