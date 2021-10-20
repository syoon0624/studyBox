const users = [
  { id: '1', name: 'HEROPY' },
  { id: '2', name: 'Neo' },
  { id: '3', name: 'Lucas' },
  { id: '4', name: 'Lewis' },
  { id: '5', name: 'Evan' },
  { id: '6', name: 'Amy' },
];

const ulEl = document.createElement('ul');
users.forEach((user, index) => {
  const liEl = document.createElement('li');
  liEl.dataset.userId = user.id;
  liEl.textContent = user.name;
  liEl.addEventListener('click', () => {
    liEl.remove();
  });
  ulEl.append(liEl);
});

document.body.append(ulEl);
