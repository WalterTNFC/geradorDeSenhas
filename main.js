import clipboardCopy from 'clipboard-copy';
import { nanoid } from 'nanoid';
import './style.css';

// pegando o botao
const passwordBtnEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');

passwordBtnEl.addEventListener('click', () => {
  const randonPassword = nanoid();
  displayPasswordEl.innerText = randonPassword;
});

displayPasswordEl.addEventListener('click', (event) => {
  if (event.target.innerText !==  '...') {
    clipboardCopy(event.target.innerText);
    alert('Senha copiada!');
  } else {
    alert('Aparte o botão para gerar uma senha!');
  }
});

console.log(nanoid());