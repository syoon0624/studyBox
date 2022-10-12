// 화살표 함수: 선언으로 만들 수 x, 표현!!

const sum1 = function(a,b) {
    return a + b
}

//화살표 함수(중괄호가 없다면 바로 return)
const sum2 = (a,b) => a + b
//소괄호 생략
const log = c => console.log(c)

//함수 표들
const a = () => {} // 매개변수가 없을 경우
const b = x => {} // 매개변수 1개는 소괄호 생략 가능
const c = (x, y) => {} //매개변수가 없거나 2개 이상은 소괄호를 생략 불가
const d = x => { return x * x }
const e = x => x * x
const f = x => {
    console.log(x * x)
    return x * x
}
const g = () => {return {a : 1}}
const h = () => ({a: 1}) //객체 데이터 활용
const i = () => {return [1, 2, 3]}
const j = () => [1, 2, 3]