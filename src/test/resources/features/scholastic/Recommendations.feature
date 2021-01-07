@Regression @Smoke
Feature: Recommendations for Students

  Scenario Outline: Verify that Teacher can add books in Recommendations List from Quick View
    When User logged in with valid <Login> and <Password>
    And User searched for '<Item>'
    And User added Book to ‘Recommendations to Students’ from 'Quick Look'
    Then User verified that the item is added in Recommendations to Students Lists under My Lists

    Examples:
      | Login           | Password   | Item  |
      | OMiller@mail.ml | OMiller123 | Harry |
#      | JSmith@mail.ml  | JSmith123  | Olive |
#      | OMiller@mail.ml | OMiller123 | Dune  |