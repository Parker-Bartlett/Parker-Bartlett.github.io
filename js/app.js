const icon_div = document.getElementsByClassName('icon')

function toggleIcon() {
    icon_div.classList.add('change')
}

icon_div.addEventListener('click', toggleIcon())



module.exports = {
    toggleIcon: toggleIcon
}
