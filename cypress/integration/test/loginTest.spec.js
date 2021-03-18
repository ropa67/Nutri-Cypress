import Links from '../../methods/Links'


describe('Login Tests Page Objects', () => {
    const link = new Links()

    it('open test website',() => {
        cy.visit('/')
        link.email("kamil.ropski+81@themasters.io")
        link.fillPassword("password")
        link.login()
        link.yourPlanner()
    })
    })