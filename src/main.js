import 'flowbite';

let panels;
panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

//
// document.getElementById('toggle').addEventListener('change',  function () {
//     if (this.checked) {
//         document.documentElement.classList.add('dark')
//     } else {
//         document.documentElement.classList.remove('dark')
//     }
// })

const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
document.getElementById('menu').addEventListener('click', navToggle)

btn.addEventListener('click', navToggle)
    function navToggle(){
    btn.classList.toggle('open')
        menu.classList.toggle('flex')
        menu.classList.toggle('hidden')
    }



