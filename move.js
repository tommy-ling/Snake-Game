// CollideEvent below
// export function isTouching(obj1, obj2) {
// 	return (obj1.x === obj2.x && obj1.y === obj2.y)
// }
import {targetBody, snakeBody, drawTarget} from './init.js'
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