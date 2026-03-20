const messages = [
  "Take a breath. You do not need to solve everything today.",
  "A quiet good moment still counts.",
  "One sincere step forward is enough for now.",
  "You are allowed to slow down for a second.",
  "There is still softness in the world."
];

const messageElement = document.getElementById("message");
const imageElement = document.getElementById("main-image");
const buttonElement = document.getElementById("new-btn");

const projectStart = new Date(2026, 2, 21, 5, 0, 0); // example
const totalPhotos = 100;

function displayRandomMessage() {
  const index = Math.floor(Math.random() * messages.length);
  messageElement.textContent = messages[index];
}

function getCurrentPhotoNumber(now) {
  const msPerDay = 24 * 60 * 60 * 1000;
  const diffMs = now - projectStart;
  const dayIndex = Math.floor(diffMs / msPerDay);

  if (dayIndex < 0) return 1;
  if (dayIndex >= totalPhotos) return totalPhotos;

  return dayIndex + 1;
}

function updateImage() {
  const now = new Date();
  const photoNumber = getCurrentPhotoNumber(now);

  imageElement.src = `images/photo${photoNumber}.jpg`; // need to make all photos .jpg
  imageElement.alt = `Photo ${photoNumber}`;
}

buttonElement.addEventListener("click", () => {
  displayRandomMessage()
})

updateImage();
displayRandomMessage();

// Re-check every minute in case the page stays open over 5 AM
setInterval(updateImage, 60 * 1000);