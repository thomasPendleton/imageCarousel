const imgs = document.querySelectorAll('#imgs img')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')


leftBtn.addEventListener('click', () => {
    console.log(imgs)
    imgs.forEach((img, idx) => {
        console.log(img);
    })
})
rightBtn.addEventListener('click', () => {

})