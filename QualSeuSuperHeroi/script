import './style.css';
import Swal from 'sweetalert2';

const heroImg = document.querySelector('#heroImg');
const btn = document.querySelector('button');
const heroName = document.querySelector('#heroName');

btn.addEventListener('click', () => {
  const numMax = 780;
  const idNumber = Math.floor(Math.random() * numMax);
  fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${idNumber}.json`)
    .then((response) => response.json())
    .then((data) => {
      heroName.innerHTML = data.name;
      heroImg.src = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/${data.slug}.jpg`;
    }).catch(() => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Houve uma falha na matrix',
      });
    });
});
