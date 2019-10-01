/// <reference types="Cypress" />

describe('Driver can add a ride', function () {
  beforeEach(() => {
    // cy.login().visit('/')
  });

  context('Before submit', () => {
    it('shows form', () => {
      cy.visit('/createride');
      cy.get('h2')
        .should('contain', 'Create Ride');
      cy.get('form')
        .should('contain', 'label', 'Starting Point')
        .should('contain', 'label', 'Destination')
        .should('contain', 'label', 'Date')
        .should('contain', 'label', 'Time')
        .should('contain', 'label', 'Description')
        .should('contain', 'label', 'Capacity');
    });
  });

  // context('After submit', () => {

  // });

});