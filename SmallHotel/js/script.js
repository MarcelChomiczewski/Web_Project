
/** scroll on TOP  */
/** first function - only comment Work Fine**/
/** 
window.onscroll = function() {
'use strict'
var onTop = document.getElementById("onTop"); 
if (window.pageYOffset >= 400) {
    onTop.style.display ='block';  
} else {
onTop.style.display ='none';
   }
};

onTop.onclick = function () {
    'use strict'
    window.scrollTo(0.0);
};
*/
const d = document; 

/** All scroll funciton  */
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


window.onscroll = function() {scrollFunction()}; 

function scrollFunction() {
    let welcome = d.getElementById('welcome');

    if (window.pageYOffset >= 650 || document.documentElement.scrollTop > 40) {
        d.getElementById("onTop").style.display = "block";
        d.getElementById('effect_th').style.filter = "grayscale(100%) contrast(80%)";
        d.getElementById('effect_th').style.transform ="scale(1.25)";
        welcome.style.display = "block";
        welcome.style.padding ="0" + "px";
        welcome.style.transitionDelay ="250ms"; 
        welcome.style.transition = "500" + "ms";
        welcome.style.filter ="contrast(100%)";
    } else {
        d.getElementById("onTop").style.display = "none";
        d.getElementById('effect_th').style.transform ="scale(1.1)";
        d.getElementById('effect_th').style.filter = "none";
        welcome.style.display = "none";
    }
};


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("guest-box");
 
  if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
    }
  slides[slideIndex-1].style.display = "block"; 
 
}




