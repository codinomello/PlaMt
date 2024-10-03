// modo escuro

document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('darkmode-toggle');
  toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    toggleButton.textContent = document.body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Escuro';
  });
document.body.classList.add('light-mode');
});

// carrossel de imagens

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
  if(slides.length > 0){
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
  }
}

function showSlide(index){
  if(index >= slides.length){
    slideIndex = 0;
  }
  else if(index < 0){
    slideIndex = slides.length - 1;
  }

  slides.forEach(slide => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
  clearInterval(intervalId);
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide(){
  slideIndex++;
  showSlide(slideIndex);
}

// slider

const slide = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const totalSlides = images.length;
const sliderWidth = document.querySelector('.slider').clientWidth; // Update this line
const slideWidth = sliderWidth;

function goToNextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlidePosition();
}

function goToPrevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlidePosition();
}

function updateSlidePosition() {
  slide.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

updateSlidePosition();

nextBtn.addEventListener('click', goToNextSlide);
prevBtn.addEventListener('click', goToPrevSlide);

setInterval(goToNextSlide, 3000);

// brasil

const description = document.querySelector(".tooltip");

document.querySelectorAll('path').forEach((el) => {

el.addEventListener('mouseover', (event) => {
  event.target.className = ("enabled");
  description.classList.add("active");
  description.innerHTML = event.target.id;
})

el.addEventListener("mouseout", () => {
  description.classList.remove("active");
})

el.addEventListener("click", () => {

const estadoSelecionado = event.target.id;
const link = `https://www.google.com.br/search?q=${estadoSelecionado}`;	
  window.open(link, "_blank");
  })
});

document.onmousemove = function (e) {
  description.style.left = e.pageX + "px";
  description.style.top = (e.pageY - 70) + "px";
}

// google maps layer

//googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
//maxZoom: 20,
//subdomains:['mt0','mt1','mt2','mt3']
//});
//googleStreets.addTo(map);