describe('User Registration', () => {
    it('should load User Register page', () => {
        cy.visit('/register')
    })

    it('When a user enters correct registration details', () => {
       
        cy.fixture('user').then(user => {
            const username = user.username
            cy.get('input[name="username"]').type(username)
        })              
        cy.get('input[name="firstName"]').as('firstname')
        cy.get('@firstname').clear()
        cy.get('@firstname').type('Smita', {delay:50})
        cy.get('input[name="lastName"]').as('lastname')
        cy.get('@lastname').clear()
        cy.get('@lastname').type('S', {delay:50})
        cy.get('#password').as('password')
        cy.get('@password').clear()
        cy.get('@password').type('P@ssword1', {delay:50})
        cy.get('input[name="confirmPassword"]').as('confirmPassword')
        cy.get('@confirmPassword').clear()
        cy.get('@confirmPassword').type('P@ssword1', {delay:50})
    })

    it('When a user click on Registration button', () => {
        cy.get('button[type="submit"]').contains('Register').click()  
    })

    it('Then the registration is successful', () => {
              cy.get('.alert-success').should('be.visible')
    })
})