const toggleIcon = require('../../js/app.js')

describe('icon chould dd class of change', () => {

    test('should add change when clicked', () => {
        const testElement = document.createElement('p')
        toggleIcon.toggleIcon(testElement)
        expect(icon.classList.contains('change')).toBeTruthy()
    })

})


test('toggleHide should add hide', function() {
	const testEl = document.createElement('p');
	
	app.toggleHide(testEl);
	
	expect(testEl.classList.contains('hide')).toBeTruthy
})