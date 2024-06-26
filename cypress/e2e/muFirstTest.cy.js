// spec file(cy.js) --> contains multiple test suit (describe block)
// and each test suit can contains multiple it blick (test)


describe('My First Test', () => {

    it('test-1-verify-title-positive-test', () => { // we can have multiple it block in describe

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.title().should('eq', 'OrangeHRM')
    })

    it('test-2-verify-title-nigative-test', () => {
        
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.title().should('eq', 'OrangeHRM123')
    })

  });