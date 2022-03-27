import {randomVerHor, drawSnake, drawTarget, snakeBody, numOfColumns, numOfRows} from './init.js'
import {isTouching, wallCollide, snakeCollide} from './move.js'

randomVerHor()
drawSnake()
drawTarget()

const snake = document.querySelectorAll('#body div.snake')
const target = document.querySelector('#body div.target')

// Snake running
let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

export function snakeRun(xOrY) {
  for(let i = snakeBody.length-1; i > 0; i--) {
    snakeBody[i] = { ...snakeBody[i-1] }
  }
  snakeBody[0][xOrY] += inputDirection[xOrY]
  if(snakeBody[0].x < 1 || snakeBody[0].x > numOfColumns ||
    snakeBody[0].y < 1 || snakeBody[0].y > numOfRows) {
    return
  }
  drawSnake()
}

// ClickEvent below
export let intervalId
window.addEventListener('keydown', event => {
  if(event.key === 'ArrowLeft') {
    if(lastInputDirection.x !== 0) {
      return
    }
    clearInterval(intervalId)
    inputDirection = { x: -1, y: 0 }
    intervalId = setInterval(() => {
      snakeRun('x')
      isTouching()
      wallCollide()
      snakeCollide()
    }, 50)
  }
  if(event.key === 'ArrowRight') {
    if(lastInputDirection.x !== 0) {
      return
    }
    clearInterval(intervalId)
    inputDirection = { x: 1, y: 0 }
    intervalId = setInterval(() => {
      snakeRun('x')
      isTouching()
      wallCollide()
      snakeCollide()
    }, 50)
  }
  if(event.key === 'ArrowUp') {
    if(lastInputDirection.y !== 0) {
      return
    }
    clearInterval(intervalId)
    inputDirection = { x: 0, y: -1 }
    intervalId = setInterval(() => {
      snakeRun('y')
      isTouching()
      wallCollide()
      snakeCollide()
    }, 50)
  }
  if(event.key === 'ArrowDown') {
    if(lastInputDirection.y !== 0) { 
      return
    }
    clearInterval(intervalId)
    inputDirection = { x: 0, y: 1 }
    intervalId = setInterval(() => {
      snakeRun('y')
      isTouching()
      wallCollide()
      snakeCollide()
    }, 50)
  }
  lastInputDirection = inputDirection
})