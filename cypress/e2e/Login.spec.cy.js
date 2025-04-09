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
    })
  */  
   
      
   import userData from '../fixtures/userData.json'
   
   describe('Orange HRM Tests', () =>{
    const selectorslist = {
      usernameField: "[name='username']",
      passwordField: "[name='password']",
      loginButton: "[type='submit']",
      sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
      dashboarsGrid: ".orangehrm-dashboard-grid",
      wrongCredentialAlert: "[role='alert']"
      }

    

    it('Login - Success', () => {
        cy.visit('/auth/login')
        cy.get(selectorslist.usernameField).type(userData.userSuccess.username)
        cy.get(selectorslist.passwordField).type(userData.userSuccess.password)
        cy.get(selectorslist.loginButton).click()
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(selectorslist.dashboarsGrid)
      })       
      it('Login - Fail', () => {  
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(selectorslist.usernameField).type(userData.userFail.username)
        cy.get(selectorslist.passwordField).type(userData.userFail.password)
        cy.get(selectorslist.loginButton).click()
        cy.get(selectorslist.wrongCredentialAlert)
  
    })
  }) 
   
