const icon_div = document.querySelector('.icon');
const mobileNav_div = document.querySelector('.mobile-nav')

function toggleIcon() {
    icon_div.classList.toggle('change')
}

function showMobileNav() {
    mobileNav_div.classList.toggle('show-mobile-nav')
}

function eventListener() {
    icon_div.addEventListener('click', toggleIcon);
    icon_div.addEventListener('click', showMobileNav);
}

eventListener()




var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}





module.exports = {
    toggleIcon: toggleIcon
}
