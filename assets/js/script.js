let menu = document.querySelector(".menu").addEventListener("click", () => {
    let nav = document.querySelector('nav')
    nav.style.display = 'block'
    menu.style.display = 'none'
})

let close = document.querySelector(".close").addEventListener("click", () => {
    let nav = document.querySelector('nav')
    nav.style.display = 'none'
    menu.style.display = 'block'
})