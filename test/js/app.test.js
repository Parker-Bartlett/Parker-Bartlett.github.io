const app = require('../../js/app.js')

describe('Nav Bar', () => {

    test('should add change when clicked', () => {
        const testElement = document.createElement('p')
        app.toggleIcon(testElement)
        expect(testElement.classList.contains('change')).toBeTruthy
    })

    test('should show mobile nav on click', () => {
        const testElement = document.querySelector('.mobile-nav')
        app.showMobileNav()
        expect(testElement.classList.contains('show-mobile-nav')).toBeTruthy
    })

})

describe('Project Carousel', () => {

    test('Second project div should have display on block when arrow is clicked', () => {
        const slides = document.getElementsByClassName('mySlides')
        app.plusSlides(1)
        expect(slides[1].hasAttribute.style.display == 'block').toBeTruthy
    })
    
    test('dot dhould have class active when the corresponding slide is active', () => {
        const dots = document.getElementsByClassName('dot')
        expect(dots[0].classList.contains('active')).toBeTruthy
    })
    
    test('should switch to slide 3 when dot 3 is clicked', () => {
        const slides = document.getElementsByClassName('mySlides')
        app.currentSlide(3)
        expect(slides[2].classList.contains('active')).toBeTruthy
    }) 
})

describe('Modal for get in touch', () => {

    test('Should add activemodal when clicked', () => {
        const testElement = document.createElement('p')
        app.openModal(testElement)
        expect(testElement.classList.contains('activeModal')).toBeTruthy
    })

    test('Should remove active modal when x is clicked', () => {
        const testElement = document.createElement('p')
        app.openModal(testElement)
        app.closeModal(testElement)
        expect(testElement.classList.contains('activeModal')).toBeFalsy
    })
})