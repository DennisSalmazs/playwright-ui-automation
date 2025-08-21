@inventory
Feature: User Authentication

  Background:
    Given I load session "standard_user"

    Scenario:
      When I am on the "INVENTORY" page