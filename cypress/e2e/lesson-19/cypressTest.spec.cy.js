import { ButtonConfigs } from "./Configs";
const buttonConfigs = new ButtonConfigs();

function EmailGenerate() {
    const randomNum = Math. floor(Math. random()*1000) + 1
    return `email_test${randomNum}@gmail.com`
    
}
const validPass = "1qaz@WSX"
const invalidPass = "12345678"

describe("Registration test", ()=>{
    beforeEach(()=>{
        cy.visit("")
    })
    it("POSITIVE: Register User with valid data", ()=>{
        buttonConfigs.executeSignUpValid("An", "Pasdfghjklzxcvbnmfgd", EmailGenerate(), `${validPass}`, `${validPass}`)
        cy.get("app-garage div[class=panel-page]")
            .should("be.visible")
        
    })
    it("NEGATIVE: Sign up without data", ()=>{
        buttonConfigs.headerSignUpButton.click()
        buttonConfigs.SignUpNameField.clear();
        buttonConfigs.SignUpLastNameField.clear();
        buttonConfigs.SignUpEmailField.clear();
        buttonConfigs.SignUpPasswordField.clear();
        buttonConfigs.SignUpReEnterPasswordField.clear();
        buttonConfigs.SignUpNameField.click()
        
        cy.contains('p', "Name required")
            .should('have.css', 'color', 'rgb(220, 53, 69)')
            .and('have.css', 'color', 'rgb(220, 53, 69)')
        buttonConfigs.SignUpNameField
            .should("have.css", "border-bottom-color", "rgb(220, 53, 69)")
        cy.contains('p', "Last name required")
            .should('have.css', 'color', 'rgb(220, 53, 69)')
        buttonConfigs.SignUpLastNameField
            .should("have.css", "border-bottom-color", "rgb(220, 53, 69)")
        cy.contains('p', "Email required")
            .should('have.css', 'color', 'rgb(220, 53, 69)')
        buttonConfigs.SignUpEmailField
            .should("have.css", "border-bottom-color", "rgb(220, 53, 69)")
        cy.contains('p', "Password required")
            .should('have.css', 'color', 'rgb(220, 53, 69)')
        buttonConfigs.SignUpPasswordField
            .should("have.css", "border-bottom-color", "rgb(220, 53, 69)")
        cy.contains('p', "Re-enter password required")
            .should('have.css', 'color', 'rgb(220, 53, 69)')
        buttonConfigs.SignUpReEnterPasswordField
            .should("have.css", "border-bottom-color", "rgb(220, 53, 69)")
        buttonConfigs.SignUpRegisterButton.should("be.disabled")
    })
    it("NEGATIVE: Sign up with invalid data", ()=>{
        buttonConfigs.executeSignUpInvalid("Андрій","12345","qwerty.com",`${invalidPass}`,`${invalidPass}`)
        buttonConfigs.SignUpPasswordField.click()
        cy.contains('p', "Name is invalid")
            .should('have.css', 'color', 'rgb(220, 53, 69)')
        buttonConfigs.SignUpNameField
            .should("have.css", "border-bottom-color", "rgb(220, 53, 69)")
        cy.contains('p', "Last name is invalid")
            .should('have.css', 'color', 'rgb(220, 53, 69)')
        buttonConfigs.SignUpLastNameField
            .should("have.css", "border-bottom-color", "rgb(220, 53, 69)")
        cy.contains('p', "Email is incorrect")
            .should('have.css', 'color', 'rgb(220, 53, 69)')
        buttonConfigs.SignUpEmailField
            .should("have.css", "border-bottom-color", "rgb(220, 53, 69)")
        cy.get("[class=invalid-feedback]").eq(3)
            .should('have.css', 'color', 'rgb(220, 53, 69)')
        buttonConfigs.SignUpPasswordField
            .should("have.css", "border-bottom-color", "rgb(220, 53, 69)")
        cy.get("[class=invalid-feedback]").eq(4)
            .should('have.css', 'color', 'rgb(220, 53, 69)')
        buttonConfigs.SignUpReEnterPasswordField
            .should("have.css", "border-bottom-color", "rgb(220, 53, 69)")
        buttonConfigs.SignUpRegisterButton.should("be.disabled")
    })
    it("NEGATIVE: Sign up with no matched password", ()=>{
        buttonConfigs.executeSignUpInvalid("Andrii", "Poshtaruk", EmailGenerate(), `${validPass}`, "1qaz@WSXq")
        buttonConfigs.SignUpPasswordField.click()
        cy.contains("p", "Passwords do not match")
            .should("have.css", "color", "rgb(220, 53, 69)")
        buttonConfigs.SignUpRegisterButton.should("be.disabled")  
    })
    it("NEGATIVE: Sign up - Name and last name with 1 symbol", ()=>{
        buttonConfigs.executeSignUpInvalid("a","b", EmailGenerate(), `${validPass}`, `${validPass}`)
        cy.contains('p', "Name has to be from 2 to 20 characters long")
            .should('have.css', 'color', 'rgb(220, 53, 69)')
        buttonConfigs.SignUpNameField
            .should("have.css", "border-bottom-color", "rgb(220, 53, 69)")
        cy.contains('p', "Last name has to be from 2 to 20 characters long")
            .should('have.css', 'color', 'rgb(220, 53, 69)')
        buttonConfigs.SignUpLastNameField
            .should("have.css", "border-bottom-color", "rgb(220, 53, 69)")
        buttonConfigs.SignUpRegisterButton.should("be.disabled")  
    })
    it("NEGATIVE: Sign up - Name and last name with 21 symbol", ()=>{
        buttonConfigs.executeSignUpInvalid("aqwertyuiopasdfghjklz","aqwertyuiopasdfghjklz", EmailGenerate(), `${validPass}`, `${validPass}`)
        cy.contains('p', "Name has to be from 2 to 20 characters long")
            .should('have.css', 'color', 'rgb(220, 53, 69)')
        buttonConfigs.SignUpNameField
            .should("have.css", "border-bottom-color", "rgb(220, 53, 69)")
        cy.contains('p', "Last name has to be from 2 to 20 characters long")
            .should('have.css', 'color', 'rgb(220, 53, 69)')
        buttonConfigs.SignUpLastNameField
            .should("have.css", "border-bottom-color", "rgb(220, 53, 69)")
        buttonConfigs.SignUpRegisterButton.should("be.disabled")  
    })
    it("POSITIVE: Sign in with exist user", ()=>{
        const email = EmailGenerate();
        buttonConfigs.executeSignUpValid("An", "Pasdfghjklzxcvbnmfgd", `${email}`, `${validPass}`, `${validPass}`)
        cy.get("[id=userNavDropdown]").click()
        cy.contains('button', 'Logout').click()
        cy.login(`${email}`,`${validPass}`)
        cy.get("app-garage div[class=panel-page]")
        .should("be.visible")
    })
    it("NEGATIVE: Sign in with not exist user", ()=>{
        cy.login("test_abracadabra1234@gmail.com",`${validPass}`)
        cy.contains("p", "Wrong email or password")
        .should("be.visible")
    })


})
