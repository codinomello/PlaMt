// modo escuro

document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('darkmode-toggle');
  toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    toggleButton.textContent = document.body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Escuro';
  });
  
// define o modo claro como padrão

  document.body.classList.add('light-mode');
  
});