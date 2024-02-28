describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/contato')
    cy.get('#nome').type('Thales')
    cy.get('#telefone').type('44997266389')
    cy.get('#email').type('thales@gmail.com')
    cy.get('#cidade').type('Ipora')
  })
})
