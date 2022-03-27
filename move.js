// Eating Event below

import {targetBody, snakeBody, drawTarget, screen, numOfColumns, numOfRows} from './init.js'
import {snakeRun} from './index.js'

const score = document.querySelectorAll('.score p')[1]
score.style.paddingLeft = '5px'

let scoreNum = 0

export function isTouching() {
	if(targetBody[0].x === snakeBody[0].x && targetBody[0].y === snakeBody[0].y) {
    drawTarget()
    for(let i = 1; i <= 3; i ++) {
      snakeBody.push({ ...snakeBody[snakeBody.length -1]})
    }
    snakeRun('x')
    score.innerHTML = ` ${scoreNum += 7}`
  }
}

// Wall Collision
export function wallCollide() {
  if(snakeBody[0].x < 1 || snakeBody[0].x > numOfColumns ||
    snakeBody[0].y < 1 || snakeBody[0].y > numOfRows) {
    screen.style.backgroundColor = 'red'
    document.querySelector('.titleblock').classList.add('toggle')
    document.querySelector('h4').classList.remove('toggle')
  }
}