console.log("Portfolio Loaded Successfully");
const words = [
"Software Tester",
"QA Engineer",
"Selenium Automation Tester",
"Manual Testing Specialist"
];

let wordIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function typeEffect(){

if(charIndex < words[wordIndex].length){

typing.textContent += words[wordIndex].charAt(charIndex);

charIndex++;

setTimeout(typeEffect,100);

}else{

setTimeout(eraseEffect,1500);

}
}

function eraseEffect(){

if(charIndex > 0){

typing.textContent =
words[wordIndex].substring(0,charIndex-1);

charIndex--;

setTimeout(eraseEffect,50);

}else{

wordIndex++;

if(wordIndex >= words.length){
wordIndex = 0;
}

setTimeout(typeEffect,500);

}
}

typeEffect();
document.getElementById("topBtn")
.addEventListener("click",()=>{
window.scrollTo({
top:0,
behavior:"smooth"
});
});
