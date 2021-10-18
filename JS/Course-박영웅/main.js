const inputEl = document.querySelector('input');

console.log(inputEl);

inputEl.addEventListener('keyup', function (event) {
  console.log(event.key);
  switch (event.key) {
    case 'Enter':
      // 서버로 전송!
      console.log('전송');
      break;
    case 'Escape':
      // 종료!
      console.log('종료');
      break;
  }
});
