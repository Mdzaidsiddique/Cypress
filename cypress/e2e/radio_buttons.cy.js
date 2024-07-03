describe("Radio buttons and Checkboxes", ()=>{

    it("Checking Radio Buttons", ()=>{

        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.url().should('contain', 'blog')

        // visibility of radio buttons
        cy.get("#male").should('be.visible');
        cy.get("#female").should('be.visible'); 

        // selecting radio buttons
        cy.get('#male').check().should('be.checked')
        cy.get("input#female").should('not.be.checked')

        cy.get('#female').check().should('be.checked')
        cy.get("#male").should('not.be.checked')
    })

    it("Checking checkboxes", ()=>{

        cy.visit("https://testautomationpractice.blogspot.com/")

        // visibility of checkboxes
        cy.get('#sunday').should('be.visible')

        // selectying single checkbox
        cy.get('#sunday').check().should('be.checked')
        cy.get('#sunday').uncheck().should('not.be.checked')

        // selecting multiuple checkboxes
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')

        // un-selecting all the checkboxes
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        // select first and last checkbox ampng multiple checkboxes
        cy.get("input.form-check-input[type='checkbox']").first().check()
        cy.get("input.form-check-input[type='checkbox']").last().check()

    })
})