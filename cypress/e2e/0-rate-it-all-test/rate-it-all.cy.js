/* global cy */

/// <reference types="cypress" />

import { object } from "prop-types";

// global variable thread used to test app
const thread = {
  threadTitle: "Test thread created by Cypress",
  threadTag: "Technology",
  threadImage: "https://www.cypress.io/_astro/navbar-brand.D87396b0.svg",
  threadDescription: "This is a test thread created by Cypress.",
  objects: [{
    objectName: "test 1",
    objectImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZKw8fy2OV8b0FgUmRZ2BzBcvjCNHuvHK7BCpeuUzeum_qBYXss2zMTjsjZ4lxlQzlcYQ&usqp=CAU",
    introduction: "This is cypress test 1.",
  }, {
    objectName: "test 2",
    objectImage: "https://construct-static.com/uploads/4987/f01b0ce6-8896-4bc5-92ca-bd1278736ed3/c/-895885962/mainimage.png",
    introduction: "This is cypress test 2.",
  }, {
    objectName: "test 3",
    objectImage: "https://d3eeke16mv0lt7.cloudfront.net/sites/default/files/styles/article_hero_image/public/field/image/3-strategies-manage-test-data.jpg?itok=ebDTLcWk",
    introduction: "This is cypress test 3.",
  },],
}

let currentPage = "http://localhost:5173/";

describe("rate-it-all loads properly", () => {

  context("home page basic frame test", () => {
    // Executed before each test
    beforeEach(() => {
      cy.visit(currentPage);
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

  });
  // context("create a thread", () => {
  //   beforeEach(() => {
  //     cy.visit("http://localhost:5173/");
  //     performLogin();
  //     cy.get("#root > div > div > nav").contains("Create").click();
  //   });

  //   it("fill thread form", () => {
  //     cy.get("form input[name='threadTitle']").type(thread.threadTitle);
  //     cy.get("form select[name='threadTag']").select(thread.threadTag);
  //     cy.get("form input[name='threadImage']").type(thread.threadImage);
  //     cy.get("form textarea[name='threadDescription']").type(thread.threadDescription);

  //     thread.objects.map((object, i) => {
  //       if(i != 0){
  //         cy.contains("New Object").click();
  //       }
  //       cy.get(`.objectform${i} input[name="objectName"]`).type(object.objectName);
  //       cy.get(`.objectform${i} input[name="objectImage"]`).type(object.objectImage);
  //       cy.get(`.objectform${i} textarea[name="introduction"]`).type(object.introduction);
  //     });

  //     cy.contains("Submit").click();
  //   });
  // });

  context("find a thread", () => {
    // Wait for page loading
    beforeEach(() => {
      cy.visit(currentPage);
      cy.wait(2000);
    });

    it("find by category", () => {
      cy.get(`li[name="${thread.threadTag}"] input`).check();
      cy.contains(thread.threadTitle);
      cy.contains(thread.threadDescription);
      thread.objects.slice(0, 3).map((object) => {
        cy.get(`img[name="${object.objectName}"]`).should("have.attr", "src", object.objectImage);
      });
      cy.get(`img[name="${thread.threadTitle}"]`).should("have.attr", "src", thread.threadImage).click();
      cy.url().then(url => {
        currentPage = url;
      });
      cy.log(currentPage);
    });

    context("perform thread page", () => {
      beforeEach(() => {
        cy.visit(currentPage);
        cy.wait(1000);
      });
  
      it("verify thread information", () => {
        cy.contains(thread.threadTitle);
        cy.contains(thread.threadDescription);
        cy.get('img[src="' + thread.threadImage + '"]').should('exist');
        // verify image here
        thread.objects.map((object, i) => {
          cy.contains(object.objectName);
          cy.contains(object.introduction);
          cy.get('img[src="' + object.objectImage + '"]').should('exist');
          cy.get(`h5[name="objectrating${i}"]`).contains("0.0");
        })
      });
    });
  });

});

// Cypress is not allowed logging in alert window so here login by setting local storage
function performLogin() {
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("username", "cypress");
  cy.reload();
}