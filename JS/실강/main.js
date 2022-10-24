;(async () => {
  // 초기화
  const moreBtnEl = document.querySelector('.btn')
  let page = 1

  // 최초 호출
  const movies = await getMovies()
  page += 1
  renderMovies(movies);

  moreBtnEl.addEventListener('click', async () => {
    const movies = await getMovies(page)
    page += 1  
    renderMovies(movies);
  })

})()

async function getMovies(page = 1) {
  const res = await fetch(`https://omdbapi.com/?apikey=7035c60c&s=frozen&page=${page}`)
  const { Search: movies } = await res.json()
  return movies
}

function renderMovies(movies) {
  const moviesEl = document.querySelector('.movies')
  
  for (const movie of movies) {
    const el = document.createElement('div')
    el.classList.add('movie')

    el.innerHTML = /* html */ `
      <h1>${movie.Title}</h1>
      <img src="${movie.Poster}" />
    `

    const h1El = el.querySelector('img')
    h1El.addEventListener('click', () => {
      console.log(movie.Title)
    })
    moviesEl.append(el)
  }
}

