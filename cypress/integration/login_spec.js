/// <reference types="Cypress" />

describe('App name and nav bar visible', function() {
  it('has h1 with title', () => {
    cy.visit('http://localhost:3000/')
    cy.get('header h1')
      .should('contain', 'Catch-A-Ride')
  })
})