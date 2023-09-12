function chinese() {
  var chinese = document.getElementById("chinese-song");
  var cantonese = document.getElementById("cantonese-song");
  var korean = document.getElementById("korean-song");
  var japanese = document.getElementById("japanese-song");
  var english = document.getElementById("english-song");
  var others = document.getElementById("others-song");
  if (chinese.style.display === "block") {
    chinese.style.display = "none";
  } else {
    chinese.style.display = "block";
    cantonese.style.display = "none";
    korean.style.display = "none";
    japanese.style.display = "none";
    english.style.display = "none";
    others.style.display = "none";
  }
}
function cantonese() {
  var chinese = document.getElementById("chinese-song");
  var cantonese = document.getElementById("cantonese-song");
  var korean = document.getElementById("korean-song");
  var japanese = document.getElementById("japanese-song");
  var english = document.getElementById("english-song");
  var others = document.getElementById("others-song");
  if (cantonese.style.display === "block") {
    cantonese.style.display = "none";
  } else {
    chinese.style.display = "none";
    cantonese.style.display = "block";
    korean.style.display = "none";
    japanese.style.display = "none";
    english.style.display = "none";
    others.style.display = "none";
  }
}
function korean() {
  var chinese = document.getElementById("chinese-song");
  var cantonese = document.getElementById("cantonese-song");
  var korean = document.getElementById("korean-song");
  var japanese = document.getElementById("japanese-song");
  var english = document.getElementById("english-song");
  var others = document.getElementById("others-song");
  if (korean.style.display === "block") {
    korean.style.display = "none";
  } else {
    chinese.style.display = "none";
    cantonese.style.display = "none";
    korean.style.display = "block";
    japanese.style.display = "none";
    english.style.display = "none";
    others.style.display = "none";
  }
}
function japanese() {
  var chinese = document.getElementById("chinese-song");
  var cantonese = document.getElementById("cantonese-song");
  var korean = document.getElementById("korean-song");
  var japanese = document.getElementById("japanese-song");
  var english = document.getElementById("english-song");
  var others = document.getElementById("others-song");
  if (japanese.style.display === "block") {
    japanese.style.display = "none";
  } else {
    chinese.style.display = "none";
    cantonese.style.display = "none";
    korean.style.display = "none";
    japanese.style.display = "block";
    english.style.display = "none";
    others.style.display = "none";
  }
}
function english() {
  var chinese = document.getElementById("chinese-song");
  var cantonese = document.getElementById("cantonese-song");
  var korean = document.getElementById("korean-song");
  var japanese = document.getElementById("japanese-song");
  var english = document.getElementById("english-song");
  var others = document.getElementById("others-song");
  if (english.style.display === "block") {
    english.style.display = "none";
  } else {
    chinese.style.display = "none";
    cantonese.style.display = "none";
    korean.style.display = "none";
    japanese.style.display = "none";
    english.style.display = "block";
    others.style.display = "none";
  }
}
function others() {
  var chinese = document.getElementById("chinese-song");
  var cantonese = document.getElementById("cantonese-song");
  var korean = document.getElementById("korean-song");
  var japanese = document.getElementById("japanese-song");
  var english = document.getElementById("english-song");
  var others = document.getElementById("others-song");
  if (others.style.display === "block") {
    others.style.display = "none";
  } else {
    chinese.style.display = "none";
    cantonese.style.display = "none";
    korean.style.display = "none";
    japanese.style.display = "none";
    english.style.display = "none";
    others.style.display = "block";
  }
}