
// by default cypress handles alerts automatically
// we have to trigger alerts in the form of event (to perform velidation)
describe("Alerts", ()=>{

    //1) Javascript Alert: It will have some text and an 'OK' button
    it.skip("JS Alert", ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click();

        cy.on('window:alert', (t)=>{
            expect(t).to.contains("I am a JS Alert")
        })

        // alert window automatically closed by cypress, we dont need to write code to close it

        cy.get('#result').should('to.text', 'You successfully clicked an alert');
    })

    //2) Javascript Confirm Alert: It will have some text with 'OK' and 'Cancel button
        it.skip("JS confoirm Alert", ()=>{
            cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
            
            cy.get("button[onclick='jsConfirm()']").click()

            cy.on('window:confirm', (t)=>{
                expect(t).to.contains("I am a JS Confirm")
            })

            // cypress automatically closed alert by clicking on :: OK button (default nature)
            cy.get('#result').should('to.text', 'You clicked: Ok');

            // in order to closew window by clicking on :: cancel button
            cy.on('window:confirm', ()=> false) // cypress will close alert window using cancel button, by default it is true
            cy.get('#result').should('to.text', 'You clicked: Cancel')

        })

    //3) JS Prompt Alert : it will have some input box along with Ok and Cancel button
    it.skip("JS Prompt Alert", ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        // before opening we have to raise an even in which we have to pass some text in input
        cy.window().then((win)=>{

            cy.stub(win, 'prompt').returns('welcome');
        })

        cy.get('button[onclick="jsPrompt()"]').click()
        
        //be default cypress will close alert with ok button and already we have provided the welcome text
        cy.get("#result").should('have.text', "You entered: welcome")

        //event to close alert with cancel button
        cy.on('window:prompt', () => false);

        // cy.get("#result").should('have.text', "You entered: null")

    })

    // 4) Authenticated Alert:
    it.only("Authenticated Alert", ()=>{

        // Approach 1
        cy.visit("https://the-internet.herokuapp.com/basic_auth", 
                {auth:
                    {username:"admin",
                    password:"admin"}
                })
        
        cy.get("div.example p").should('have.contain', "Congratulation")

        // Approiach 2: Pass username and password with url
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
            
        cy.get("div.example p").should('have.contain', "Congratulation")


    })
            
})

// Reference: Cypress events on google