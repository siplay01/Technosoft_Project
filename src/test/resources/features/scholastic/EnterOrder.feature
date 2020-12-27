@Regression
Feature: Add Student Flyer Order

  @Smoke
  Scenario Outline: Verify teacher gets error for invalid item number in SFO (Student Flyer Order)
    When User logged in with valid <Login> and <Password>
    And User navigated to Student Flyer Orders
    And User enter <studentName> and <itemNumber>
    Then User verified that teacher gets error for invalid item number in SFO (Student Flyer Order)

    Examples:
      | Login           | Password   | studentName | itemNumber |
      | OMiller@mail.ml | OMiller123 | Harry       | 111        |
#      | JSmith@mail.ml  | JSmith123  |
#      | OMiller@mail.ml | OMiller123 |

  @Smoke
  Scenario Outline: Verify YOUR TEACHER ORDER-By Flyer jumper
    When User logged in with valid <Login> and <Password>
    And User navigated to Your Teacher Orders
    And User clicked on Price-QTY box
    Then User verified that a jumper right above the box with message: All student paper flyer orders MUST be entered in the Student Flyer Orders tab. are visible

    Examples:
      | Login           | Password   |
      | OMiller@mail.ml | OMiller123 |
#      | JSmith@mail.ml  | JSmith123  |
#      | OMiller@mail.ml | OMiller123 |