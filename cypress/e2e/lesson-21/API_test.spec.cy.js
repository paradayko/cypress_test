import { GaragePage, ExpensesPage } from "../../support/PageObject"; 

const garagePageConfig = new GaragePage();
const expensesPageConfig = new ExpensesPage();

let createdCarId;

describe("API TESTS", () => {
  beforeEach(() => {
    cy.visit("");
  });
  

  it("Add car and intercept request", () => {
    cy.login();
    cy.intercept("POST", "/api/cars").as("createCar");
    garagePageConfig.garageButton.click();
    garagePageConfig.garagePageAddButton.click();
    garagePageConfig.addCarBrandField.select("Audi");
    garagePageConfig.addCarModelField.select("TT");
    garagePageConfig.addCarMileageField.type("123");
    garagePageConfig.addCarAddButton.click();

    cy.wait("@createCar").then((interception) => {
      expect(interception.response.statusCode).to.eq(201);
      createdCarId = interception.response.body.data.id;
      console.log(interception.response.headers);

      cy.request("GET", "/api/cars").then((response) => {
        const cars = response.body.data;
        const exists = cars.some((car) => {
          return (
            car.id === createdCarId &&
            car.brand === "Audi" &&
            car.model === "TT" &&
            car.mileage === 123
          );
        });

        expect(exists).to.be.true;
      });
    });
  });

  it("Create expense via API and validate response", () => {
    cy.intercept('POST', '/api/auth/signin').as('signInRequest');
    cy.login();
    cy.wait('@signInRequest').then(interceptedRequest => {
      cy.wrap(interceptedRequest.response).as('signInResponse');
      cy.wrap(interceptedRequest.response.headers['set-cookie'][0]).as('sidCookie');
    });
    const expenseData = {
      reportedAt: "2025-04-13T00:00:00.000Z",
      mileage: 200,
      liters: 10,
      totalCost: 100,
    };
    cy.request({
      method: "POST",
      url: "/api/expenses",
      body: {
        ...expenseData,
        carId: createdCarId,
      },
      headers: {
        cookie: '@sidCookie'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Validate expense in UI", () => {
    cy.login()
    // cy.intercept("GET", `/api/expenses?carId=${createdCarId}`).as("createdExpense")
    // expensesPageConfig.fuelExpensesButton.click();
    // cy.wrap("@createdExpense").then((expense) => {
    //   expect(expense).to.include({
    //     mileage: 200,
    //     liters: 10,
    //     totalCost: 100,
    //   });
    //   expect(expense.carId).to.eq(createdCarId);
    // });


    // cy.contains("Mileage: 200").should("exist");
    // cy.contains("Total Cost: 100").should("exist");
    // cy.contains("Liters: 10").should("exist");
    expensesPageConfig.fuelExpensesButton.click()
    // const expectedDate = "2025-04-13"
    // const expectedMileage = 200;
    // const expectedLiters = 10;
    // const expectedTotalCost = 100;
    cy.contains('table tbody tr td', '13.04.2025').should('be.visible')
    cy.contains('table tbody tr td', '200').should('be.visible')
    cy.contains('table tbody tr td', '10L').should('be.visible')
    cy.contains('table tbody tr td', '100.00 USD').should('be.visible')

  // cy.get('table tbody tr')
  //   .find('td:nth-of-type(3)')            // Перевірка літрів
  //   .should('contain.text', expectedLiters);

  // cy.get('table tbody tr')
  //   .find('td:nth-of-type(4)')            // Перевірка ціни
  //   .should('contain.text', expectedTotalCost);
  });
});