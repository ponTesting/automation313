// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (user, password) => {
  cy.fixture("index").then((index) => {
    cy.get(index.signIn).dblclick();
    cy.get(index.userBox).type(user);
    cy.get(index.password).type(password);
    cy.get(index.log).click();
  });
});
Cypress.Commands.add("toDoCreator", (name) => {
  cy.fixture("index").then((index) => {
    cy.get(index.taskName).type(name);
    cy.get(index.send).click();
  });
});
