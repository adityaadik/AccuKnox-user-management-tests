# OrangeHRM User Management Automation (Playwright)

# Project Overview

This project contains end-to-end automation test cases for the **User Management module** of the OrangeHRM application using Playwright.

The automation covers the main user management functionalities including:

* Login to the application
* Add a new user
* Search for an existing user
* Edit user details
* Validate updated information
* Delete a user

Application Under Test:
https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

Login Credentials:
Username: Admin
Password: admin123

---

## Project Structure

```
orangehrm-playwright-automation
│
├── pages
│   ├── loginPage.js
│   └── adminPage.js
│
├── tests
│   └── userManagement.spec.js
│
├── playwright.config.js
├── package.json
└── README.md


---

## Prerequisites

Before running the project, make sure the following are installed:

* Node.js (v18 or higher)
* npm (Node Package Manager)
* Playwright

---

## Project Setup Steps

1. Clone the repository

```
git clone https://github.com/adityaadik/AccuKnox-user-management-tests.git
```

2. Navigate to the project folder

```
cd orangehrm-playwright-automation
```

3. Install project dependencies

```
npm install
```

4. Install Playwright browsers

```
npx playwright install
```

---

## How to Run the Test Cases

Run all test cases:

```
npx playwright test
```

Run tests in headed mode (browser visible):

```
npx playwright test --headed
```

Run a specific test file:

```
npx playwright test tests/userManagement.spec.js
```

---

## Test Scenarios Covered

The automation includes the following test scenarios:

* Verify login functionality
* Add new user in Admin module
* Search for an existing user
* Edit user information
* Validate updated details
* Delete user

---

## Playwright Version Used

Playwright Version: 1.42.0

---

## Author

Automation script is created as QA Trainee assignment