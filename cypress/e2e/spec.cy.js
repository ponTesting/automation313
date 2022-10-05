describe("Search elements", () => {
  it("Search elements with multiple results", () => {
    cy.visit("http://automationpractice.com/index.php");
    cy.search("dress");
  });
});
