//Modal
const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal-btn");
const modal = document.getElementById("modal");

// Buttons
const addActionBtn = document.getElementById("add-action-btn");
const addFantasyBtn = document.getElementById("add-fantasy-btn");
const addHorrorBtn = document.getElementById("add-horror-btn");
const addScifiBtn = document.getElementById("add-scifi-btn");

// Modal Input
const titleInput = document.getElementById("title");
const yearInput = document.getElementById("year");

// Movie Content
const aMovieTitle = document.getElementById("amovie-title");
const aMovieyear = document.getElementById("amovie-year");
const fMovieTitle = document.getElementById("fmovie-title");
const fMovieyear = document.getElementById("fmovie-year");
const hMovieTitle = document.getElementById("hmovie-title");
const hMovieyear = document.getElementById("hmovie-year");
const sMovieTitle = document.getElementById("smovie-title");
const sMovieyear = document.getElementById("smovie-year");

//
const actionSection = document.getElementById("action-section");
const fantasySection = document.getElementById("fantasy-section");
const horrorSection = document.getElementById("horror-section");
const scifiSection = document.getElementById("scifi-section");

function displayModal() {
  modal.style.display = "flex";
}

function hideModal() {
  modal.style.display = "none";
}

// For Action Genre
function addMovieToAction(event) {
  event.preventDefault();

  if (titleInput.value === "" || yearInput.value === "") {
    return;
  }

  const title = titleInput.value;
  const year = yearInput.value;

  const movie = actionFactory(title, year);

  clearLog();
  hideModal();
  appendNewActionMovie(movie);
}

function actionFactory(title, year) {
  return { title, year };
}

function appendNewActionMovie(movie) {
  const article = document.createElement("article");
  article.classList.add("action-movie-container");

  const h3 = document.createElement("h3");
  h3.classList.add("amovie-title");
  h3.textContent = movie.title;

  const yearRelease = document.createElement("p");
  yearRelease.classList.add("amovie-year");
  yearRelease.textContent = movie.year;

  article.append(h3, yearRelease);
  actionSection.appendChild(article);
}

// For Fantasy Genre
function addMovieToFantasy(event) {
  event.preventDefault();

  if (titleInput.value === "" || yearInput.value === "") {
    return;
  }

  const title = titleInput.value;
  const year = yearInput.value;

  const movie = fantasyFactory(title, year);

  clearLog();
  hideModal();
  appendNewFantasyMovie(movie);
}

function fantasyFactory(title, year) {
  return { title, year };
}

function appendNewFantasyMovie(movie) {
  console.log(movie);

  const article = document.createElement("article");
  article.classList.add("fantasy-movie-container");

  const h3 = document.createElement("h3");
  h3.classList.add("fmovie-title");
  h3.textContent = movie.title;

  const yearRelease = document.createElement("p");
  yearRelease.classList.add("fmovie-year");
  yearRelease.textContent = movie.year;

  article.append(h3, yearRelease);
  fantasySection.appendChild(article);
}

// For Horror Genre
function addMovieToHorror(event) {
  event.preventDefault();

  if (titleInput.value === "" || yearInput.value === "") {
    return;
  }

  const title = titleInput.value;
  const year = yearInput.value;

  const movie = horrorFactory(title, year);

  clearLog();
  hideModal();
  appendNewHorrorMovie(movie);
}

function horrorFactory(title, year) {
  return { title, year };
}

function appendNewHorrorMovie(movie) {
  console.log(movie);

  const article = document.createElement("article");
  article.classList.add("horror-movie-container");

  const h3 = document.createElement("h3");
  h3.classList.add("hmovie-title");
  h3.textContent = movie.title;

  const yearRelease = document.createElement("p");
  yearRelease.classList.add("hmovie-year");
  yearRelease.textContent = movie.year;

  article.append(h3, yearRelease);
  horrorSection.appendChild(article);
}

// For Sci-Fi Genre
function addMovieToScifi(event) {
  event.preventDefault();

  if (titleInput.value === "" || yearInput.value === "") {
    return;
  }

  const title = titleInput.value;
  const year = yearInput.value;

  const movie = scifiFactory(title, year);

  clearLog();
  hideModal();
  appendNewScifiMovie(movie);
}

function scifiFactory(title, year) {
  return { title, year };
}

function appendNewScifiMovie(movie) {
  console.log(movie);

  const article = document.createElement("article");
  article.classList.add("scifi-movie-container");

  const h3 = document.createElement("h3");
  h3.classList.add("smovie-title");
  h3.textContent = movie.title;

  const yearRelease = document.createElement("p");
  yearRelease.classList.add("smovie-year");
  yearRelease.textContent = movie.year;

  article.append(h3, yearRelease);
  scifiSection.appendChild(article);
}

function clearLog() {
  titleInput.value = "";
  yearInput.value = "";
}

openModal.addEventListener("click", displayModal);
closeModal.addEventListener("click", hideModal);
addActionBtn.addEventListener("click", addMovieToAction);
addFantasyBtn.addEventListener("click", addMovieToFantasy);
addHorrorBtn.addEventListener("click", addMovieToHorror);
addScifiBtn.addEventListener("click", addMovieToScifi);
