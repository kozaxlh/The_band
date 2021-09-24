const buyButtons = document.querySelectorAll('.js-buy-ticket');
const closeButtons = document.querySelectorAll('.js-close-button');
const modal = document.querySelector('.modal');
const modalContainer = document.querySelector('.modal-container')

function showBuyTicket() {
    modal.classList.add('open');
}

function removeBuyTicket() {
    modal.classList.remove('open')
}

// Open modal
for (const buyButton of buyButtons) {
    buyButton.addEventListener('click',showBuyTicket)
}

// Close modal
for(const closeButton of closeButtons) {
    closeButton.addEventListener('click',removeBuyTicket)
}

modal.addEventListener('click',removeBuyTicket)

modalContainer.addEventListener("click", (event) => {
    event.stopPropagation()
})