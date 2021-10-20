import { loadImage } from './utils/index.js';
const url =
  'https://m.media-amazon.com/images/M/MV5BMjA0YjYyZGMtN2U0Ni00YmY4LWJkZTItYTMyMjY3NGYyMTJkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX1300.jpg';

const loadingEl = document.querySelector('.loading');

loadImage(url).then(() => {
  loadingEl.remove();
});

//또는
(async function () {
  await loadImage(url);
  loadingEl.remove();
})();
