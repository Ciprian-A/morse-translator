const englishToMorse = {
  A:'.-', 
  B:'-...', 
  C:'-.-.', 
  D:'-..', 
  E:'.', 
  F:'..-.', 
  G:'--.', 
  H:'....', 
  I:'..', 
  J:'.---', 
  K:'-.-', 
  L:'.-..', 
  M:'--', 
  N:'-.', 
  O:'---', 
  P:'.--.', 
  Q:'--.-', 
  R:'.-.', 
  S:'...', 
  T:'-', 
  U:'..-', 
  V:'...-', 
  W:'.--', 
  X:'-..-', 
  Y:'-.--', 
  Z:'--..', 
  1:'.----', 
  2:'..---', 
  3:'...--', 
  4:'....-', 
  5:'.....', 
  6:'-....', 
  7:'--...', 
  8:'---..', 
  9:'----.', 
  0:'-----', 
  ',':'--..--', 
  '.':'.-.-.-', 
  ' ':'/', 
}



const englishInput = document.querySelector(".english");
const morseOutput = document.querySelector(".morse-output");

const englishTextConverter = ()=> {
  let convertedText = englishInput.value;
  convertedText = convertedText.toUpperCase();
  convertedText = convertedText.split("");
  for (let i = 0; i < convertedText.length; i++) {
    convertedText[i] = englishToMorse[convertedText[i]];
  }
  convertedText = convertedText.join(" ");
  morseOutput.innerHTML = convertedText;
}

englishInput.addEventListener("input", englishTextConverter
);




