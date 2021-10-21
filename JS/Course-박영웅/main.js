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

fetchMovie()
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
    const errEl = document.createElement('div');
    errEl.textContent = err;
    document.body.append(errEl);
  })
  .finally(() => {
    console.log('Done!');
  });

(async function () {
  try {
    const movie = await fetchMovie();
    console.log(movie);
  } catch (errorMsg) {
    console.log(errorMsg);
    const errorEl = document.createElement('div');
    errorEl.textContent = errorMsg;
    document.body.append(errorEl);
  } finally {
    console.log('Done!');
  }
})();
