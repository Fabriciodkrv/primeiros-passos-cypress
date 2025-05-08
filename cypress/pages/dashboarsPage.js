class  DashboarsPage{
    selectorsList(){
        const selectors = {
            dashboarsGrid: ".orangehrm-dashboard-grid",
                   
        }
        
        return selectors
    }
    checkDashboardsPage(){
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorsList().dashboarsGrid).should('be.visible')
    }
}
export default DashboarsPage 