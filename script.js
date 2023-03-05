if ('speechSynthesis' in window) {
 // Speech Synthesis supported 🎉
}else{
  // Speech Synthesis Not Supported 😣
  alert("Sorry, your browser doesn't support text to speech!");
}

var msg = new SpeechSynthesisUtterance("Hello");

window.speechSynthesis.speak(msg);

document.getElementById('namebox').style.height="200px";
document.getElementById('namebox').style.fontSize="14pt";
