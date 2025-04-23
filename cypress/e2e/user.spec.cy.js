/*describe('Orange HRM Tests', () => {
  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin124')
    cy.get('.oxd-button').click()
    
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admik')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')// username
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')// password
    cy.get('.oxd-button').click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')
    })
    })*/
    
   
      
   import userData from '../fixtures/userData.json'
   
   describe('Orange HRM Tests', () =>{
    const selectorslist = {
      usernameField: "[name='username']",
      passwordField: "[name='password']",
      loginButton: "[type='submit']",
      sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
      dashboarsGrid: ".orangehrm-dashboard-grid",
      wrongCredentialAlert: "[role='alert']",
      myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
      FirstNameFilde: "[name='firstName']",
      LastNameField: "[name='lastName']",
      genericField: ".oxd-input--active",
      NationalityField: ".oxd-select-text",
      DataCloseButton:".--close",
      submitButton: "[type='submit']",
    }

    

    it.only('User Info Update - Success', () => {
        cy.visit('/auth/login')
        cy.get(selectorslist.usernameField).type(userData.userSuccess.username)
        cy.get(selectorslist.passwordField).type(userData.userSuccess.password)
        cy.get(selectorslist.loginButton).click()
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(selectorslist.dashboarsGrid)          
        cy.get(selectorslist.myInfoButton).click()
        cy.get(selectorslist.FirstNameFilde).clear().type("FirstNameTeste")
        cy.get(selectorslist.LastNameField).clear().type("LastNameTeste")
       // cy.get(selectorslist.genericField).eq(3).clear().type('NickName')
        cy.get(selectorslist.genericField).eq(3).clear().type('Employee')
        cy.get(selectorslist.genericField).eq(4).clear().type('OtherTest')
        cy.get(selectorslist.genericField).eq(5).clear().type('987654')
        cy.get(selectorslist.genericField).eq(6).clear().type('2025-05-05')
        cy.get(selectorslist.DataCloseButton).click()
        cy.get(selectorslist.NationalityField).eq(0).type('Brazilian')
        cy.get(selectorslist.submitButton).eq(0).click()
        cy.get('.oxd-toast')

      })       
      it('Login - Fail', () => {  
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(selectorslist.usernameField).type(userData.userFail.username)
        cy.get(selectorslist.passwordField).type(userData.userFail.password)
        cy.get(selectorslist.loginButton).click()
        cy.get(selectorslist.wrongCredentialAlert)
  
    })
  }) 
   
