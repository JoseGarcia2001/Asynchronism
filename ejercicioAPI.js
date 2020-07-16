const apiKey = "b89fc45c2067cbd33560270639722eae";

async function getMostPopularMovies() {
  const URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;

  const response = await fetch(URL);
  const data = await response.json();
  return data.results;
}

async function getTopMoviesIds(n = 3) {
  const popularMovies = await getMostPopularMovies();
  const ids = popularMovies.slice(0, n).map((movie) => movie.id);
  return ids;
}

async function getMovie(id) {
  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
  const data = await fetch(URL);
  return data.json();
}

function renderMovie(movies) {
  const movieList = document.getElementById("Movies");
  movieList.innerHTML = "";

  movies.forEach((movie) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <h3>${movie.title}</h3>
      <img src="https://image.tmdb.org/t/p/w342${movie.poster_path}">
      <p>Release Date: ${movie.release_date}</p>
      `;
    movieList.appendChild(listItem);
  });
}

async function renderInSequence() {
  const ids = await getTopMoviesIds();
  const movies = [];
  for (const id of ids) {
    const movie = await getMovie(id);
    movies.push(movie);
  }
  return movies;
}

async function renderInParallel() {
  const ids = await getTopMoviesIds();
  const moviePromises = ids.map((id) => getMovie(id));
  const movies = await Promise.all(moviePromises);

  return movies;
}

async function renderFaster() {
  const ids = await getTopMoviesIds();
  const moviePromises = ids.map((id) => getMovie(id));
  const movies = Promise.race(moviePromises);

  return movies;
}

async function PrintSequence() {
  const movies = await renderInSequence();
  renderMovie(movies);
}

async function PrintParallel() {
  const movies = await renderInParallel();
  renderMovie(movies);
}

async function PrintFaster() {
  const movie = await renderFaster();
  renderMovie([movie]);
}

const printInSequence = document.getElementById("Print-In-Sequence");
printInSequence.onclick = PrintSequence;

const PrintInParallel = document.getElementById("Print-In-Parallel");
PrintInParallel.onclick = PrintParallel;

const PrintTheFaster = document.getElementById("Print-Faster");
PrintTheFaster.onclick = PrintFaster;
