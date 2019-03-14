const icon_div = document.querySelector('.icon');
const mobileNav_div = document.querySelector('.mobile-nav')

function toggleIcon() {
    icon_div.classList.toggle('change');
}

function showMobileNav() {
    mobileNav_div.classList.toggle('show-mobile-nav')
}

function eventListener() {
    icon_div.addEventListener('click', toggleIcon);
    icon_div.addEventListener('click', showMobileNav);
}

eventListener()


module.exports = {
    toggleIcon: toggleIcon
}
