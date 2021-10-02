const mobileMenu = document.querySelector('#mobile-menu')
const header = document.querySelector('#js-header')
const menuItems = document.querySelectorAll('.nav-link li a[href*="#"]')
const buyButtons = document.querySelectorAll('.js-buy-ticket');
const closeButtons = document.querySelectorAll('.js-close-button');
const modal = document.querySelector('.modal');
const modalContainer = document.querySelector('.modal-container');

let headerHeight = header.clientHeight;

// Show/remove menu
mobileMenu.onclick = () => {
    let isClose = header.clientHeight === headerHeight
    if (isClose)
        header.style.height = 'auto'
    else
        header.style.height = null
}

//Auto close menu when click <a>
for (const menuItem of menuItems) {
    const isParentMenu = menuItem.nextElementSibling && menuItem.nextElementSibling.classList.contains('sub-nav')

    menuItem.onclick = (event) => {
        if (isParentMenu) {
            event.preventDefault();
        }
        else {
            header.style.height = null
        }
    }
}


//  Modal show
function showBuyTicket() {
    modal.classList.add('open');
}

function removeBuyTicket() {
    modal.classList.remove('open')
}

// Open modal
for (const buyButton of buyButtons) {
    buyButton.addEventListener('click', showBuyTicket)
}

// Close modal
for (const closeButton of closeButtons) {
    closeButton.addEventListener('click', removeBuyTicket)
}

modal.addEventListener('click', removeBuyTicket)

modalContainer.addEventListener("click", (event) => {
    event.stopPropagation()
})

