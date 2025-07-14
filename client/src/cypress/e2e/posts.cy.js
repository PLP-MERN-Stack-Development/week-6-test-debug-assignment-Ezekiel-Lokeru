/* eslint-disable no-undef */
describe('Posts Page', () => {
  it('loads posts from API', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Posts App');
    cy.get('h3').should('exist');
  });
});
