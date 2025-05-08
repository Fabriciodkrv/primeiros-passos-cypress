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
   const loginPage = new LoginPage()
   const dashboardPage = new DashboardPage()
   const menuPage = new MenuPage()
  
   describe('Orange HRM Tests', () =>{

    const selectorslist = {
      
      FirstNameFilde: "[name='firstName']",
      LastNameField: "[name='lastName']",
      genericField: ".oxd-input--active",
      genericComboBox: '.oxd-select-text--arrow',
      secondItemComboBox:'.oxd-select-dropdown > :nth-child(6)',
      TrirdItemComboBox:'.oxd-select-dropdown > :nth-child(4)',
      DataCloseButton:".--close",
      submitButton: "[type='submit']",
            
    }

    

    it.only('User Info Update - Success', () => {
        
         loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
        
        dashboardPage.checkDashboardsPage()
        menuPage.accessMyInfo()
        
        cy.get(selectorslist.FirstNameFilde).clear().type("FirstNameTeste")
        cy.get(selectorslist.LastNameField).clear().type("LastNameTeste")
       // cy.get(selectorslist.genericField).eq(3).clear().type('NickName')
        cy.get(selectorslist.genericField).eq(3).clear().type('Employee')
        cy.get(selectorslist.genericField).eq(4).clear().type('OtherTest')
        cy.get(selectorslist.genericField).eq(5).clear().type('987654')
        cy.get(selectorslist.genericField).eq(6).clear().type('2025-05-05')
        cy.get(selectorslist.DataCloseButton).click()
        cy.get(selectorslist.genericComboBox).eq(0).click()
        cy.get(selectorslist.secondItemComboBox).click();
        cy.get(selectorslist.genericComboBox).eq(1).click()
        cy.get(selectorslist.TrirdItemComboBox).click()
        cy.get(selectorslist.submitButton).eq(0).click()
        cy.get('.oxd-toast')
        menuPage.accessPerforance()
        
       
      })   

      it('Login - Fail', () => {  
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(selectorslist.usernameField).type(userData.userFail.username)
        cy.get(selectorslist.passwordField).type(userData.userFail.password)
        cy.get(selectorslist.loginButton).click()
        cy.get(selectorslist.wrongCredentialAlert)
  
    })
  }) 
   
  