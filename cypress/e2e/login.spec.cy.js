import userData from '../fixtures/User/userData.json'

describe('Orange HRM Test', () => {
 const selectorslist= {
   usernameField: "[name='username']",
   passwordField: "[name='password']",
   loginButton: "[type='submit']",
   sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
   dashboardGrid: '.orangehrm-dashboard-grid',
   wrongCredentialAlert: '.oxd-alert',
   myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
   firstNameFiled: '[name="firstName"]',
   lastNameField: '[name="lastName"]',
   genericField: '.oxd-input--active',
   dataField: '[placeholder="yyyy-dd-mm"]',
   dataCloseButton: ".--close",
   submitButton: '[type="submit"]'
   
 } 
             
  it.only('User info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorslist.usernameField).type(userData.userSeccess.username)
    cy.get(selectorslist.passwordField).type(userData.userSeccess.password)
    cy.get(selectorslist.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorslist.dashboardGrid)
    cy.get(selectorslist.myInfoButton).click()
    cy.get(selectorslist.firstNameFiled).clear().type('firstNameTeste')
    cy.get(selectorslist.lastNameField).clear().type('lastNameteste')
    cy.get(selectorslist.genericField).eq(3).clear().type('9876')
    cy.get(selectorslist.genericField).eq(4).clear().type('1597530')
    cy.get(selectorslist.genericField).eq(5).clear().type('fabricio56897')
    cy.get(selectorslist.dataField).eq(0).clear().type('2025-10-05')
    cy.get(selectorslist.dataCloseButton).click()
    cy.get(selectorslist.dataField).eq(1).clear().type('1981-10-15')
    cy.get(selectorslist.dataCloseButton).click() 
    cy.get(selectorslist.submitButton).eq(0).click()
    cy.get('body').should('contain' ,'Successfully Updated')
    cy.get('.oxd-toast-close')
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorslist.usernameField).type(userData.userFail.username)
    cy.get(selectorslist.passwordField).type(userData.userFail.password)
    cy.get(selectorslist.loginButton).click()
    cy.get(selectorslist.wrongCredentialAlert)
    
  })   
})