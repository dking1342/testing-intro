/// <reference types="cypress" />

describe('Basics tests', () => {
    // way 1 - use contains or get with class or id with should method
    it('should have correct page title using contain or get', () => {
        // visit will go to a url
        cy.visit("https://codedamn.com");

        // contains checks to see if the search parameter exists in the url
        cy.contains("Learn Programming");

        // contains with should will make sure it exists as an assertion
        cy.contains("Build projects, practice and learn to code from scratch - without leaving your browser.").should("exist");

        // get is similar to a css selector or query selector
        cy.get("div");
        cy.get("div#root");
        cy.get("div#root").should("exist");
        cy.get("div#noroot").should("not.exist");

        // way 2 - using class or id names that could change
        // cy.get(".asyncComponent > div > a");

        // way 3- using data attribute to stop test
        // data-* is a data attribute that can be used to select an element
        // cy.get("[data-testid='learnbtn']").should("exist");
    });
        
    // performing click events
    it("should perform a click event for the logo", () => {
        cy.get("[data-testid='logo']").click()
    });

    // using the should method and using different attributes of the should method
    it("should have the text Learn Programming using the should method", () => {
        cy.contains("Learn Programming").should("have.text","Learn Programming");
    });

    // changing viewport size
    it("should change viewport", () => {
        // change the viewport to specific dimensions
        cy.viewport(700, 300);
        // change to dimensions of a screen size, existing device
        cy.viewport("ipad-2");
    });

    // navigating in page
    it("should click the pricing link to go to the pricing page", ()=> {
        cy.get("[data-bypassmenuclose='true']").click({force:true});
        cy.contains("Pricing").click({force:true});
        // go method will help navigate forwards or back
        // cy.go("back"); 
    });
});

describe("Register a user", () => {
    it("should click sign in button with google", () => {
        cy.visit("https://codedamn.com");
        cy.get("[data-bypassmenuclose='true']").click({force:true})
    });
    it("should click on create account button", () => {
        cy.contains("Create Account").click({force:true})      
    });
    it("should load the register page properly", () => {
        cy.get("[data-testid='name']").should("exist");
        cy.get("[data-testid='username']").should("exist");
        cy.get("[data-testid='email']").should("exist");
        cy.get("[data-testid='password']").should("exist");
        cy.url().should("include",'/register');
    });
    it("should log the current page", () => {
        // logging to the cypress logger
        cy.url().then(value => cy.log("the current url is: ", value))
    });
    it("should be able to type into the name and username text fields and submit form", () => {
        cy.get("[data-testid='name']").type("admin",{force: true});
        cy.get("[data-testid='username']").type("username1234567890",{force: true});
        cy.get("[data-testid='email']").type("admin@example.com",{force: true});
        cy.get("[data-testid='password']").type("password!@#$%^&*(987654321QWERT",{force: true});
        cy.get("[data-testid='submit-btn'").click({force:true});
    });
});

describe.only("Using the before each for each test", () => {

    const token = "abc123"

    // only one time
    before(() => {
        // accessing local storage
        cy.then(() => {
            window.localStorage.setItem("__auth__token", token);
        })
    })
    
    // for each test
    beforeEach(() => {
        cy.viewport("ipad-2");
        cy.visit("https://codedamn.com");
    });

    it("should load the home page", () => {
        cy.contains("Learn Programming").should("exist");
        cy.get("[data-testid='name']").should("exist");
        cy.get("[data-testid='username']").should("exist");
        cy.get("[data-testid='email']").should("exist");
        cy.get("[data-testid='password']").should("exist");
    });

    it("should log in the user", () => {
        cy.get("[data-testid='name']").type("admin",{force: true});
        cy.get("[data-testid='username']").type("username1234567890",{force: true});
        cy.get("[data-testid='email']").type("admin@example.com",{force: true});
        cy.get("[data-testid='password']").type("password!@#$%^&*(987654321QWERT",{force: true});
    });

    it("should load the playground", () => {
        cy.visit("https://codedamn.com/project/tesla-clone");
        cy.get("div");
        // cy.pause();
        // cy.debug();
    })



});