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
/// <reference types="cypress-xpath" />
Cypress.Commands.add('login', () => { 
  const email = Cypress.env('defaultUserEmail')
  const password = Cypress.env('defaultUserPassword')
    cy.contains('button', 'Sign In').click()
    cy.get('form input[name="email"]').type(email);
    cy.get('form input[name="password"]').type(password);
    cy.contains('button', 'Login').click()
  })

  Cypress.Commands.add('createExpense', (expenseData) => {
    cy.request({
      method: 'POST',
      url: '/api/expenses',
      body: expenseData
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.status).to.eq('ok');
      cy.wrap(response.body.data).as('createdExpense');
    });
  });
  
  Cypress.Commands.overwrite('visit', (originalFn, url, options)  => { 
    originalFn(url, {
      auth: {
        username: 'guest',
        password: 'welcome2qauto'
      },
      ...options
    })
  })

  Cypress.Commands.overwrite("type", (originalFn, subject, text, options = {}) => {
    if (options.log !== false) {
        options = { ...options, log: false };
    }
    const isPassword = subject.attr("type") === "password";
    if (isPassword) {
        Cypress.log({
            $el: subject,
            name: "type",
            message: "*".repeat(text.length),
        });
    }
    return originalFn(subject, text, options);
});
