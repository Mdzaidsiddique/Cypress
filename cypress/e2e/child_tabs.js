
describe("Handling Child Tab", () => {
    it("Approach 1", ()=>{
        cy.visit("https://the-internet.herokuapp.com/windows") // parent tab

        cy.get(".example >a").invoke('removeAttr', 'target').click() // removing target attribute from <a> tag, then click to open link on same tab

        // cy.wait(3000)

        cy.url().should('eq', 'https://the-internet.herokuapp.com/windows/new');

        // perform operations and then go back to parent tab
        cy.go('back')
    })

    it.only("Approach 2", () => {
        
        // it will work only for same domain (herokuapp.com)
        // https://the-internet.herokuapp.com/windows
        // https://the-internet.herokuapp.com/windows/new

        cy.visit("https://the-internet.herokuapp.com/windows") // parent tab

        // opening child tab in parent page by using href<>
        cy.get(".example >a").then((element) => {

            const childLink = element.prop('href');   // prop: property

            cy.visit(childLink)
        })


        cy.url().should('eq', 'https://the-internet.herokuapp.com/windows/new');

        cy.wait(3000)

        // perform operations and then go back to parent tab
        cy.go('back')

        
    })
})