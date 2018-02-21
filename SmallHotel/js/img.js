var i = 0; 
var images = [];
var time = 6500; 

images[0] = 'niechorze1.jpg';
images[1] = 'niechorze2.jpg';

function changeImg() {
    document.slide.src = images[i];
    
    if(i < images.length - 1) {
        i++
    } else {
        i = 0; 
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg; 