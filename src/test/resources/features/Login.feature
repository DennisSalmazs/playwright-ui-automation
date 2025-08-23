@login
Feature: As a user
  I login to the app

  Background:
    Given I am on the "LOGIN" page

  Scenario Outline: Valid users are able to login
    When I log in with "<username>" with "<password>"
    Then I verify I am on the "<page>" page

    Examples:
      | username      | password     | page      |
      | standard_user | secret_sauce | INVENTORY |
      | visual_user   | secret_sauce | INVENTORY |

  Scenario Outline: Invalid users are not able to login
    When I log in with "<username>" with "<password>"
    Then I verify the logging error message "<errorMsg>"

    Examples:
      | username        | password         | errorMsg                                                                  |
      | locked_out_user | secret_sauce     | Epic sadface: Sorry, this user has been locked out.                       |
      | standard_user   | invalid_password | Epic sadface: Username and password do not match any user in this service |
      | invalid_user    | secret_sauce     | Epic sadface: Username and password do not match any user in this service |