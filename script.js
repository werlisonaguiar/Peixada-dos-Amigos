const galeria = document.querySelector('.galeria');
const btnEsq = document.querySelector('.esquerda');
const btnDir = document.querySelector('.direita');
const imagens = document.querySelectorAll('.galeria img');

btnDir.addEventListener('click', () => {
  galeria.scrollBy({ left: 300, behavior: 'smooth' });
});

btnEsq.addEventListener('click', () => {
  galeria.scrollBy({ left: -300, behavior: 'smooth' });
});

imagens.forEach((img) => {
  img.addEventListener('click', () => {
    window.open(img.src, '_blank');
  });
});