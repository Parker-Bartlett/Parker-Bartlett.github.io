const toggleIcon = require('../../js/app.js')

describe('icon chould dd class of change', () => {
    let icon
    
    beforeEach(() => {
        icon = document.getElementsByClassName('icon')
    })

    test('should add change when clicked', () => {
        toggleIcon.toggleIcon()
        expect(icon.classList.contains('change')).toBeTruthy()
    })

})