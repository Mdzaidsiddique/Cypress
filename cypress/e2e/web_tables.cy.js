describe("Handling Web Tables", () => {

    beforeEach("Log In", () => { // it is called hook

        cy.visit("https://testautomationpractice.blogspot.com/")
        //login logic
        
    })

    it.skip("Check Number of Rows and columns", () => {
        cy.visit("https://testautomationpractice.blogspot.com/")

        cy.get('table[name="BookTable"] >tbody >tr').should("have.length", '7')
        cy.get("table[name='BookTable'] >tbody:first-child th").should("have.length", '4')

    })

    it.skip("check cell data from rows and columns", () => {
        
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('table[name="BookTable"] >tbody >tr:nth-child(6) >td:nth-child(3)').contains("JAVA")
    })


    it.skip("Read All the rows and columns of the first page", () => {

        cy.visit("https://testautomationpractice.blogspot.com/")
        
        cy.get("table[name='BookTable'] >tbody tr:not(:first-child)")
            .each(($row, index, $rows) => { // $row: current row, $rows: all the rows of the table

                cy.wrap($row).within(() => {     
                    cy.get("td")
                        .each(($data, index, $datas) => {
                            cy.log($data.text());     
                    })
                })
        })
    })

    it("Pagination: Read all the data from all the pages", () => {
        
        cy.visit("https://testautomationpractice.blogspot.com/", () => {
            
            cy.get()
        })
    })
})