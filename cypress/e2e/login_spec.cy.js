it('Should show error message with invalid credentials', () => {
  cy.visit('https://www.saucedemo.com');
  cy.get('#user-name').type('invalid_user');
  cy.get('#password').type('wrong_password');
  cy.get('#login-button').click();
  cy.get('.error-message-container').should('contain', 'Username and password do not match');
});