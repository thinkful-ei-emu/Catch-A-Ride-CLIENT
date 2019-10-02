/// <reference types="Cypress" />

describe('Driver can add a ride', function () {
  beforeEach(() => {
    cy.server()
      .route({
        method: 'POST',
        url: '/api/auth/glogin',
        status: 200,
        response: 'fixture:user'
      })
      .as('userRequest');
  });

  beforeEach(() => {
    // needs to change
    cy.login().visit('/createride');
  });

  context('Before submit', () => {
    it('shows form', () => {
      // needs to change
      cy.request('/createride');
      cy.get('h2')
        .should('contain', 'Create Ride');
      cy.get('form')
        .should('contain', 'Starting Point')
        .should('contain', 'Destination')
        .should('contain', 'Date')
        .should('contain', 'Time')
        .should('contain', 'Description')
        // needs to change
        .should('contain', '# of Seats');
    });
  });

  // context('After submit', () => {

  // });

});