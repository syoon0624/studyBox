//비동기 처리 예 1. 콜백 함수
function a(callback) {
  setTimeout(() => {
    console.log('a');
    callback();
  });
}
function b(callback) {
  setTimeout(() => {
    console.log('b');
    callback();
  });
}
function c() {
  console.log('c');
}
a(() => {
  b(() => {
    c();
  });
});
