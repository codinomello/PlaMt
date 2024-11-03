// modo escuro

document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('modo-escuro-toggle');
  const temaSalvo = localStorage.getItem('tema');
  if (temaSalvo) {
    document.body.classList.add(temaSalvo);
    toggleButton.textContent = temaSalvo === 'modo-escuro' ? 'Modo Claro' : 'Modo Escuro';
  }
  else{
    document.body.classList.add('modo-claro');
    toggleButton.textContent = 'Modo Escuro';
  }

  toggleButton.addEventListener('click', function() {
    if (document.body.classList.contains('modo-escuro')) {
      document.body.classList.replace('modo-escuro', 'modo-claro');
      localStorage.setItem('tema', 'modo-claro');
      toggleButton.textContent = 'Modo Escuro';
    } 
    else{
      document.body.classList.replace('modo-claro', 'modo-escuro');
      localStorage.setItem('tema', 'modo-escuro');
      toggleButton.textContent = 'Modo Claro';
    }
  });
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

// sidebar

function toggleSidebar(){
  var sidebar = document.getElementById("notícias-sidebar");
  var overlay = document.getElementById("notícias-overlay");
  sidebar.classList.toggle("active");
  overlay.style.display = sidebar.classList.contains("active") ? "block" : "none";
}

// slider

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

// brasil

const description = document.querySelector(".tooltip");

document.querySelectorAll('.path').forEach((el) =>
  el.addEventListener('mouseover', (event) => {
    event.target.className = ("enabled");
    description.classList.add("active");
    description.innerHTML = event.target.id;
  })

);

document.querySelectorAll('.path').forEach((el) =>
  el.addEventListener("mouseout", () => {
    description.classList.remove("active");
  })
);

document.onmousemove = function (e){
  description.style.left = e.pageX + "px";
  description.style.top = (e.pageY - 70) + "px";
}