/* global cy */

/// <reference types="cypress" />

describe("rate-it-all loads properly", () => {
  // Executed before each test
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("loads homepage basic interface", () => {
    // Test nav bar
    const nav = cy.get("#root > div > div > nav").should("exist");
    nav.get(".navbar-brand").should("have.text", "RATE IT ALL");
    nav.get(".nav-link.active").should("have.text", "Home");
    nav.get(".btn.btn-link.px-3.me-2").should("have.text", "Login");
    nav.get(".btn.btn-dark").should("have.text", "Create");

    // Test Category list
    cy.get("div [name='Category title']").should("have.text", "Category List");
    const categoryList = [
      "All",
      "News",
      "Film",
      "TV Show",
      "Music",
      "Science",
      "Technology",
      "Game",
      "Sport",
      "E-sport",
      "Life",
      "Other"
    ];
    categoryList.map((item) => {
      cy.get(`ul [name='${item}']`).should("have.text", item);
    });


    // Test footer
    const footer = cy.get("#root > div > div > footer").should("exist");
    footer.get(".text-muted").should("have.text", "Made by Zhi Ling");
  });

  it("perform login system", () => {
    // Perform Login
    // Cypress is not allowed logging in alert window so here login by setting local storage
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", "cypress");
    cy.reload();
    cy.contains("Logged in as: cypress");
  });
});