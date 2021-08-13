export default function getType(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}

export function random() {
  //floor 정수 반환
  return Math.floor(Math.random() * 10);
}

export const scope = () => {
  if (true) {
    var b = 321; // 함수 레벨 스코프 (잘 쓰지 않음.)
    const a = 123; // let도 동일하다.(블록 레벨 스코프)
    console.log('a 는 해당 블록 안에서만 동작합니다.');
    console.log('a = ' + a);
  }
  console.log('b 는 함수 안에서만 동작합니다.');
  console.log('b = ' + b);
};
