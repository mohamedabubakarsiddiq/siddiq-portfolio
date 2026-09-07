const words=["QA Engineer","Software Test Engineer","QA Automation Engineer","Selenium Automation Tester","API Tester"];
let wordIndex=0,charIndex=0,deleting=false;
const typing=document.getElementById("typing");
function typeEffect(){
 const word=words[wordIndex];
 if(!deleting){typing.textContent=word.substring(0,charIndex+1);charIndex++;if(charIndex===word.length){deleting=true;setTimeout(typeEffect,1600);return;}}
 else{typing.textContent=word.substring(0,charIndex-1);charIndex--;if(charIndex===0){deleting=false;wordIndex=(wordIndex+1)%words.length;}}
 setTimeout(typeEffect,deleting?45:85);
}
typeEffect();
const menuToggle=document.querySelector('.menu-toggle');
const navLinks=document.querySelector('.nav-links');
menuToggle.addEventListener('click',()=>navLinks.classList.toggle('active'));
document.querySelectorAll('.nav-links a').forEach(link=>link.addEventListener('click',()=>navLinks.classList.remove('active')));
const topBtn=document.getElementById('topBtn');
window.addEventListener('scroll',()=>topBtn.classList.toggle('show-top',window.scrollY>500));
topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
