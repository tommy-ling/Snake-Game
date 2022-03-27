// Initialize the random positions below
const screen = document.querySelector('#body')

const numOfColumns = Math.floor(window.innerWidth/15)
const numOfRows = Math.floor(screen.offsetHeight/15)

screen.style.gridTemplateColumns = `repeat(${numOfColumns}, 1fr)`
screen.style.gridTemplateRows = `repeat(${numOfRows}, 1fr)`

function randomPos() {
  let x = Math.floor(Math.random()*numOfColumns + 1)
  let y = Math.floor(Math.random()*numOfRows + 1)
  return { x, y } 
}

const { x, y } = randomPos()

export let snakeBody = [
  {x: x, y},
  {x: x + 1, y},
  {x: x + 2, y}
]

export let targetBody = [
  {x: randomPos().x, y: randomPos().y}
]

export function draw(object, el) {
  const body = document.createElement('div')
  body.classList.add(object)
  body.style.gridColumnStart = el.x
  body.style.gridRowStart = el.y
  screen.appendChild(body)
}

export function randomVerHor() {
  const randomizer = Math.random()
  for(let i = 1; i < snakeBody.length; i ++) {
    if(randomizer > 0.5) {
      snakeBody[i].x = x
      snakeBody[i].y = y + i
    } else {
      snakeBody[i].y = y
      snakeBody[i].x = x + i
    }
  }  
}

export function drawSnake() {
  const classImage = document.querySelectorAll('#body div')
  classImage.forEach(el => {
    el.classList.remove('snake')
  })
  snakeBody.forEach(el => {
    draw('snake', el)
  })
}

draw('target', targetBody[0])
export function drawTarget() {
  document.querySelector('#body div.target').classList.remove('target')
  targetBody[0].x = randomPos().x
  targetBody[0].y = randomPos().y
  draw('target', targetBody[0])
}