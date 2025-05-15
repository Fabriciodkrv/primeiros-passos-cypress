class  MyInfoPage{
    selectorsList(){
    const selectors = {
              
        FirstNameFilde: "[name='firstName']",
        LastNameField: "[name='lastName']",
        genericField: ".oxd-input--active",
        genericComboBox: '.oxd-select-text--arrow',
        secondItemComboBox:'.oxd-select-dropdown > :nth-child(6)',
        TrirdItemComboBox:'.oxd-select-dropdown > :nth-child(4)',
        DataCloseButton:".--close",
        submitButton: "[type='submit']",
       
    }
    return selectors
    }
    fillPersonalDetails(firsName, lastName){
        cy.get(this.selectorsList().FirstNameFilde).clear().type(firsName)
        cy.get(this.selectorsList().LastNameField).clear().type(lastName)
        
    }
    fillEmployeeDetails(employeeId, otherId, driversLicenseDate, licenseExpiryDate){
     
    cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
    cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
    cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseDate)
    cy.get(this.selectorsList().genericField).eq(6).clear().type(licenseExpiryDate)
    cy.get(this.selectorsList().DataCloseButton).click()
  
    }
    saveForm(){
        cy.get(this.selectorsList().submitButton).eq(0).click({ force: true})
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast')
        
    }
    fillStatus(){
        cy.get(this.selectorsList().genericComboBox).eq(0).click()
        cy.get(this.selectorsList().secondItemComboBox).click();
        cy.get(this.selectorsList().genericComboBox).eq(1).click()
        cy.get(this.selectorsList().TrirdItemComboBox).click()
    }
}
export default MyInfoPage 