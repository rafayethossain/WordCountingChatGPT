// function to clear the text area
function clearText() {
  document.querySelector("#text-area").value = "";
  document.querySelector("#word-count").innerHTML = "0";
  document.querySelector("#character-count").innerHTML = "0";
  document.querySelector("#character-count-without-spaces").innerHTML = "0";
  document.querySelector("#top-keywords").innerHTML = "";
}

// function to count the number of words in real-time as the user types in the text area
document.querySelector("#text-area").addEventListener("input", function() {
  var text = this.value;
  var wordCount = text.split(" ").length;
  document.querySelector("#word-count").innerHTML = wordCount;
  countCharacters();
  countCharactersWithoutSpaces();
  countTopKeywords();
});

// function to count characters
function countCharacters() {
  var text = document.querySelector("#text-area").value;
  var characterCount = text.length;
  document.querySelector("#character-count").innerHTML = characterCount;
}

// function to count characters without whitespace
function countCharactersWithoutSpaces() {
  var text = document.querySelector("#text-area").value;
  var characterCountWithoutSpaces = text.replace(/\s/g, "").length;
  document.querySelector("#character-count-without-spaces").innerHTML = characterCountWithoutSpaces;
}


// event listener for the text area to call the counting functions
document.querySelector("#text-area").addEventListener("input", function() {
  countCharacters();
  countCharactersWithoutSpaces();
  countTopKeywords();
});

// event listener for the "clear" button
document.querySelector("#clear-btn").addEventListener("click", clearText);


// function to count the top keywords
function countTopKeywords() {
  var text = document.querySelector("#text-area").value;
  var words = text.split(/\W+/);

  // create an object to store the frequency of each word
  var wordFrequency = {};
  words.forEach(function(word) {
    wordFrequency[word] = (wordFrequency[word] || 0) + 1;
  });

  // sort the object by frequency
  var sortedWords = Object.keys(wordFrequency).sort(function(a, b) {
    return wordFrequency[b] - wordFrequency[a];
  });

  // display the top 5 keywords in a list
  var topKeywordsList = document.querySelector("#top-keywords-list");
  topKeywordsList.innerHTML = "";
  for (var i = 0; i < 5; i++) {
    var keyword = document.createElement("div");
    keyword.innerHTML = sortedWords[i] + " (" + wordFrequency[sortedWords[i]] + ")";
    topKeywordsList.appendChild(keyword);
  }

  
  
}


