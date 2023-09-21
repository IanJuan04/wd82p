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
}

function actionFactory(title, year) {
  return { title, year };
}

// For Fantasy Genre
function addMovieToFantasy(event) {
  event.preventDefault();

  const title = titleInput.value;
  const year = yearInput.value;
}

// For Horror Genre
function addMovieToHorror(event) {
  event.preventDefault();

  const title = titleInput.value;
  const year = yearInput.value;
}

// For Sci-Fi Genre
function addMovieToScifi(event) {
  event.preventDefault();
  const title = titleInput.value;
  const year = yearInput.value;
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
