let order = []
let clickOrder = []
let score = 0

// 0: verde 1:vermelho 2:amarelo 3:azul
const blue = document.querySelector('.blue')
const green = document.querySelector('.green')
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
let total = document.querySelector('.total')

let gerarNUmAleatorio = () => {
    let colorOrder = Math.floor(Math.random() * 4)
    order[order.length] = colorOrder
    clickOrder = []

    for (let i in order){
        let elementColor = criarCorHtml(order[i])
        mudarCor(elementColor, Number(i) + 1)
    }
}

let mudarCor = (element, number) => {
    number = number * 500
    setTimeout(() => {
        element.classList.add('selected')
    }, number - 250)
    setTimeout(() => {
        element.classList.remove('selected')
    })
}

let checkOrder = () => {
    for( let i in clickOrder){
        if(clickOrder[i] != order[i]){
            lose()
            break
        }
    }
    if(clickOrder.length == order.length){
        total.innerHTML = score
        nextLevel()
    }
}

let click = (color) => {
    clickOrder[clickOrder.length] = color
    criarCorHtml(color).classList.add('selected')

    setTimeout(()=> {
        criarCorHtml(color).classList.remove('selected')
        checkOrder()
    },250)

    
}


let criarCorHtml = (color) => {
    if(color == 0){
        return green
    } else if (color == 1){
        return red
    } else if (color == 2){
        return yellow
    } else if (color == 3){
        return blue
    }
}

let nextLevel = () => {
    score++
    gerarNUmAleatorio()
}

let lose = () => {
    score = 0
    alert('você perdeu')
    order = []
    clickOrder = []
    total.innerHTML = score
    
    playGame()
}

let playGame = () => {
    score = 0
    nextLevel()
}


green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)

playGame()