import englishToMorse from './englishLetters.js'
import morseToEnglish from './morseSymbols.js'
import facts from './data.js'


const englishInput = document.querySelector(".english");
const morseOutput = document.querySelector(".morse-output");
console.log(facts.length)
let carouselInner = document.querySelector('.carousel-inner')

carouselInner.innerHTML = facts.map((mfact, i) => {
  if (i === 0){
    return `<p class="carousel-item active">${mfact.fact} ${mfact.details}</p>`
  } else {
    return `<p class="carousel-item ">${mfact.fact} ${mfact.details}</p>`

  }
  
}).join(' ')

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

const morseInput = document.querySelector(".morse");
const englishOutput = document.querySelector(".english-output");

const morseTextConverter = ()=> {
  let convertedText = morseInput.value;
  convertedText = convertedText.toUpperCase();
  convertedText = convertedText.split(" ");
  for (let i = 0; i < convertedText.length; i++) {
    convertedText[i] = morseToEnglish[convertedText[i]];
  }
  convertedText = convertedText.join("");
  englishOutput.innerHTML = convertedText;
}

morseInput.addEventListener("input", morseTextConverter
);





