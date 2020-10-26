/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  // https://on.cypress.io/interacting-with-elements

  it('.type() - type into search box', () => {
    // https://on.cypress.io/type
    cy.focused().should('have.class', 'SearchBar');
    cy.get('.SearchBar').type('superman').should('have.value', 'superman');
    cy.get('.MovieList').should('have.length', 2);
    cy.get('.MovieCard').should('have.length', 21);
  });
});
