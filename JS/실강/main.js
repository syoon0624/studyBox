let newC
let newD
// 객체 리터럴 선언!
const literal = {
  a: 1,
  b: 2,
  // 일반 함수는 호출 위치에서 따라 this 정의!
  c: function () {
    console.log(this.a)
  },
  // 화살표 함수는 this가 자신이 선언된 렉시컬(함수) 범위에서 this 정의!
  d: () => {
    console.log(this.a)
  }
}
literal.c() // 1
literal.d() // undefined
newC = literal.c // getter: 값을 호출해주는 선언
newD = literal.d
newC() // undefined
newD() // undefined
newC.call(literal) // 1
newD.call(literal) // undefined

// 인스턴스 생성!
const instance = new function () {
  this.a = 3
  this.b = 4
  // 일반 함수는 호출 위치에서 따라 this 정의!
  this.c = function () {
    console.log(this.a)
  }
  // 화살표 함수는 this가 자신이 선언된 렉시컬(함수) 범위에서 this 정의!
  this.d = () => {
    console.log(this.a)
  }
}
instance.c() // 3
instance.d() // 3
newC = instance.c
newD = instance.d
newC() // undefined
newD() // 3
newC.call(instance) // 3
newD.call(instance) // 3