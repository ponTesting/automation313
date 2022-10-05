describe("Search Bar", () => {
  beforeEach(cy.visit("https://developer.mozilla.org/en-US/"));
  it("Search random number", () => {
    cy.search("23535252523523131");
  });
});
