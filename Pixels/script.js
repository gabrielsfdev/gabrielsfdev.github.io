const blocos = document.querySelectorAll('.color');
blocos[0].style.backgroundColor = 'black';
blocos[1].style.backgroundColor = 'red';
blocos[2].style.backgroundColor = 'yellow';
blocos[3].style.backgroundColor = 'green';
const buttonRandom = document.getElementById('button-random-color');
const colorPalette = document.getElementById('color-palette')
const quadro = document.getElementById('pixel-board');
const buttonClear = document.getElementById("clear-board")
const buttonVQV = document.getElementById('generate-board')
const inputBoardSize = document.getElementById('board-size')



function vqv() {
    const pixel = document.querySelectorAll('.pixel')
    if (inputBoardSize.value === ''){
      return alert('Board inválido!')
    }
    if (inputBoardSize.value < 5){
      inputBoardSize.value = 5
    } else if (inputBoardSize.value > 50){
      inputBoardSize.value = 50
    }
    for (let i = 0; i < pixel.length; i += 1) {
      pixel[i].remove()    
    }
    
    boardCreator(inputBoardSize.value)
    
}


function randomColors() {
  blocos[1].style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  blocos[2].style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  blocos[3].style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  // if (blocos[1].style.backgroundColor === blocos[2].style.backgroundColor || blocos[1].style.backgroundColor === blocos[3].style.backgroundColor){
  //   return randomColors()
  // }
  const colors = [blocos[1].style.backgroundColor, blocos[2].style.backgroundColor, blocos[3].style.backgroundColor]
  localStorage.setItem('colorPalette', JSON.stringify(colors))
 
}

function savedColor (){
  if (localStorage !== null){
    localStorage.getItem('colorPallet')
  }
}

function addEventListenerFunction (){
  blocos[0].addEventListener('click', addSelectInColors);
  blocos[1].addEventListener('click', addSelectInColors);
  blocos[2].addEventListener('click', addSelectInColors);
  blocos[3].addEventListener('click', addSelectInColors);
  buttonVQV.addEventListener('click', vqv)
  buttonRandom.addEventListener('click', randomColors);
  buttonClear.addEventListener('click', boardClear);
}
addEventListenerFunction ()

function addSelectInColors() {
  for (let i = 0; i < blocos.length; i += 1){ //aplicando um for para pegar cada cor e condicionando com um if para que retire todas as classes 'select' caso tenha.
    if (blocos[i].classList.contains('selected')){
      blocos[i].classList.remove('selected')
    }
  }
  event.target.classList.toggle('selected'); // após tirar todas as classes select, eu adiciono 'select' na cor que o target pegou.
   /*toggle substitui o IF em:
  if (event.target.classList[1] === 'select'){
    event.target.classList.remove('select')
  } else {
    event.target.classList.add('select');
  }
  console.log(event.target.classList)*/
}


function boardClear() {
  const pixel = document.getElementsByClassName("pixel")
  for (let index of pixel){
    index.style.backgroundColor = "white"
  }
  
  }

function boardCreator(number) {
  for (let i = 0; i < number; i += 1) {
    for (let i = 0; i < number; i += 1){
    const li = document.createElement('li');
    li.className = 'pixel'
    quadro.appendChild(li);}
  }
  quadro.style.width = `${42*number}px`
  localStorage.setItem('boardSize', JSON.stringify(quadro.style.width))
  pixelSelected();
  localStorage.setItem('pixelBoard', JSON.stringify(quadro.innerHTML))
}
// boardCreator(5);

function pixelSelected() {
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].addEventListener('click', colored); // chamar função
  }
  
  
}

function colored(event) {
  for (let i in blocos){
    if (blocos[i].classList.contains("selected") === true){
      event.target.style.backgroundColor = blocos[i].style.backgroundColor
      localStorage.setItem('pixelBoard', JSON.stringify(quadro.innerHTML))
      break
    } 
    
  }
  
}

if (localStorage.getItem('colorPalette') !== null){
  const colorPalletRecovered = JSON.parse(localStorage.getItem('colorPalette'))
  blocos[1].style.backgroundColor = colorPalletRecovered[0]
  blocos[2].style.backgroundColor = colorPalletRecovered[1]
  blocos[3].style.backgroundColor = colorPalletRecovered[2]
}

if (localStorage.getItem('boardSize') !== null ){
  const boardSize = JSON.parse(localStorage.getItem('boardSize'))
  console.log(boardSize)
  quadro.style.width = boardSize
} else {
  boardCreator(5);
}

if (localStorage.getItem('pixelBoard') !== null ){
  const pixelBoard = JSON.parse(localStorage.getItem('pixelBoard'))
  console.log(quadro.innerHTML)
  quadro.innerHTML = pixelBoard
  pixelSelected()
}

// function saveLocalStorage() {
//   localStorage.setItem('colorPalette', colorPalette.innerHTML);
  
//   localStorage.setItem('board', quadro.innerHTML)
// }

// function getsLocalStorage() {
//   const paletas = localStorage.getItem('colorPalette');
//   colorPalette.innerHTML = paletas;
  
//   const boardSaved = localStorage.getItem('board')
//   quadro.innerHTML = boardSaved
  // addEventListenerFunction ()
  // pixelSelected()
  // addSelectInColors()
// }
// getsLocalStorage();
