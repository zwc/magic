Feature: Play a creature
  As an active player
  I should be able to play a creature
  So that I have a creature on the board

  Scenario:
    Given I have "W" in my mana pool
    And I have "Savannah Lions" in my hand
    When I cast "Savannah Lions"
    Then I should see "Savannah Lions" on the board
