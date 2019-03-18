const icon_div = document.querySelector('.icon');
const mobileNav_div = document.querySelector('.mobile-nav')
const prev_a = document.querySelector('.prev')
const next_a = document.querySelector('.next')
const dotOne_span = document.querySelector('.dot-one')
const dotTwo_span = document.querySelector('.dot-two')
const dotThree_span = document.querySelector('.dot-three')
const myBtn_button = document.getElementById('myBtn')
const modal_div = document.getElementById('myModal')
const span_span = document.getElementsByClassName("close")[0]



// Nav bar

const toggleChange = function(element) {
  element.classList.toggle('change')
  showMobileNav()
}

const showMobileNav = function() {
  mobileNav_div.classList.toggle('show-mobile-nav')
}

function navEventListener() {
  icon_div.addEventListener('click', () => toggleChange(icon_div))
}

navEventListener()







// project carasoul

function porjectsEventListener() {
  prev_a.addEventListener('click', () => plusSlides(-1))
  next_a.addEventListener('click', () => plusSlides(1))

  dotOne_span.addEventListener('click', () => currentSlide(1))
  dotTwo_span.addEventListener('click', () => currentSlide(2))
  dotThree_span.addEventListener('click', () => currentSlide(3))
}

porjectsEventListener()
   

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
const plusSlides = function(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
const currentSlide = function(n) {
  showSlides(slideIndex = n);
}

const showSlides = function(n) {
  let i
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}




// modal for get in touch

function getInTouchEventListener() {
  myBtn_button.addEventListener('click', () => {
    openModal(modal_div)
  })
  span_span.addEventListener('click', () => {
    closeModal(modal_div)
  })
}

const openModal = function(element) {
  element.classList.add('activeModal')
}

const closeModal = function(element) {
  element.classList.remove('activeModal')
}

getInTouchEventListener()

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

module.exports = {
  toggleChange: toggleChange,
  showMobileNav: showMobileNav,
  openModal: openModal,
  closeModal: closeModal,
  plusSlides: plusSlides,
  currentSlide: currentSlide,
  showSlides: showSlides
}
