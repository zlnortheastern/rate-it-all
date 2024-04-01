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
    performLogin();
    cy.contains("Logged in as: cypress");
  });

  context("create a thread", () => {
    beforeEach(() => {
      performLogin();
      cy.get("#root > div > div > nav").contains("Create").click();
    });

    const thread = {
      threadTitle: "Test thread created by Cypress",
      threadTag: "Technology",
      threadImage: "https://www.cypress.io/_astro/navbar-brand.D87396b0.svg",
      threadDescription: "This is a test thread created by Cypress.",
      objects: [{
        objectName: "test 1",
        objectImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZKw8fy2OV8b0FgUmRZ2BzBcvjCNHuvHK7BCpeuUzeum_qBYXss2zMTjsjZ4lxlQzlcYQ&usqp=CAU",
        introduction: "This is cypress test 1.",
      },{
        objectName: "test 2",
        objectImage: "https://construct-static.com/uploads/4987/f01b0ce6-8896-4bc5-92ca-bd1278736ed3/c/-895885962/mainimage.png",
        introduction: "This is cypress test 2.",
      },{
        objectName: "test 3",
        objectImage: "https://d3eeke16mv0lt7.cloudfront.net/sites/default/files/styles/article_hero_image/public/field/image/3-strategies-manage-test-data.jpg?itok=ebDTLcWk",
        introduction: "This is cypress test 3.",
      },],
    }

    it("fill thread form", () => {
      cy.get("form input[name='threadTitle']").type(thread.threadTitle);
      cy.get("form select[name='threadTag']").select(thread.threadTag);
      cy.get("form input[name='threadImage']").type(thread.threadImage);
      cy.get("form textarea[name='threadDescription']").type(thread.threadDescription);

      thread.objects.map((object, i) => {
        if(i != 0){
          cy.contains("New Object").click();
        }
        cy.get(`.objectform${i} input[name="objectName"]`).type(object.objectName);
        cy.get(`.objectform${i} input[name="objectImage"]`).type(object.objectImage);
        cy.get(`.objectform${i} textarea[name="introduction"]`).type(object.introduction);
      });

      cy.contains("Submit").click();
    });
  })
});

// Cypress is not allowed logging in alert window so here login by setting local storage
function performLogin() {
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("username", "cypress");
  cy.reload();
}