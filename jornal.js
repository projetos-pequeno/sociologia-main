const menuHamburger = document.querySelector(".menu-hamburguer")
const navLinks = document.querySelector(".nav-links")


menuHamburger.addEventListener("click",() => {
    navLinks.classList.toggle("mobile-menu")
})


// Selecionar elementos do primeiro conjunto
let openModalButton = document.querySelector('.open-modal');
let closeModalButton = document.querySelector('.close-modal');
let modalOverlay = document.querySelector('#modalOverlay');

// Selecionar elementos do segundo conjunto
const openModalButton1 = document.querySelector('.open-modal-1');
const closeModalButton1 = document.querySelector('.close-modal-1');
const modalOverlay1 = document.getElementById('modalOverlay-1');

//Selecionar elementos do terceiro conjunto
const openModalButton2 = document.querySelector('.open-modal-2');
const closeModalButton2 = document.querySelector('.close-modal-2');
const modalOverlay2 = document.getElementById('modalOverlay-2');

//Selecionar elementos do quarto conjunto
const openModalButton3 = document.querySelector('.open-modal-3');
const closeModalButton3 = document.querySelector('.close-modal-3');
const modalOverlay3 = document.getElementById('modalOverlay-3');

//Selecionar elementos do quinto conjunto
const openModalButton4 = document.querySelector('.open-modal-4');
const closeModalButton4 = document.querySelector('.close-modal-4');
const modalOverlay4 = document.getElementById('modalOverlay-4');

// Abrir modal do primeiro conjunto
openModalButton.addEventListener('click', () => {
    modalOverlay.classList.add('active');
});

// Fechar modal do primeiro conjunto
closeModalButton.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

// Abrir modal do segundo conjunto
openModalButton1.addEventListener('click', () => {
    modalOverlay1.classList.add('active');
});

// Fechar modal do segundo conjunto
closeModalButton1.addEventListener('click', () => {
    modalOverlay1.classList.remove('active');
});

// Abrir modal do terceiro conjunto
openModalButton2.addEventListener('click', () => {
    modalOverlay2.classList.add('active');
});

// Fechar modal do terceiro conjunto
closeModalButton2.addEventListener('click', () => {
    modalOverlay2.classList.remove('active');
});

// Abrir modal do quarto conjunto
openModalButton3.addEventListener('click', () => {
    modalOverlay3.classList.add('active');
});

// Fechar modal do quarto conjunto
closeModalButton3.addEventListener('click', () => {
    modalOverlay3.classList.remove('active');
});

// Abrir modal do quinto conjunto
openModalButton4.addEventListener('click', () => {
    modalOverlay4.classList.add('active');
});

// Fechar modal do quinto conjunto
closeModalButton4.addEventListener('click', () => {
    modalOverlay4.classList.remove('active');
});

function toggleFullScreen(video) {
    if (!document.fullscreenElement) {
        video.classList.add("video-fullscreen");
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) { /* Firefox */
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { /* IE/Edge */
            video.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        video.classList.remove("video-fullscreen");
    }
}