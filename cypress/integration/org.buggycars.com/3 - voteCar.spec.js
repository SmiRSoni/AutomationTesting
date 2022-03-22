describe('Vote on your favourite car',() =>{
    before(function() {
        cy.visit('/overall')
        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password

            cy.login(username, password)

        })
    }

    )
    
    // it('should be able to vote',() =>{
    //     cy.wait(2000)
    //     cy.visit('/overall')
    //     cy.wait(2000)
    // })

    it('when user selects on particular modal',() =>{
        cy.contains('Diablo').click()
        
    })

    it('When user votes for a car',()=>{
        cy.get('#comment').type('I like it',{delay:50})
        cy.contains('Vote!').click()
    })

    it('Voted Sucessfully',()=>{
        cy.get('.card-text').should('be.visible').and('contain', 'Thank you for your vote!')
    })
})