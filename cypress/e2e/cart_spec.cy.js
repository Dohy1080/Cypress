describe('Cart Test', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
  });

  it('Should sort products by price low to high', () => {
  cy.get('.product_sort_container').select('lohi');
  cy.get('.inventory_item_price').first().should('have.text', '$7.99');
});
});

