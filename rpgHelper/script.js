const diceQtd = document.querySelector('#diceQtd')
const diceType = document.querySelector('#diceType')
const resultBtn = document.querySelector('#resultBtn')
// const list = document.querySelector('#result')
const main = document.querySelector('main')
let list = main.appendChild(document.createElement('ul'))


for (let index = 1; index <= 20; index += 1) {
    const diceOpt = diceQtd.appendChild(document.createElement('option'))
    diceOpt.id = index
    diceOpt.innerHTML = index
}

const randomNumber = (max) => {
    const number = Math.ceil(Math.random() * max)
    return number
}

resultBtn.addEventListener('click', () => {
    if (list) list.remove()
    const dType = diceType.value
    const dQtd = diceQtd.value
    let total = 0
    list = main.appendChild(document.createElement('ul'))
    for (let index = 1; index <= dQtd; index += 1){
        const number = randomNumber(dType)
        const result = list.appendChild(document.createElement('li'))
        result.id = `r${index}`
        result.innerHTML = number
        total += number
    }
    const finalResult = list.appendChild(document.createElement('li'))
    finalResult.innerHTML = `Soma ${total}`
})