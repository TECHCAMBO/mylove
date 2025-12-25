const questionContainer = document.getElementById("questionCard");
const resultIframeContainer = document.getElementById("result-container");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// YES button
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  resultIframeContainer.style.display = "block";
});

// NO button escapes 😄
noBtn.addEventListener("mouseover", () => {
  const containerRect = questionContainer.getBoundingClientRect();

  const maxX = containerRect.width - noBtn.offsetWidth;
  const maxY = containerRect.height - noBtn.offsetHeight;

  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});
