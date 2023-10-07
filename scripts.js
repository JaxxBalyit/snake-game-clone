// Import the consts from snake
import { SNAKE_SPEED, 
        update as updateSnake, 
        draw as drawSnake, 
        getSnakeHead, 
        snakeIntersection
        } from './snake.js'
import { update as updateApple, draw as drawApple } from './apple.js'
import { outsideGrid } from './grid.js'

// Define the consts for the project
let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

// Define the game loop
function main(currentTime) {
    if (gameOver) {
        if (confirm('You lost. Press ok to restart.')) {
            window.location = '/'
        }

        return
    }

    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000 // Transform this to seconds

    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

    lastRenderTime = currentTime

    // Call the methods for the snake
    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateApple()
    checkDeath()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawApple(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}