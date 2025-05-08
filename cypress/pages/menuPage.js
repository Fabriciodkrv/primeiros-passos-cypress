class MenuPage {
    selectorsList(){
        const selectors = {
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
            performanceButton: "[href='/web/index.php/performance/viewPerformanceModule']",
            adminButton: "[href='/web/index.php/pim/viewAdmin']",
            pimButtons: "[href='/web/index.php/pim/viewPimModule']",
    }
    return selectors

    }
    accessMyInfo(){
        cy.get(this.selectorsList().myInfoButton).click()
    }
    
    accessPerforance(){
        cy.get(this.selectorsList().performanceButton).click()
            
    } 
    accessAdmin(){
        cy.get(this.selectorsList().adminButton).click()

    }
    accessPin(){
        cy.get(this.selectorsList().pimButtons).click()
    }
}
export default MenuPage
    