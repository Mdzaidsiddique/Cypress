describe("Assertions", ()=>{

    // implisit assertions (cypress built-in assertions) :: should, and 
    it("Implisit assertions", ()=>{
        
        // cy.visit() :: to launch web application
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        // URL
        // cy.url() :: it will return the current url of th eweb page
        // .should('key', 'expected value') :: assertion method

        
        cy.url().should('include', 'orangehrmlive.com')
        cy.url().should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should('contain', "orangehrm") // include and contain work in same way
        

        //or
        cy.url()
        .should('include', 'orangehrmlive.com')
        .should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        .should('contain', "orangehrm")
        
        //or
        cy.url().should('include', 'orangehrmlive.com')
        .and('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        .and('contain', "orangehrm")

        //title 
        cy.title().should('include', "HRM")
        .should('eq', "OrangeHRM")
        .and('contain', "Orange")
        .and('not.contain', 'green') // nigative assertion


        // logo visible or not
        cy.get('.orangehrm-login-branding > img')
        .should('be.visible') 
        
        // logo exist or not
        cy.get('.orangehrm-login-branding > img')
        .should('exist')

        // No of (#) links
        cy.xpath("//a").should('have.length', 5)

        // type value in inoput box
        cy.get("input[placeholder='Username']").type('Admin')
        .should('have.value', 'Admin')
    })

    // Explisit Assertions :: cutomised assertion (we have to create using js functions)
    it("Explisit Assertions", ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()

        let expectedName = "kishn patil"


        cy.get(".oxd-userdropdown-name").then((x)=>{
            // here x is the variable which stores = cy.get("//p[@class='oxd-userdropdown-name']") element

            let actualName = x.text(); // capturing actual name

            // BDD Style assertions
            expect(actualName).to.equal(expectedName) 
            expect(actualName).to.not.equal("zaid alif")

             // TDD Style assertions
             assert.equal(actualName, expectedName);
             assert.notEqual(actualName, "zaid alif")

        })

    })
})
