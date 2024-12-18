



fetch('./components/header.html')
    .then(data => data.text())
    .then(html => document.querySelector('header').innerHTML = html)   


let openPopup = document.getElementById('openMenu')
let closePopup = document.getElementById('closePopup')
let overlay = document.querySelectorById('menuoverlay')

openPopup.addEventListener('click', () => {
    menuoverlay.classList.add('active')
})

closePopup.addEventListener('click', () => {
    menuoverlay.classList.remove('active')
})



// Opcional: Cerrar el menú si se hace clic fuera del popup
menuOverlay.addEventListener('click', (e) => {
    if (e.target === menuOverlay) {
        menuOverlay.classList.remove('active');
    }
});









window.addEventListener('scroll', () => {
    const parallaxElement = document.querySelector('.scroll')
    const parallaxElement2 = document.querySelector('.scroll2')
    const scrollPosition = window.scrollY 
    const parallaxSpeed = 0.02
    const parallaxSpeed2 = 0.02


    parallaxElement.style.transform = `translateX(${scrollPosition * parallaxSpeed}px)`
    parallaxElement2.style.transform = `translateX(${scrollPosition * parallaxSpeed2}px)`
})











