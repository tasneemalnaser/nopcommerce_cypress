/// <reference types="Cypress" />
 
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

Cypress.Commands.add("Add_items",()=>{

let randomItemToSelect = Math.floor(Math.random() * 3); // Generate a random number between 0 and 2

// Find the category grid and select a category by the random index
cy.get('.category-grid.home-page-category-grid .item-box').eq(randomItemToSelect).click();

const randomCategoryIndex = Math.floor(Math.random() * 3);

// Find and click the sub-category item using the random index
cy.get('.category-grid.sub-category-grid .item-grid .item-box')
  .eq(randomCategoryIndex)
  .click();



let randomProduct =Math.floor(Math.random()*2);
// Find and click the sub-category item using the random index
cy.get('.item-grid .item-box')
.eq(randomProduct)
.find('.product-box-add-to-cart-button').click();
})

describe('template spec', () => {
  it('', () => {
    cy.visit("https://demo.nopcommerce.com/")

  })
})

describe('Register to the website', () => {
  it('fill in the info for registeration', () => {
    cy.visit("https://demo.nopcommerce.com/")
    cy.get('.ico-register').click()
    cy.get('#gender-female').click()
    cy.get('#FirstName').type("Tas")
    cy.get('#LastName').type("nas")

// Select a day - replace '1' with the desired day value
cy.get('select[name="DateOfBirthDay"]').select('1');

// Select a month - replace 'January' with the desired month
cy.get('select[name="DateOfBirthMonth"]').select('January');

cy.get('select[name="DateOfBirthYear"]').then(($select) => {
  const yearOptions = Array.from($select[0].options);
  
  // Generate a random index within the range of available years
  const randomIndex = Math.floor(Math.random() * (yearOptions.length - 1)) + 1;

  // Select the random year by its index
  cy.get('select[name="DateOfBirthYear"]').select(yearOptions[randomIndex].value);
});
cy.get('#Email').type("idrandom701@gmail.com")
cy.get('#Company').type("IT-software")
cy.get('#Password').type("123456789")
cy.get('#ConfirmPassword').type("123456789")
cy.get('#register-button').click()

});


});

describe('Log in ', () => {
  it('log in with correct username and corresct password', () => {
    cy.visit("https://demo.nopcommerce.com/")
    cy.get('.ico-login').click()
    cy.get('#Email').type("idrandom701@gmail.com")
    cy.get('#Password').type("123456789")
    cy.wait(2000)
    cy.get('form > .buttons > .button-1').click()

  });
});

describe('choose a random category and add it to the cart', () => {
  it('choose random category', () => {
    cy.visit("https://demo.nopcommerce.com/")
    cy.Add_items();
    cy.wait(5000);
    cy.get('#topcartlink').click();
    cy.wait(5000);
    cy.get('#termsofservice').click()
    cy.get('#checkout').click()
    cy.get('.checkout-as-guest-button').click()
    cy.get('#BillingNewAddress_FirstName').type("Tasneem")
    cy.get('#BillingNewAddress_LastName').type("Ahmad")
    cy.get('#BillingNewAddress_Email').type("coursesallworld@gmail.com")
    cy.get('#BillingNewAddress_Company').type("none")
    cy.get('#BillingNewAddress_CountryId').select('Jordan')
    cy.get('#BillingNewAddress_StateProvinceId').select('Other')
    cy.get('#BillingNewAddress_City').type("Amman")
    cy.get('#BillingNewAddress_Address1').type("Amman")
    cy.get('#BillingNewAddress_Address2').type("Amman")
    cy.get('#BillingNewAddress_ZipPostalCode').type("11123")
    cy.get('#BillingNewAddress_PhoneNumber').type("0786040356")
    cy.get('#billing-buttons-container > .new-address-next-step-button').click()
    cy.get('#shipping-method-buttons-container > .button-1').click()
    cy.get('#paymentmethod_1').click()
    cy.get('#payment-method-buttons-container > .button-1').click()
    cy.get('#CreditCardType').select('MasterCard')
    cy.get('#CardholderName').type("Tasneem")
    cy.get('#CardNumber').type("5555 5555 5555 4444")
    cy.get('#ExpireMonth').select('12')
    cy.get('#CardCode').type("853")
    cy.get('#payment-info-buttons-container > .button-1').click()
    cy.get('#confirm-order-buttons-container > .button-1').click()
    cy.wait(4000)
    cy.get('.buttons > .button-1').click()
  });
  });