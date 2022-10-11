describe("313 Test Suite Pushing IT", () => {
  before("Visit Web", () => cy.visit("https://pushing-front.vercel.app/"));
  it("login", () => {
    cy.login("JeffMills", "313*Jeff");
  });
  it("List Creator", () => {
    cy.get("#todolistlink").click();
    cy.toDoCreator("axis task");
    cy.toDoCreator("axis task2");
    cy.toDoCreator("axis task3");
    cy.toDoCreator("axis task4");
  });
});
