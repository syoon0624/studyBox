function sum(...rest) {
    console.log(arguments) // 모든 함수 내에서 이용 가능한 지역 변수, 모든 인수를 참조 가능
    Array.from(arguments).forEach // 유사배열을 배열처럼 만들어주는 문구
    return rest.reduce((acc, cur) => acc + cur)
}
    
const res = sum(1, 2, 3, 4, 5, 6, 7)
console.log(res)