## Branch: Rate It All - Cypress test

Author: Zhi Ling

Branch Description: This branch is a Cypress test branch for the [main](https://github.com/zlnortheastern/rate-it-all) branch.

**Here is the video for demo.**

### Test setup

Clone this branch by:

```plaintext
git clone https://github.com/zlnortheastern/rate-it-all.git
git checkout cypress-test
```

Make sure you have installed [Node.js](https://nodejs.org/en).

Then install packages:

```plaintext
npm install
```

Run the application locally:

```plaintext
npm run dev
```

Then you can visit [http://localhost:5173/](http://localhost:5173/).

You can start Cypress test by:

```plaintext
npx cypress open
```

Choose E2E Testing, start it in any browser, then click on rate-it-all.cy.js to start it.

### Test Cases

1.  Home page basic frame test
    1.  Test navbar buttons
    2.  Test footer text
    3.  Test category list
    4.  Test login system
2.  Create a new thread
    1.  Navigate to create page
    2.  Fill the thread form and submit
3.  Find the thread
    1.  Test filting thread list by category
    2.  Navigate to thread page
    3.  Check thread information
4.  Perform rating an object
    1.  Navigate to rating page
    2.  Submit a 10 score rating
    3.  Submit a 2 score rating
    4.  Check the average rating
5.  Perform rating view page
    1.  Navigate to view page
    2.  Check object information
    3.  Check ratings including username and comment
6.  Test clearup
    1.  Delete the thread
    2.  Check if thread deleted successfully
