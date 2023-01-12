const textarea = document.getElementById("textarea");
const wordCount = document.getElementById("word-count");
const infoButton = document.getElementById("info-button");
const infoContainer = document.querySelector(".info-container");

textarea.addEventListener("input", countWords);
infoButton.addEventListener("click", toggleInfo);

function countWords() {
  const words = textarea.value.trim().split(/\s+/).length;
  wordCount.textContent = words;
}

function toggleInfo() {
  infoContainer.style.display = infoContainer.style.display === "none" ? "block" : "none";
}
