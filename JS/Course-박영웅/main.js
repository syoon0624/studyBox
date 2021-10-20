const divEl = document.querySelector('div');
let isOn = true;

const handler = () => {
  console.log('click!');
  isOn = !isOn;
};
//click (dblclick,contextmenu(우클릭) mousedown, mouseup, mousemove,mouseenter(일종의 hover))
divEl.addEventListener('click', () => {
  if (isOn) {
    console.log(isOn);
    handler();
  } else {
    divEl.removeEventListener('click', handler);
  }
});

//divEl.removeEventListener('click', handler);

//preventDefault
const el = document.querySelector('a');

el.addEventListener('click', event => {
  event.preventDefault(); // 해당 기본 이벤트 방지(클릭시 새탭으로 넘어가는 것)
});

//이벤트 버블링 (캡처링: 반대로 이벤트가 내려오는 것)
const parentEl = document.querySelector('.parent');
const childEl = document.querySelector('.child');

window.addEventListener('click', event => {
  console.log('Window!');
});
//이벤트 캡쳐링
document.body.addEventListener(
  'click',
  event => {
    console.log('Body!');
  },
  { capture: true }
);
parentEl.addEventListener('click', event => {
  console.log('Parent!');
});
//stopPropagation: 버블링 방지
childEl.addEventListener('click', event => {
  event.stopPropagation();
  console.log('Child!');
});

//load
const imgEl = document.createElement('img');
const loadingEl = document.createElement('div');

imgEl.src =
  'https://m.media-amazon.com/images/M/MV5BMjA0YjYyZGMtN2U0Ni00YmY4LWJkZTItYTMyMjY3NGYyMTJkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX2300.jpg';
imgEl.addEventListener('load', () => {
  loadingEl.remove();
});

loadingEl.textContent = 'loading...';
document.body.append(loadingEl, imgEl);

//resize
window.addEventListener('resize', event => {
  console.log(event);
});

//scroll
window.addEventListener('scroll', event => {
  console.log(event);
});

//key (keydown, keyup, keypress)
const inputEl = document.querySelector('input');

inputEl.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    //서버 전송!
    //switch문 활용
  }
  console.log(event);
});

//focus, blur(포커스가 풀릴때)
