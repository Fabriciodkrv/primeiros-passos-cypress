import userData from '../fixtures/User/userData.json'

describe('Orange HRM Test', () => {
 const selectorslist= {
   usernameField: "[name='username']",
   passwordField: "[name='password']",
   loginButton: "[type='submit']",
   sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
   dashboardGrid: '.orangehrm-dashboard-grid',
   wrongCredentialAlert: '.oxd-alert'
 } 
             
  it('Login - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorslist.usernameField).type(userData.userSeccess.username)
    cy.get(selectorslist.passwordField).type(userData.userSeccess.password)
    cy.get(selectorslist.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorslist.dashboardGrid)
 
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorslist.usernameField).type(userData.userFail.username)
    cy.get(selectorslist.passwordField).type(userData.userFail.password)
    cy.get(selectorslist.loginButton).click()
    cy.get(selectorslist.wrongCredentialAlert)
    
  })   
})