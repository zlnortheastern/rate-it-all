/* global cy */

/// <reference types="cypress" />

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
let currentUser = "Cypress"

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
      performLogin("Cypress");
      cy.contains("Logged in as: Cypress").should("exist");
    });

  });

  context("create a thread", () => {
    beforeEach(() => {
      cy.visit(currentPage);
      // login before creating a thread
      performLogin("Cypress");
      cy.get("#root > div > div > nav").contains("Create").click();
    });

    // Enter thread object data into form
    it("fill thread form", () => {
      cy.get("form input[name='threadTitle']").type(thread.threadTitle);
      cy.get("form select[name='threadTag']").select(thread.threadTag);
      cy.get("form input[name='threadImage']").type(thread.threadImage);
      cy.get("form textarea[name='threadDescription']").type(thread.threadDescription);

      thread.objects.map((object, i) => {
        if (i != 0) {
          cy.contains("New Object").click();
        }
        cy.get(`.objectform${i} input[name="objectName"]`).type(object.objectName);
        cy.get(`.objectform${i} input[name="objectImage"]`).type(object.objectImage);
        cy.get(`.objectform${i} textarea[name="introduction"]`).type(object.introduction);
      });

      // Submit the form
      cy.contains("Submit").click();
      cy.wait(1000);
    });
  });


  context("find a thread", () => {
    beforeEach(() => {
      cy.visit(currentPage);
    });

    it("find by category", () => {
      // Wait to make sure whole page is loaded
      cy.wait(3000);

      // Check the category to filt thread list
      cy.get(`li[name="${thread.threadTag}"] input`).check();

      // find the target thread
      cy.get(".pagination").children().its("length").then(numPage => {
        cy.contains(thread.threadTitle).should("exist");
        cy.contains(thread.threadDescription).should("exist");
        thread.objects.slice(0, 3).map((object) => {
          cy.get(`img[name="${object.objectName}"]`).should("have.attr", "src", object.objectImage);
        });
        cy.get(`img[name="${thread.threadTitle}"]`).should("have.attr", "src", thread.threadImage).click();
        cy.url().then(url => {
          currentPage = url;
        });
      });

      it("verify thread information", () => {
        cy.contains(thread.threadTitle).should("exist");
        cy.contains(thread.threadDescription).should("exist");
        cy.get('img[src="' + thread.threadImage + '"]').should("exist");
        // verify image here
        thread.objects.map((object, i) => {
          cy.contains(object.objectName).should("exist");
          cy.contains(object.introduction).should("exist");
          cy.get('img[src="' + object.objectImage + '"]').should("exist");
          //cy.get(`h5[name="objectrating${i}"]`).contains("0.0");
          cy.get(`button[name="rateobject${i}"]`).should("exist");
          cy.get(`button[name="viewobject${i}"]`).should("exist");
        })
      });
    });
  });

  context("perform rating an object", () => {
    beforeEach(() => {
      cy.visit(currentPage);
      // login before rating an object
      performLogin(currentUser);
      cy.wait(1000);
    });

    it("go into rating page", () => {
      // Click redirecting button
      cy.get(`button[name="rateobject0"]`).click();

      // verify basic rating page components
      cy.get("legend").should("have.text", "Rate it");
      cy.get("label[for='ratingComment']").should("have.text", "Comment");
      cy.url().then(url => {
        currentPage = url;
      });
    });

    it("submit a 10 rating", () => {
      cy.get("svg[name='star4']").click();
      cy.get("textarea[name='comment']").type("This is a Cypress test rating 1.");
      cy.contains("Submit").click();
      cy.wait(1000);
      cy.url().then(url => {
        currentPage = url;
      });
      // Change another user to add another rating
      currentUser = "Cypress0";
    });

    it("verify average rating 1st time", () => {
      cy.get("h5[name='objectrating0']").contains("10.0");
    });

    it("submit a 2 rating", () => {
      cy.get(`button[name="rateobject0"]`).click();
      cy.get("svg[name='star0']").click();
      cy.get("textarea[name='comment']").type("This is a Cypress test rating 2.");
      cy.contains("Submit").click();
      cy.wait(1000);
      cy.url().then(url => {
        currentPage = url;
      });
    });

    it("verify average rating 2nd time", () => {
      cy.get("h5[name='objectrating0']").contains("6.0");
    });
  });

  context("perform rating view page", () => {
    beforeEach(() => {
      cy.visit(currentPage);
      cy.wait(1000);
    });

    it("go into view page", () => {
      cy.get(`button[name="viewobject0"]`).click();
      cy.url().then(url => {
        currentPage = url;
      });
    });

    it("verify object info", () => {
      cy.contains(thread.objects[0].objectName).should("exist");
      cy.contains(thread.objects[0].introduction).should("exist");
      cy.get('img[src="' + thread.objects[0].objectImage + '"]').should("exist");
    });

    it("verify ratings", () => {
      cy.get(".card-header").contains("Cypress").should("exist");
      cy.get(".card-text").contains("This is a Cypress test rating 1.").should("exist");
      cy.get(".card-header").contains("Cypress0").should("exist");
      cy.get(".card-text").contains("This is a Cypress test rating 2.").should("exist");
    });

    it("go back", () => {
      cy.contains("Back").click();
      cy.wait(100);
      cy.url().then(url => {
        currentPage = url;
      });
    });
  });

  // Delete the created thread to make sure we test more than once
  context("test clearup", () => {
    beforeEach(() => {
      cy.visit(currentPage);
      cy.wait(1000);
    });

    it("delete created thread", () => {
      cy.contains("Delete").click();
      cy.wait(1000);
      cy.url().then(url => {
        currentPage = url;
      });
    });

    // Test if there exists the thread
    it("check if thread deleted", () => {
      cy.get(".pagination").children().its("length").then(numPage => {
        for (let i = 1; i <= numPage; i++) {
          cy.get(".page-link").contains(i.toString()).click();
          cy.contains(thread.threadTitle).should("not.exist");
        }
      });
    });
  });
});

// Cypress is not allowed logging in alert window so here login by setting local storage
function performLogin(username) {
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("username", username);
  cy.reload();
}