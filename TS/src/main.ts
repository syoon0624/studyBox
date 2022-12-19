// 타입 가드(Guard)

function add(val: string | number | boolean) {
  let res = 'Result => ';
  if (typeof val === 'number') {
    res += val.toFixed(2);
  }
  if (typeof val === 'string') {
    res += val.toUpperCase();
  }
  console.log(res);
}

add(3.141592); // 'Result => 3.14'
add('hello world'); // 'Result => "hello world"'

const el = document.querySelector('body') as HTMLBodyElement;
if (el) {
  console.log(el.innerHTML);
}
