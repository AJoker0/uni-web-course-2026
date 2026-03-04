const { expect } = require('chai');

// the main "Folder" for our tests
describe("PaymentPackage Tests", function() {
    // the first test
    it("1. Should successfully create an object with valid name and value", function() {
        //setup
        let myPackage = new PaymentPackage("Consultation", 800);

        // check
        expect(myPackage.name).to.equal("Consultation");
        expect(myPackage.value).to.equal(800);
    });

    it("2. Should set the correct default values for VAT and active", function() {
        let myPackage = new PaymentPackage("Consultation", 800);

        //check the defaults based on the class definition
        expect(myPackage.VAT).to.equal(20);
        expect(myPackage.active).to.equal(true);
    });
    it("3. Should throw an error if the name is empty or not a string", function() {
        // we must use () => here so Chai can catch the crash!
        expect(() => new PaymentPackage("", 800)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage(123, 800)).to.throw('Name must be a non-empty string');

    });
    it("4. Should throw an error if the value is negative or not a number", function() {
        expect(() => new PaymentPackage("Consultation", -10)).to.throw('Value must be a non-negative number');
        expect(() => new PaymentPackage("Consultation", "800")).to.throw('Value must be a non-negative number');
    });
    it("5. Should throw an error if someone tries to set a bad VAT", function() {
        let myPackage = new PaymentPackage("Consultation", 800);
        
        // Try to change VAT to a negative number
        expect(() => myPackage.VAT = -5).to.throw('VAT must be a non-negative number');
    });

    it("6. Should throw an error if someone tries to set a bad active status", function() {
        let myPackage = new PaymentPackage("Consultation", 800);
        
        // Try to change active to a string instead of true/false
        expect(() => myPackage.active = "yes").to.throw('Active status must be a boolean');
    });

    it("7. Should return the correct string format when active is true", function() {
        let myPackage = new PaymentPackage("HR Services", 1500);
        
        // We use \n to represent where the 'Enter' key makes a new line
        let expectedString = "Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800";
        
        expect(myPackage.toString()).to.equal(expectedString);
    });

    it("8. Should add '(inactive)' to the string when active is false", function() {
        let myPackage = new PaymentPackage("HR Services", 1500);
        myPackage.active = false; // Turn the package off
        
        let expectedString = "Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800";
        
        expect(myPackage.toString()).to.equal(expectedString);
    });
});




/* npx mocha .\12-PaymentPackage.js */