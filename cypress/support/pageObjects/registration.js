class registration
{
getTitle(){
    return cy.title()
}
getSearchBox()
{
    return cy.get('#text-autosuggest')
}

getResultDropdown()
{

    return cy.get('.MuiButton-label > .MuiSvgIcon-root')
}


getDropdown()
{
    return cy.get('[data-testid=autoSuggestItemContainer]')
}

getSuccessMessage()
{
    return cy.get('.MuiPaper-root > .MuiTypography-root')
}

getNoResultFound()
{
    return cy.get('.MuiTableBody-root > .MuiTableRow-root > .MuiTableCell-root')
}

getResultItem()
{
    return cy.get('[data-testid*=tbDataRow-] > :nth-child(1)')
}

submitButton()
{
   return cy.get('[data-testid=stepSubmit]')
}

}

export default registration;