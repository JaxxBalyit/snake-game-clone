import { onSnake, extendSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let apple = getRandomApplePosition()
const LENGTH_RATE = 1

export function update() {
    if (onSnake(apple)) {
        extendSnake(LENGTH_RATE)
        apple = getRandomApplePosition()
    }
}

export function draw(gameBoard) {
    const appleElem = document.createElement('div')
    appleElem.style.gridRowStart = apple.y
    appleElem.style.gridColumnStart = apple.x
    appleElem.classList.add('apple')

    gameBoard.appendChild(appleElem)
}

function getRandomApplePosition() {
    let newApplePosition
    while(newApplePosition == null || onSnake(newApplePosition)) {
        newApplePosition = randomGridPosition()
    }

    return newApplePosition
}