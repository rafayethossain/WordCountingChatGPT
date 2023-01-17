// function to clear the text area
function clearText() {
  document.querySelector("#text-area").value = "";
  document.querySelector("#word-count").innerHTML = "0";
}

// function to count the number of words in real-time as the user types in the text area
document.querySelector("#text-area").addEventListener("input", function() {
  var text = this.value;
  var wordCount = text.split(" ").length;
  document.querySelector("#word-count").innerHTML = wordCount;
});

// function to show or hide the "how to use" section
function toggleHowToUse() {
  var howToUse = document.querySelector(".how-to-use");
  if (howToUse.style.display === "none") {
      howToUse.style.display = "block";
  } else {
      howToUse.style.display = "none";
  }
}

// event listener for the "clear" button
document.querySelector("#clear-btn").addEventListener("click", clearText);
