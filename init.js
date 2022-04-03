// Initialize the random positions below
export const screen = document.querySelector('#body')

export const numOfColumns = Math.floor(window.innerWidth/15)
export const numOfRows = Math.floor(screen.offsetHeight/15)

screen.style.gridTemplateColumns = `repeat(${numOfColumns}, 1fr)`
screen.style.gridTemplateRows = `repeat(${numOfRows}, 1fr)`

function randomPos() {
  let x = Math.floor(Math.random()*numOfColumns + 1)
  let y = Math.floor(Math.random()*numOfRows + 1)
  return { x, y } 
}

function snakePositioning() {
  const { x, y } = randomPos()
  let snakeBody = [
    {x: 0, y: 0},
    {x: 0, y: 0},
    {x: 0, y: 0}
  ]
  snakeBody = [
    {x: x, y},
    {x: x + 1, y},
    {x: x + 2, y}
  ]
  return snakeBody
}

export function targetPositioning() {
  const { x, y } = randomPos()
  let targetBody = [
    {x: 0, y: 0}
  ]
  targetBody = [
    {x, y}
  ]
  return targetBody
}

export function draw(object, el) {
  const body = document.createElement('div')
  body.classList.add(object)
  body.style.gridColumnStart = el.x
  body.style.gridRowStart = el.y
  screen.appendChild(body)
}

export let snakeBody = snakePositioning()

export function drawSnake() {
  snakeBody.forEach(el => {
    draw('snake', el)
  })
}