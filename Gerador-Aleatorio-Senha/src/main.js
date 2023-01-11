import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';
import './style.css';
const generateButton = document.querySelector('button#generator');
const displayPassword = document.querySelector('h2');
const copyButton = document.querySelector('#copy')
generateButton.addEventListener('click', () => {
    displayPassword.innerHTML = nanoid();
});
copyButton.addEventListener('click', () => {
    copy(displayPassword.innerHTML);
    if (displayPassword.innerHTML === '...') return alert('Clique primeiro em "Gerar senha"');
    alert('Senha copiada para area de transferencia');
});