describe("Handling Frames", () => {

    it("Approach 1", ()=>{
        
        cy.visit("https://the-internet.herokuapp.com/iframe")

        const i_frame = cy.get("#mce_0_ifr") // getting the frame and inside we have <document>
            .its('0.contentDocument.body') // its('0'): above element has <documnet>, 0: because we have only one documnet in the frame
            .should('be.visible') // assertion
            .then(cy.wrap); // wraping that element
        // this will basically return the iframe

        cy.xpath("//div[@aria-label='Close']//*[name()='svg']").click()

        // i_frame.clear().type("welcome {cmd+a}"); //{cntr+a}
        i_frame.type("hi welsome here {cmd+a}")
        cy.get("button[aria-label='Bold']").click()
    })

    // custom commands: in cy we can create our own commands refer support.command.js
    it.only("Approch 2: using custom command", () => {

        cy.visit("https://the-internet.herokuapp.com/iframe")

        cy.xpath("//div[@aria-label='Close']//*[name()='svg']").click()

        cy.getIframe("#mce_0_ifr").find("p[xpath='1']").clear().type("welcome")
        //body[id='tinymce'] >p
        
    })
})