const width = 1200, height = 900
const canvas = document.getElementById('canvas')
canvas.height = height
canvas.width = width
const ctx = canvas.getContext('2d')

var initPos = {x: width / 2, y: height / 2}
var _L = 200, _g = 9.8, _t0 = 0.8

function period(L, g) {
  return 2 * Math.PI *  Math.sqrt(L / g)
}

function angle(t, theta0) {
  return theta0 * Math.cos((2 * Math.PI) / period(_L, _g) * t)
}

function getEndPosition(theta, L) {
  return {x: Math.sin(theta) * L, y: Math.cos(theta) * L}
}

function draw(t) {
  ctx.clearRect(0, 0, width, height)
  ctx.beginPath()
  ctx.moveTo(initPos.x, initPos.y)
  let pos = getEndPosition(angle(t, _t0), _L)
  ctx.lineTo(initPos.x + pos.x, initPos.y + pos.y)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(initPos.x + pos.x, initPos.y + pos.y, 20, 2 * Math.PI, false)
  ctx.fillStyle = "#006ee6" 
  ctx.fill()
}

function changeLength() {
  _L = document.getElementById('length').value
  document.getElementById('lengthLbl').innerHTML = _L
  
}

function changeGravity() {
  _g = document.getElementById('gravity').value
  document.getElementById('gravityLbl').innerHTML = _g
}

function changeAngle() {
  _t0 = document.getElementById('theta').value
  time = 0
  document.getElementById('thetaLbl').innerHTML = _t0
}


let time = 0
setInterval(function() {
  draw(time)
  time = time + 0.1
}, 1000/100)