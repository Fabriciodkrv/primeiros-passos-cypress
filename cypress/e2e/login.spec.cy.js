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
  import LoginPage from '../pages/loginPage'
  import DashboardPage from '../pages/dashboarsPage'
  
  const loginPage = new LoginPage()
  const dashboardPage = new DashboardPage()

  describe('Login Orange HRM Tests', () =>{
     
    it('Login - Fail', () => {  
        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.userFail.username,userData.userFail.password)
        loginPage.checkAccessIvalid()
  
    })
       
    it('Login - Success', () => {  
        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
        dashboardPage.checkDashboardsPage()
  
    })
  }) 
   
  