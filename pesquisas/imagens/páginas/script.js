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
