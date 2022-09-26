import "./style.css";
import favicon from "../src/images/favicon-32x32.png";
import diceIcon from "../src/images/icon-dice.svg";
import patternDesktop from "../src/images/pattern-divider-desktop.svg";
import patternMobile from "../src/images/pattern-divider-mobile.svg";

const button = document.querySelector("#advice-button");
const advice = document.querySelector("#advice-content");
const adviceNumber = document.querySelector("#advice-id");
const API = process.env.API_URL;
const faviconElement = document.querySelector("#favicon");
const diceElement = document.querySelector("#dice-icon");
const patternDividerElement = document.querySelector("#pattern-divider");
const backBtn = document.querySelector(".back-btn");

const projectsPage = "https://calin.codes/pages/projects";

backBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = projectsPage;
});

faviconElement.href = favicon;
diceElement.src = diceIcon;

function changeDivider() {
  if (window.innerWidth < 768) {
    patternDividerElement.src = patternMobile;
  } else {
    patternDividerElement.src = patternDesktop;
  }
}

window.addEventListener("load", changeDivider);
window.addEventListener("resize", changeDivider);

function getAdvice() {
  fetch(API)
    .then((response) => response.json())
    .then((data) => {
      advice.textContent = data.slip.advice;
      adviceNumber.textContent = data.slip.id;
      animateAdvice();
    })
    .catch((error) => console.log(error));
}

button.addEventListener("click", getAdvice);
window.addEventListener("load", getAdvice);

function animateAdvice() {
  advice.classList.add("animate-advice");
  setTimeout(() => {
    advice.classList.remove("animate-advice");
  }, 2000);
}
