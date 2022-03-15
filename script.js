const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

let imageIndex = 0

let interval = setInterval(run, 5000)

function run() {
  imageIndex++
  changeImage()
}

function changeImage() {
  if (imageIndex > img.length - 1) {
    imageIndex = 0
  } else if (imageIndex < 0) {
    imageIndex = img.length - 1
  }

  imgs.style.transform = `translateX(${-imageIndex * 500}px)`
}

function resetInterval() {
  clearInterval(interval)
  interval = setInterval(run, 5000)
}

leftBtn.addEventListener('click', () => {
  imageIndex--
  changeImage()
  resetInterval()
})
rightBtn.addEventListener('click', () => {
  imageIndex++
  changeImage()
  resetInterval()
})
