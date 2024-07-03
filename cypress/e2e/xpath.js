// Using CSS selector is always good practice over xPath

describe("xPathLocators", ()=>{
    it("x-path-test-1", ()=>{
        cy.visit("https://www.demoblaze.com/index.html")


        cy.xpath("//ul/li/a[@id='login2']").click()
        cy.xpath("//input[@id='loginusername']").type('mdzaid');
        cy.xpath("//input[@id='loginpassword']").type('test@123')

        cy.get("[onclick='logIn()']").click()

    })
})

describe("xPathLocators", ()=>{
    it("x-path-test-1", ()=>{
        cy.visit("https://www.demoblaze.com/index.html")


        cy.xpath("//ul/li/a[@id='login2']").click()
        cy.xpath("//input[@id='loginusername']").type('mdzaid');
        cy.xpath("//input[@id='loginpassword']").type('test@123')

        cy.get("[onclick='logIn()']").click()   
    })
})