Feature: Login Page

Scenario: Login in to the application
    Given go to login page
    And select SignIn menu button
    When Enter username and password
    And Click on Sign in button
    Then User navigate to welcome page