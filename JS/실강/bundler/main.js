document.querySelector('#input').addEventListener('keydown', (event) => {
  console.log(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(event.key));
});
