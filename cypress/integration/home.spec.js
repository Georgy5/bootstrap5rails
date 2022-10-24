describe('Testing Home page', () => {  
  
  beforeEach(() => {  
    cy.visit('/')  
  })  
  
  it('Display a title by default', () => {  
    cy.get('h1').should('contain', 'Welcome, this is the home page')  
  })  
  
  it('Allows to navigate from home page, to another', () => {  
    cy.get('a[href*="other/index"]').click()  
    cy.location().should((location) => {  
      expect(location.pathname).to.eq('/other/index')  
    })  
  })  
  
})
