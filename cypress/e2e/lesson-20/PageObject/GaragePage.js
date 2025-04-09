export default class GaragePage {
    get garageButton () {
        return cy.get("[routerlink=garage]")
    }
    get garagePageAddButton () {
        return cy.contains('button', "Add car")
    }
    get addCarBrandField () {
        return cy.get("[name=carBrandId]")
    }
    get addCarModelField () {
        return cy.get("[name=carModelId")
    }
    get addCarMileageField () {
        return cy.get("[name=mileage]")
    }
    get addCarCancelButton () {
        return cy.contains('button', 'Cancel')
    }
    get addCarAddButton () {
        return cy.get('button.btn.btn-primary').eq(1)
    }


    
    //-------NAME OF THE CAR


    get carBrandNameAudi () {
        return cy.contains("option", "Audi")
    }
    get carBrandNameBmw () {
        return cy.contains("option", "BMW")
    }
    get carBrandNameFord () {
        return cy.contains("option", "Ford")
    }
    get carBrandNamePorsche () {
        return cy.contains("option", "Porsche")
    }
    get carBrandNameFiat () {
        return cy.contains("option", "Fiat")
    }
    
    
    //----------- AUDI


    get carModelAudiTT () {
        return cy.get("#addCarModel").select("TT")
    }
    get carModelAudiR8 () {
        return cy.get("#addCarModel").select("R8")
    }
    get carModelAudiQ7 () {
        return cy.get("#addCarModel").select("Q7")
    }
    get carModelAudiA6 () {
        return cy.get("#addCarModel").select("A6")
    }
    get carModelAudiA8 () {
        return cy.get("#addCarModel").select("A8")
    }


    //---------BMW


    get carBrandBmw3 () {
        return cy.get("#addCarModel").select('3')
    }
    get carBrandBmw5 () {
        return cy.get("#addCarModel").select('5')
    }
    get carBrandBmwX5 () {
        return cy.get("#addCarModel").select('X5')
    }
    get carBrandBmwX6 () {
        return cy.get("#addCarModel").select('X6')
    }
    get carBrandBmwZ3 () {
        return cy.get("#addCarModel").select('Z3')
    }


    //---------FORD


    get carBrandFordFiesta () {
        return cy.get('#addCarModel').select('Fiesta')
    }
    get carBrandFordFocus () {
        return cy.get('#addCarModel').select('Focus')
    }
    get carBrandFordFusion () {
        return cy.get('#addCarModel').select('Fusion')
    }
    get carBrandFordMondeo () {
        return cy.get('#addCarModel').select('Mondeo')
    }
    get carBrandFordSierra () {
        return cy.get('#addCarModel').select('Sierra')
    }


    //---------Porsche


    get carBrandPorsche911 () {
        return cy.get('#addCarModel').select('911')
    }
    get carBrandPorscheCayenne () {
        return cy.get('#addCarModel').select('Cayenne')
    }
    get carBrandPorschePanamera () {
        return cy.get('#addCarModel').select('Panamera')
    }


    //---------FIAT


    get carBrandFiatPalio () {
        return cy.get("#addCarModel").select("Palio")
    }
    get carBrandFiatDucato () {
        return cy.get("#addCarModel").select("Ducato")
    }
    get carBrandFiatPanda () {
        return cy.get("#addCarModel").select("Panda")
    }
    get carBrandFiatPunto () {
        return cy.get("#addCarModel").select("Punto")
    }
    get carBrandFiatScudo () {
        return cy.get("#addCarModel").select("Scudo")
    }
}