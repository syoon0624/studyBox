const el = document.querySelector('[contenteditable]');
const kl = document.querySelector('ul');
const liEl = document.querySelector('li');

el.addEventListener('blur', event => {
  console.log(event.target.innerHTML);
});

//append도 가능
kl.prepend(document.createElement('li')); // ul 앞에서 밀어넣는다.

//data
liEl.dataset.heropy;
