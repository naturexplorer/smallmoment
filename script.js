const messages = text.trim().split("\n");
const messageElement = document.getElementById("message");
const imageElement = document.getElementById("main-image");
const buttonElement = document.getElementById("new-btn");

const projectStart = new Date(2026, 4, 10, 19, 0, 0);
const totalPhotos = 48;

function displayRandomMessage() {
  const index = Math.floor(Math.random() * messages.length);
  messageElement.textContent = messages[index];
}

function getCurrentPhotoNumber(now) {
  const msPer8Hrs = 8 * 60 * 60 * 1000;
  const diffMs = now - projectStart;
  const dayIndex = Math.floor(diffMs / msPer8Hrs);

  if (dayIndex < 0) return 0;
  if (dayIndex >= totalPhotos) return totalPhotos;

  return dayIndex;
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

// Re-check every minute
setInterval(updateImage, 60 * 1000);