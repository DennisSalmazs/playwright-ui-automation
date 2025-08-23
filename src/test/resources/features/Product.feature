@product
Feature: As a user
  I purchase products via cart and checkout

  Background:
    Given I am on the "LOGIN" page
    And I log in with username "standard_user" and password "secret_sauce"

  Scenario: User completes checkout for multiple products
    When I add products to cart:
      | Sauce Labs Backpack     |
      | Sauce Labs Bolt T-Shirt |
    And I click on cart link
    Then I verify products are added to the cart
    When I click on checkout button
    And I submit checkout form with values
      | label     | value   |
      | firstname | James   |
      | lastname  | Knight  |
      | postcode  | A214 UX |
    Then I verify products are ready for payment
    When I complete payment
    Then I see "Thank you for your order!" message