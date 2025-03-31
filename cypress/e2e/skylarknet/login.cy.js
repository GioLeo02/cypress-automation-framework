describe('Login Page', () => {
    beforeEach(() => {
      cy.visit('https://dev.skylarknet.ai/') // URL della tua pagina di login
    })
  
    it('Mostra la pagina di login', () => {
      cy.get('input[name=email]').should('be.visible')
      cy.get('input[name=password]').should('be.visible')
      cy.get('button[type=submit]').should('contain', 'Enter')
    })
  
    it('Login fallisce con credenziali errate', () => {
      cy.get('input[name=email]').type('giuliograsso4@gmail.com')
      cy.get('input[name=password]').type('Testgbs1234')
      cy.get('button[type=submit]').click()
  
      cy.contains('Invalid').should('be.visible') // messaggio di errore
    })
  
    it('Login riesce con credenziali corrette', () => {
      cy.get('input[name=email]').type('giuliograsso4@gmail.com')
      cy.get('input[name=password]').type('Testgbs123')
      cy.get('button[type=submit]').click()
  
      cy.url().should('include', '/dashboard')
      cy.contains('Welcome').should('be.visible') // o qualsiasi contenuto della dashboard
    })
  })
  