describe("handling dropdowns", ()=>{

    it.skip("Drop down with select", ()=>{ // .skip() :: it block not participate in the execution
        cy.visit("https://www.zoho.com/commerce/free-demo.html");
        cy.url().should('eq', 'https://www.zoho.com/commerce/free-demo.html')

        cy.get("#zcf_address_country").select("Italy").should('have.value', 'Italy')
        // select() can be called only on <select> tag
    })

    it.skip("Bootstrap Drop down without select tag", ()=>{ //<span tag>
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");

        cy.get("#select2-billing_country-container").click()
        cy.get("input.select2-search__field").type("Norway").type('{enter}') // type('{enter}') :: hit enter button
        
        cy.get("#select2-billing_country-container").should('have.text', 'Norway') // we are verifying text :: have.text
    })

    it.skip("Auto Suggestion Dropdown", ()=>{
        cy.visit("https://www.wikipedia.org/")
        cy.get("#searchInput").type("Delhi")
        cy.get(".suggestion-title").contains("Delhi University").click() 
        // contains(x):: check & select if x is there
    })

    it.skip("dynamic Drop down", ()=>{
        cy.visit("https://www.google.com/")

        cy.get("[name='q']").type('computer')

        cy.wait(3000) // wait for 3 sec

        cy.get("div.wM6W7d[role='presentation']>span").should('have.length', 10)

        // cy.get("div.wM6W7d[role='presentation']>span").contains("computer history").click() 

        // because it is dynamic in nature some time contains(), click()..etc not work
        // for that we have to write jQueary function (iterate each after another)
        // .each(element, index, list)

        cy.get("div.wM6W7d[role='presentation']>span").each(($el, index, $list)=>{
            if($el.text()==='computer'){
                cy.wrap($el.click())
            }
        })

        cy.get("[name='q']").should('have.value', 'computer')

    })
})