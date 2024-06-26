{/* <reference type="Cypress"/>  */}
// either it includes on top of every spec file or includes only once in supports/commands.js file

describe("CSS Locators", ()=>{
    it("CSS-locators", ()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("#Wikipedia1_wikipedia-search-input").type("Zaid Alif Siddique")
        cy.get("input[type='submit']").click()
        cy.get(".wikipedia-search-results").contains("No results found.");
    })
})
