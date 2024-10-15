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

// notícias

const apiKey = 'ad2140a21f824444b421b955f62f76df';
const apiUrl = `https://newsapi.org/v2/top-headlines?country=br&apiKey=${apiKey}`;

document.addEventListener('DOMContentLoaded', () => {
  fetchNews();
});

function fetchNews() {
  fetch(apiUrl)
  .then(response => {
  if (!response.ok) {
    throw new Error(`Erro na requisição: ${response.status}`);
  }
    return response.json();
  })
  .then(data => {
    const newsSection = document.getElementById('notícias-seção');
    if (data.articles.length === 0) {
      newsSection.innerHTML = '<p>Não há notícias disponíveis no momento.</p>';
      return;
    }
  data.articles.forEach(article => {
    const newsItem = document.createElement('div');
    newsItem.classList.add('notícias-item');
    newsItem.innerHTML = `
    <img src="${article.urlToImage}" alt="Imagem da notícia">
    <h2>${article.title}</h2>
    <p>${article.description || 'Sem descrição disponível'}</p>
    <a href="${article.url}" target="_blank">Leia mais</a>`;
    newsSection.appendChild(newsItem);
    });
  })
  .catch(error => {
    console.error('Erro ao buscar as notícias:', error);
    const newsSection = document.getElementById('notícias-seção');
    newsSection.innerHTML = `<p>Ocorreu um erro ao carregar as notícias. Tente novamente mais tarde.</p>`;
  });
}

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

const slider = document.querySelector('.slides');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slides img').length;

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
  updateSlidePosition();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
  updateSlidePosition();
});

function updateSlidePosition() {
  const slideWidth = document.querySelector('.slides img').clientWidth;
  slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

// brasil

const description = document.querySelector(".tooltip");

document.querySelectorAll('path').forEach((el) =>
  el.addEventListener('mouseover', (event) => {
    event.target.className = ("enabled");
    description.classList.add("active");
    description.innerHTML = event.target.id;
  })

);

document.querySelectorAll('path').forEach((el) =>
  el.addEventListener("mouseout", () => {
    description.classList.remove("active");
  })
);

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