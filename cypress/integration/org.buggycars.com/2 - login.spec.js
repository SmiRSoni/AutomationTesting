describe('login page functions', () => {
    it('should load login page', () => {
        cy.visit('/')
    })

    // it('When a user enters valid username', () => {
    //     cy.get('input[name="login"]').as('username')
    //     cy.get('@username').clear()
    //     cy.get('@username').type('ssuser5', {delay:50})
    // })

    // it('When a user enters valid password', () => {
    //     cy.get('input[name="password"]').as('password')
    //     cy.get('@password').clear()
    //     cy.get('@password').type('P@ssword1', {delay:50})
    // })

    it('User can login with valid credentials', () => {
        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password

            cy.login(username, password)

        })
       
        cy.get('.nav-link').should('be.visible').and('contain', 'Hi, Smita')
    })


})