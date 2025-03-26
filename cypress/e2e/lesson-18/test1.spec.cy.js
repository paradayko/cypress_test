describe("Selectors test", ()=>{
    beforeEach(()=>{
        cy.visit('https://qauto.forstudy.space/', {
            auth: {
              username: 'guest',
              password: 'welcome2qauto',
            }
        })
    })
    it('HEADER: Logo button is clickable and visible', ()=>{
        cy.get('[class=header_logo]')
            .should('be.visible')
            .trigger("click")
    })
    it('HEADER: Home button is clickable and visible', ()=>{
        cy.get("[class='btn header-link -active']")
            .should('be.visible')
            .trigger("click")
    })
    it('HEADER: About button should be clickable and visible', ()=>{
        cy.get("[appscrollto='aboutSection']")
            .should('be.visible')
            .trigger("click")
            cy.get("[src='/assets/images/homepage/info_1.jpg']")
                .should('be.visible')
            cy.get("[src='/assets/images/homepage/info_2.jpg']")
                .should('be.visible')
    })
    it('HEADER: Contacts button should be clickable and visible',()=>{
        cy.get("[appscrollto='contactsSection']")
            .should('be.visible')
            .trigger("click")
            cy.get("[class='section contacts']>[class='container']>[class='row']")
            .should('be.visible')
    })
    it('HEADER: Guest log in button is clickable and visible',()=>{
        cy.get("[class='header-link -guest']")
            .should('be.visible')    
            .trigger("click")
            cy.get("[id=userNavDropdown]")
                .should('be.visible')    
                .trigger("click")
                cy.get('button[ngbdropdownitem]')
                    .should('be.visible')    
                    .trigger("click")
                    cy.get("[class='header-link -guest']")
                        .should('be.visible')
    })
    it("HEADER: Sign In button is clickable and visible",()=>{
        cy.get("[class='btn btn-outline-white header_signin']")
            .should('be.visible')
            .trigger("click")
            cy.get("[class='modal-title']")
                .should('be.visible')
                cy.get("[type=button]>[aria-hidden=true]")
                .trigger("click")
                cy.get("[class='modal-title']")
                        .should('not.be.visible')

    })
    it("HEADER: Sign up button is clickable and visible", ()=>{
        cy.get("[class='hero-descriptor_btn btn btn-primary']")
            .should("be.visible")    
            .trigger("click")
            cy.get("[class='modal-title']")
                .should("be.visible")
                cy.get("[aria-label='Close']>[aria-hidden=true]")
                    .trigger("click")
                    cy.get("[class='modal-title']")
                    .should("not.be.visible")
    })
    it("FOOTER: Facebook button is clickable and visible", ()=>{
        cy.get("[class='socials_icon icon icon-facebook']")
            .scrollIntoView()
            .should("be.visible")


    })
    it("FOOTER: Telegram button is clickable and visible", ()=>{
        cy.get("[class='socials_icon icon icon-telegram']")
            .scrollIntoView()
            .should("be.visible")

            
    })
    it("FOOTER: YouTube button is clickable and visible", ()=>{
        cy.get("[class='socials_icon icon icon-youtube']")
            .scrollIntoView()
            .should("be.visible")

                        
    })
    it("FOOTER: Instagramm button is clickable and visible", ()=>{
        cy.get("[class='socials_icon icon icon-instagram']")
            .scrollIntoView()
            .should("be.visible")

            
    })
    it("FOOTER: Linkedin button is clickable and visible", ()=>{
        cy.get("[class='socials_icon icon icon-linkedin']")
            .scrollIntoView()
            .should("be.visible")

            
    })
    it("FOOTER: ithillel.ua element is clickable and visible", ()=>{
        cy.get("[class='contacts_link display-4']")
            .scrollIntoView()
            .should("be.visible")


    })
    it("FOOTER: ithillel.ua element is clickable and visible", ()=>{
        cy.get("[class='contacts_link h4']")
            .scrollIntoView()
            .should("be.visible")

    })

})