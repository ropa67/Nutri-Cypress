export default class Links{
    // Login Test
    email(value){
        const email = cy.get(Cypress.env('email'))
        email.should('be.visible')
        email.clear()
        email.type(value)
        return this
    }

    fillPassword(value){
        const password = cy.get(Cypress.env('password'))
        password.should('be.visible')
        password.clear()
        password.type(value)
        return this
    }
    
    login(){
        const login = cy.xpath(Cypress.env('login'))
        login.should('be.visible')
        login.click()
    }

    yourPlanner(){
        const yourPlanner = cy.xpath(Cypress.env('yourPlanner'))
        yourPlanner.should('be.visible').contains('Your Planner')
    }

    //First Step of onboarding

    vegetarian(){
        const vegetarian = cy.xpath(Cypress.env('vegetarian'))
        vegetarian.should('be.visible')
        vegetarian.click()
    }

    next(){
        const next = cy.xpath(Cypress.env('next'))
        next.should('be.visible')
        next.click()
    }

    male(){
        const male = cy.xpath(Cypress.env('male'))
        male.should('be.visible')
        male.click()
    }

    agePlaceholder(){
        const agePlaceholder = cy.xpath(Cypress.env('agePlaceholder'))
        agePlaceholder.should('be.visible')
        agePlaceholder.type('24')
    }

    siSwitch(){
        const siSwitch = cy.xpath(Cypress.env('siSwitch'))
        siSwitch.should('be.visible')
        siSwitch.click()
    }

    heightPlaceholder(){
        const heightPlaceholder = cy.xpath(Cypress.env('heightPlaceholder'))
        heightPlaceholder.should('be.visible')
        heightPlaceholder.type('177')
    }

    weightPlaceholder(){
        const weightPlaceholder = cy.xpath(Cypress.env('weightPlaceholder'))
        weightPlaceholder.should('be.visible')
        weightPlaceholder.type('80')
    }

    test(){
        const test = "test"
        return this
    }

}