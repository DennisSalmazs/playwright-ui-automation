@auth
Feature: User Authentication

  Background:
    Given I am on the login page

  Scenario Outline: Valid users are able to login
    When I log in with "<username>" with "<password>"
    Then I verify the "<url>"
    And I persist the session as "<username>"

    Examples:
      | username      | password     | url                                      |
      | standard_user | secret_sauce | https://www.saucedemo.com/inventory.html |
      | problem_user  | secret_sauce | https://www.saucedemo.com/inventory.html |
      | visual_user   | secret_sauce | https://www.saucedemo.com/inventory.html |

  Scenario Outline: Invalid users are not able to login
    When I log in with "<username>" with "<password>"
    Then I verify the logging error message "<errorMsg>"

    Examples:
      | username        | password         | errorMsg                                                                  |
      | locked_out_user | secret_sauce     | Epic sadface: Sorry, this user has been locked out.                       |
      | standard_user   | invalid_password | Epic sadface: Username and password do not match any user in this service |
      | invalid_user    | secret_sauce     | Epic sadface: Username and password do not match any user in this service |

