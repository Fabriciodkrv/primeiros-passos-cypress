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
  import MenuPage from '../pages/menuPage'
  import MyInfoPage from '../pages/MyInfoPage' 

  const loginPage = new LoginPage()
  const dashboardPage = new DashboardPage()
  const menuPage = new MenuPage()
  const myInfoPage = new MyInfoPage()
  
  describe('Orange HRM Tests', () =>{
       it('User Info Update - Success', () => {
        
        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
        
        dashboardPage.checkDashboardsPage()
        menuPage.accessMyInfo()
        myInfoPage.fillPersonalDetails('firsName', 'lastName')
        myInfoPage.fillEmployeeDetails('employeeId', 'otherId','0123456', '2025-05-06')
        myInfoPage.fillStatus()
        myInfoPage.saveForm()
        menuPage.accessPerforance()
        
       
      })   

      }) 
   
  