import { Loader, loadImage } from './utils/index.js';
const url = 'https://www.omdbapi.com/?i=tt3896198&apikey=7035c60c';

// async function fetchMovie() {
//   try {
//     const res = await fetch(url);
//     return await res.json();
//   } catch (error) {
//     console.log(error);
//   }
// }

// function fetchMovie() {
//   return new Promise(resolve => {
//     fetch(url)
//       .then(res => res.json())
//       .then(res => resolve(res));
//   });
// }

function fetchMovie() {
  return new Promise(async (resolve, reject) => {
    const res = await fetch(url);
    const data = await res.json();
    if (data.Error) {
      reject(data.Error);
    }
    resolve(data);
  });
}

const loader = new Loader({
  el: '.movie-loading',
  color: 'red',
});
loader.start();

const posterLoader = new Loader({
  el: '.poster-loading',
  color: 'green',
});
posterLoader.start();

// fetchMovie()
//   .then(res => {
//     console.log(res);
//     const movieEl = document.querySelector('.movie');
//     const titleEl = movieEl.querySelector('.movie__title');
//     const posterEl = movieEl.querySelector('.movie__poster');
//     const posterImgEl = posterEl.querySelector('img');
//     titleEl.textContent = res.Title;
//     posterImgEl.src = res.Poster;
//     loadImage(res.Poster).then(() => {
//       posterLoader.stop();
//     });
//   })
//   .catch(err => {
//     console.log(err);
//     const errEl = document.createElement('div');
//     errEl.textContent = err;
//     document.body.append(errEl);
//   })
//   .finally(() => {
//     loader.stop();
//     console.log('Done!');
//   });

(async function () {
  try {
    const movie = await fetchMovie();
    console.log(movie);
    const movieEl = document.querySelector('.movie');
    const titleEl = movieEl.querySelector('.movie__title');
    const posterEl = movieEl.querySelector('.movie__poster');
    const posterImgEl = posterEl.querySelector('img');
    titleEl.textContent = movie.Title;
    posterImgEl.src = movie.Poster;
    await loadImage(movie.Poster);
    posterLoader.stop();
  } catch (errorMsg) {
    console.log(errorMsg);
    const errorEl = document.createElement('div');
    errorEl.textContent = errorMsg;
    document.body.append(errorEl);
  } finally {
    loader.stop();
    posterLoader.stop();
    console.log('Done!');
  }
})();
