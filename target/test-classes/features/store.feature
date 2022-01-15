#Author: Adara Drisana Teixeira dos Santos
@test
Feature: Store

  Scenario: Search item and validate it does not exist
    Given I access the site "http://automationpractice.com/"
    When I seach the item "camiseta"
    Then validate the message "No results were found for your search camiseta"

  Scenario: Search item and validate it is in stock
    Given I access the site "http://automationpractice.com/"
    When I seach the item "blouse"
    Then validate that it exists in stock "Blouse"
