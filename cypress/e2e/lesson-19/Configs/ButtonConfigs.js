export default class ButtonConfigs{
    pageUrl = "/"
    
    get headerHomeButton(){
        return cy.contains("nav a", "Home")
    }
    get headerAboutButton(){
        return cy.contains("button", "About")
    }
    get headerContactsButton(){
        return cy.contains("button", "Contacts")
    }
    get headerGuestLogInButton(){
        return cy.contains("div button", "Guest log in")
    }
    get headerSignInButton(){
        return cy.contains("div button", "Sign In")
    }
    get headerSignUpButton(){
        return cy.contains("button", "Sign up")
    }
    get SignUpNameField(){
        return cy.get("form input[name=name]")
    }
    get SignUpLastNameField(){
        return cy.get("form input[name=lastName]")
    }
    get SignUpEmailField(){
        return cy.get("form input[name=email]")
    }
    get SignUpPasswordField(){
        return cy.get("form input[name=password]")
    }
    get SignUpReEnterPasswordField(){
        return cy.get("form input[name=repeatPassword]")
    }
    get SignUpRegisterButton(){
        return cy.get("div button[class='btn btn-primary']")
    }
    executeSignUpValid(name, lastName, email, password, reEnterPassword){
        this.headerSignUpButton.click()
        this.SignUpNameField.type(name)
        this.SignUpLastNameField.type(lastName)
        this.SignUpEmailField.type(email)
        this.SignUpPasswordField.type(password)
        this.SignUpReEnterPasswordField.type(reEnterPassword)
        this.SignUpRegisterButton.click()
    }
    executeSignUpInvalid(name, lastName, email, password, reEnterPassword){
        this.headerSignUpButton.click()
        this.SignUpNameField.type(name)
        this.SignUpLastNameField.type(lastName)
        this.SignUpEmailField.type(email)
        this.SignUpPasswordField.type(password)
        this.SignUpReEnterPasswordField.type(reEnterPassword)
    }
}