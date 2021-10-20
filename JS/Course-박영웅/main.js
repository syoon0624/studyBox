//비동기 처리 예 2. promise
function a() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('a');
      resolve();
    });
  });
}
function b() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('b');
      resolve();
    });
  });
}
function c() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('c');
      resolve();
    });
  });
}
function d() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('d');
      resolve();
    });
  });
}
function e() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('e');
      resolve();
    });
  });
}

a()
  .then(() => b())
  .then(() => c())
  .then(() => d())
  .then(() => e());

async function x() {
  await a();
  await b();
  await c();
  await d();
  await e();
}
x();
