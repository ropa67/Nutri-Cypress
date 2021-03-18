import Links from '../../methods/Links'


describe('Login Tests Page Objects', () => {
    const link = new Links()

    it('open test website',() => {
        cy.visit('/onboarding/dietary_preferences')
        

        link.vegetarian()
        link.next()
        link.male()
        link.agePlaceholder()
        link.siSwitch()
        link.heightPlaceholder()
        link.weightPlaceholder()
        link.next()
    })
    })