// Open $ Close Modal
const buyBtns = document.querySelectorAll('.js__spin')
const modal = document.querySelector('.js__modal')
const modalClose = document.querySelector('.js__modal__close')


function showModal() {
    modal.classList.add('open')
}
function hideModal(){
    modal.classList.remove('open')
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showModal)
}

modalClose.addEventListener('click', hideModal)

