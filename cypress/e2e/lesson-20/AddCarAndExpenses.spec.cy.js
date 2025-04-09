import GaragePage from "./PageObject/GaragePage";
import ExpensesPage from "./PageObject/ExpensesPage";
const garagePageConfig = new GaragePage()
const expensesPageConfig = new ExpensesPage()

describe('Add Car and Expenses', ()=>{
    beforeEach(()=>{
        const baseUrl = Cypress.config('baseUrl');  // Отримуємо baseUrl з конфігурації
        cy.visit(baseUrl);
        cy.url().should('include', baseUrl);  // Перевіряємо, що поточний URL співпадає з baseUrl
        cy.login();
    })

    it("Car is added after filling in all fields and clicking on the Add button", ()=>{
        garagePageConfig.garageButton.click()
        garagePageConfig.garagePageAddButton.click()
        garagePageConfig.addCarBrandField.select('Audi')
        garagePageConfig.addCarModelField.select('TT')
        garagePageConfig.addCarMileageField.type('1')
        garagePageConfig.addCarAddButton.click()
        cy.wait(2000)
        cy.get("[class='car-logo_img']").should('be.visible')
        cy.get("[class='car_name h2']").should('be.visible')
        cy.get("[class='car_update-mileage']").should('be.visible')
        cy.get("[name='miles']").eq(0)
        cy.contains('button', 'Add fuel expense').should('be.visible')
        cy.get("[class='icon icon-edit']").should('be.visible')


    })
    it("Fuel expenses is added to the account", ()=>{
        expensesPageConfig.fuelExpensesButton.click()
        expensesPageConfig.fuelExpensesDropdownOpen.click()
        expensesPageConfig.fuelExpensesAddButton.click()
        expensesPageConfig.addExpensesMileageField.clear().type('10')
        expensesPageConfig.addExpensesLitersField.type('10')
        expensesPageConfig.addExpensesTotalCostField.type('1000')
        expensesPageConfig.addExpensesAddButton.click()
        cy.wait(2000)
        cy.contains('th', 'Date').should('be.visible')
        cy.contains('th', 'Mileage').should('be.visible')
        cy.contains('th', 'Liters used').should('be.visible')
        cy.contains('th', 'Total cost').should('be.visible')
    })
})