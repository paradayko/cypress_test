export default class ExpensesPage {
    get fuelExpensesButton () {
        return cy.get("[routerlink=expenses]")
    }
    get fuelExpensesDropdownOpen () {
        return cy.get('#carSelectDropdown')
    }
    get fuelExpensesDropdown () {
        return cy.get('li.car-select-dropdown_item')
    }
    get fuelExpensesAddButton () {
        return cy.contains('button', 'Add an expense')
    }

    //------- ADD AN EXPENSE MODAL WINDOW

    get addExpensesVehicleField () {
        return cy.get('#addExpenseCar')
    }
    get addExpensesVehicleFieldDropDown () {
        return cy.get('option, value').eq(0)
    }
    get addExpensesReportDateField () {
        return cy.get('#addExpenseDate')
    }
    get addExpensesMileageField () {
        return cy.get('#addExpenseMileage')
    }
    get addExpensesLitersField () {
        return cy.get('#addExpenseLiters')
    }
    get addExpensesTotalCostField () {
        return cy.get('#addExpenseTotalCost')
    }
    get addExpensesCancelButton () {
        return cy.contains('button', 'Cancel')
    }
    get addExpensesAddButton () {
        return cy.get('button.btn.btn-primary').eq(1)
    }
    get addExpensesXButton () {
        return cy.contains('button', '×')
    }
    
}