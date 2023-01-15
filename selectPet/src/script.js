import './style.css';
import Swal from 'sweetalert2';

const dogBtn = document.querySelector('#dogBtn');
const catBtn = document.querySelector('#catBtn');
const surprise = document.querySelector('#randomBtn');
const img = document.querySelector('img');

async function dogPromise() {
  const response = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await response.json();
  return data;
}

async function catPromise() {
  const response = await fetch('https://aws.random.cat/meow');
  const data = await response.json();
  return data;
}

dogBtn.addEventListener('click', async () => {
  const dog = await dogPromise();
  img.src = dog.message;
});

catBtn.addEventListener('click', async () => {
  const cat = await catPromise();
  img.src = cat.file;
});

surprise.addEventListener('click', () => {
  Promise.race([
    dogPromise(),
    catPromise(),
  ])
    .then((winner) => {
      img.src = winner.file || winner.message;
    })
    .catch(() => {
      Swal.fire(
        'Algo de errado não está certo',
        'Não conseguimos decidir :/ <br> Nos dê um tempo para pensar e tente novamente',
        'question',
      );
    });
});
