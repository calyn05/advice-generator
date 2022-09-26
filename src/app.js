import "./style.css";

const button = document.querySelector("#advice-button");
const advice = document.querySelector("#advice-content");
const adviceNumber = document.querySelector("#advice-id");
const API = process.env.API_URL;

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
