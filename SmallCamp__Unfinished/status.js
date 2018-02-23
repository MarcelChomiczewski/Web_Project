//window.scrollY - właściwość o którą skrolowaliśmy naszą stronę
    //document.documentElement.offsetHeight - wysokość naszej całej strony
    //window.innerHeight - wysokość okna przeglądarki


var bar = document.querySelector(".status");

var statusBar = function statusBar() {
  // Declaration //
  var scrollY = window.scrollY;
  var OffsetHeight = document.body.offsetHeight;
  var InnerHeight = window.innerHeight;
  var XY = OffsetHeight - InnerHeight;
  // Initilization //
  currentScroll = Math.round(scrollY / XY * 95.5);
  bar.style.width = currentScroll + "%";

  console.log(currentScroll);
};
var showStatus =
window.addEventListener("scroll", statusBar);


var images = [
  "https://i.imgur.com/KaPoFDj.jpg", "http://proof.nationalgeographic.com/files/2015/05/MM8190_12_09_30_10398-copy.jpg",
  "http://farm9.staticflickr.com//8868//18205140545_c48ca49018_h.jpg",
  "http://drscdn.500px.org/photo/111857581/m%3D2048/2ecfe0e70accd597de673b532e8a8666", "http://fc02.deviantart.net/fs70/f/2014/029/9/1/rophaien_by_tobiasrichter-d4tniwk.jpg",
  "https://i.imgur.com/CQg225T.jpg",
  "http://farm3.staticflickr.com//2946//15449458345_4457eacb17_b.jpg",
  "https://i.imgur.com/Y2802th.jpg"
];

var gallery = document.getElementById("gallery");

for (var i = 0; i < images.length; i++) {
  var thumbnailWrapper = document.createElement("div");
  thumbnailWrapper.className = "thumbnail-wrapper";

  var thumbnail = document.createElement("a");
  thumbnail.className = "thumbnail";
  thumbnail.setAttribute('style', 'background-image:url(\"' + images[i] + '\");');
  thumbnail.setAttribute('href', images[i]);

  thumbnailWrapper.appendChild(thumbnail);
  gallery.appendChild(thumbnailWrapper);
}

console.log(gallery)
