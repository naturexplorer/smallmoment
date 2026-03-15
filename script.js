const messages = [
  "Take a breath. You do not need to solve everything today.",
  "A quiet good moment still counts.",
  "One sincere step forward is enough for now.",
  "You are allowed to slow down for a second.",
  "There is still softness in the world."
];

const images = [
  "images/photo1.jpg",
  "images/photo2.webp",
  "images/photo3.jpg"
];

const messageElement = document.getElementById("message");
const imageElement = document.getElementById("main-image");
const buttonElement = document.getElementById("new-btn");

function randomItem(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

buttonElement.addEventListener("click", () => {
  messageElement.textContent = randomItem(messages);
  imageElement.src = randomItem(images);
});