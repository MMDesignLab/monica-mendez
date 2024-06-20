// import 'flowbite';


const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
document.getElementById('menu').addEventListener('click', navToggle)

btn.addEventListener('click', navToggle)

function navToggle() {
    btn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
}


// function openImage(imageId) {
//     let image = document.getElementById(imageId);
//     image.classList.toggle('hidden'); // Show the image by removing 'hidden' class
// }

function toggleModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.classList.toggle('hidden');
}


