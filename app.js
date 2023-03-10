const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length

let activeSlideAIndex = 0

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
    changeSlide('up')
})

downBtn.addEventListener('click', () => {
    changeSlide('down')
})

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowDown') {
        changeSlide('down')
    } else if (event.key === 'ArrowUp') {
        changeSlide('up')
    }
})

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideAIndex++
        if (activeSlideAIndex === slidesCount) {
            activeSlideAIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideAIndex--
        if (activeSlideAIndex < 0) {
            activeSlideAIndex = slidesCount - 1
        }
    }

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideAIndex * height}px)`

    sidebar.style.transform = `translateY(${activeSlideAIndex * height}px)`
}